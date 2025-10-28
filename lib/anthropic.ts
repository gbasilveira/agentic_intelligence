import Anthropic from '@anthropic-ai/sdk'
import type { JSONSchema } from 'json-schema-to-ts'

/**
 * Singleton Anthropic client shared across the application.
 */
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

export const DEFAULT_MODEL = 'claude-3-5-sonnet-20240620'
export const DEFAULT_TEMPERATURE = 0.5

export default anthropic

/**
 * Shorthand for the SDK's message param type.
 */
export type ChatMessage = {
  role: 'user' | 'assistant';
  content: any;
}

/**
 * Tool metadata plus its runtime implementation.
 */
export interface ToolDefinition {
  /** Unique identifier Claude will use when referring to the tool. */
  name: string
  /** Full description so the model knows *when* to call the tool. */
  description: string
  /** Strict JSON‑Schema describing the input object. */
  inputSchema: JSONSchema
  /** Actual business logic executed when Claude calls the tool. */
  execute: (input: unknown) => Promise<unknown> | unknown
}

/**
 * Type for the SDK's tool definition format
 */
type SDKToolDefinition = {
  name: string;
  description: string;
  input_schema: JSONSchema;
}

/**
 * Internal helper – convert a high‑level ToolDefinition into the SDK format.
 */
function toSdkTool(tool: ToolDefinition): SDKToolDefinition {
  const { name, description, inputSchema } = tool
  return {
    name,
    description,
    input_schema: inputSchema,
  }
}

export interface ChatOptions {
  /** Override the default Claude model. */
  model?: string
  /** Temperature for randomness. */
  temperature?: number
  /** Hard limit of output tokens. */
  maxTokens?: number
  /** Optional system prompt injected into every call. */
  systemPrompt?: string
}

/**
 * Main helper that automatically handles Anthropic tool calls.
 */
export async function chat(
  conversation: ChatMessage[],
  tools: ToolDefinition[] = [],
  opts: ChatOptions = {},
): Promise<ChatMessage[]> {
  const {
    model = DEFAULT_MODEL,
    temperature = DEFAULT_TEMPERATURE,
    maxTokens = 4096,
    systemPrompt,
  } = opts

  const sdkTools = tools.map(toSdkTool) as any

  while (true) {
    const response = await anthropic.messages.create({
      model,
      temperature,
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: conversation,
      ...(sdkTools.length && { tools: sdkTools }),
    })

    // Record Claude's reply (may include normal text AND tool_use blocks).
    conversation.push({
      role: 'assistant',
      content: response.content,
    })

    if (response.stop_reason !== 'tool_use') {
      // Claude is done – deliver entire transcript to caller.
      return conversation
    }

    // Handle one or many tool calls in the assistant content.
    const toolUses = response.content.filter(
      (b): b is any => b.type === 'tool_use',
    )

    for (const use of toolUses) {
      const impl = tools.find((t) => t.name === use.name)
      if (!impl) throw new Error(`No implementation registered for tool "${use.name}"`)

      const result = await impl.execute(use.input)

      // Feed the tool output back so Claude can continue reasoning.
      conversation.push({
        role: 'user',
        content: [
          {
            type: 'tool_result',
            tool_use_id: use.id,
            content: JSON.stringify(result),
          },
        ],
      })
    }
    // Continue the loop – Claude now sees the tool_result blocks
  }
}

/**
 * Get just the final LLM response from Claude
 */
export async function getResponse(
  prompt: string | string[],
  tools: ToolDefinition[] = [],
  opts: ChatOptions = {},
): Promise<string> {
  // Convert string to message with proper format
  const content = typeof prompt === 'string' 
    ? prompt 
    : prompt.join('\n');
    
  const conversation = await chat(
    [{ role: 'user', content }],
    tools,
    opts
  );
  
  return latestAssistantText(conversation);
}

/**
 * Helper to read the latest plain‑text assistant reply.
 */
export function latestAssistantText(conversation: ChatMessage[]): string {
  for (let i = conversation.length - 1; i >= 0; i -= 1) {
    const msg = conversation[i]
    if (msg.role === 'assistant') {
      return msg.content
        .filter((c: any): c is any => c.type === 'text')
        .map((c: any) => c.text)
        .join('')
    }
  }
  return ''
}

/**
 * ────────────────────────────────────────────────────────
 * Image validation helper
 * ────────────────────────────────────────────────────────
 */

export interface ImageValidationResult {
  /** Whether the image satisfies the provided constraints. */
  valid: boolean
  /** Short explanation *why* the image is (in)valid. */
  justification: string
}

/**
 * Uses Claude's vision capabilities to decide if an image complies with
 * arbitrary constraints – e.g. "no recognizable faces", "contains exactly one
 * logo", etc.
 *
 * Supply a *base‑64 data‑URL* (e.g. `data:image/png;base64,…`). If the string
 * lacks the `data:image/…` prefix it is automatically assumed to be JPEG and
 * wrapped accordingly.
 *
 * The function returns Claude's verdict `{ valid, justification }`. When the
 * model responds with malformed JSON the image is considered **invalid** and
 * the parsing error becomes the justification.
 */
export async function validateImage(
  encodedImage: string | undefined,
  constraints: string,
  opts: ChatOptions = {},
): Promise<ImageValidationResult> {
  const {
    model = DEFAULT_MODEL,
    temperature = 0,
    maxTokens = 512,
    systemPrompt,
  } = opts

  const userBlocks: any[] = [
    { type: 'text', text: constraints },
  ]

  if (encodedImage) {
    const url = encodedImage.startsWith('data:image')
      ? encodedImage
      : `data:image/jpeg;base64,${encodedImage}`

    userBlocks.push({
      type: 'image',
      source: {
        type: 'base64',
        media_type: 'image/jpeg',
        data: url.split(',')[1],
      }
    })
  }

  const response = await anthropic.messages.create({
    model,
    temperature,
    max_tokens: maxTokens,
    system:
      systemPrompt ??
      'You are an image validation assistant. The user provides an image (optional) and textual constraints. Respond strictly with JSON: { "valid": boolean, "justification": string }. Do not output any other text.',
    messages: [
      {
        role: 'user',
        content: userBlocks,
      },
    ],
  })

  const text = response.content
    .filter((b: any): b is any => b.type === 'text')
    .map((b: any) => b.text)
    .join('')
    .trim()

  try {
    const parsed = JSON.parse(text) as ImageValidationResult
    if (
      typeof parsed.valid === 'boolean' &&
      typeof parsed.justification === 'string'
    ) {
      return parsed
    }
    throw new Error('Missing `valid` or `justification` properties')
  } catch (err) {
    return {
      valid: false,
      justification: `Failed to parse Claude response – ${(err as Error).message}`,
    }
  }
}
