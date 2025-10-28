# Guide to Manually Test LLM Responses for User Validation

This guide will help you test the actual responses from Claude for the user validation tests. The tests use three different expected responses, and you can manually verify these by using the Claude web interface or API directly.

## Test Case Setup

The test is validating user data with the following profile:

```json
{
  "bio": "Hello! My name is Alice and I like to eat pizza. I live in 5th Avenue, New York City.",
  "tags": ["tech", "sex", "porn"],
  "social_links": {},
  "custom_links": {}
}
```

## System Prompt

Use this exact system prompt:

```
You are a data‑quality assistant.
For each field you receive, analyze if it contains:
- Offensive content
- PII (Personally Identifiable Information)
- Security risks
- Other harmful content

After all analysis, reply once with **EXACT** JSON:
[
  { "field": "<field_name>", "cause": "<why invalid>" },
  ...
]
Return an empty array if everything is valid.
```

## User Prompt

Use this exact user prompt:

```
Validate the following user data:
{"bio":"Hello! My name is Alice and I like to eat pizza. I live in 5th Avenue, New York City.","tags":["tech","sex","porn"],"social_links":{},"custom_links":{}}
```

## Expected Responses in Tests

The tests are using three mock responses:

1. `'[]'` - An empty array indicating no validation issues were found
2. `'[{"field":"bio","cause":"contains PII"},{"field":"tags","cause":"offensive term"}]'` - A response indicating validation issues with bio (contains personally identifiable information) and tags (containing offensive terms)
3. `'NOT‑JSON'` - A malformed JSON response to test error handling

## How to Test

### Method 1: Use Claude Web Interface

1. Go to https://claude.ai/
2. Create a new conversation 
3. Click on "Customize" and set the temperature to 0
4. Click "Set custom instructions" and paste the system prompt
5. Paste the user prompt in the message box and send it
6. Compare Claude's response with the expected responses

### Method 2: Use Claude API Directly (requires API key)

If you have an Anthropic API key, you can use a tool like Postman or curl to make a direct request:

```bash
curl -X POST https://api.anthropic.com/v1/messages \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY_HERE" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "claude-3-5-sonnet-20240620",
    "system": "You are a data‑quality assistant.\nFor each field you receive, analyze if it contains:\n- Offensive content\n- PII (Personally Identifiable Information)\n- Security risks\n- Other harmful content\n\nAfter all analysis, reply once with **EXACT** JSON:\n[\n  { \"field\": \"<field_name>\", \"cause\": \"<why invalid>\" },\n  ...\n]\nReturn an empty array if everything is valid.",
    "messages": [
      {
        "role": "user", 
        "content": "Validate the following user data:\n{\"bio\":\"Hello! My name is Alice and I like to eat pizza. I live in 5th Avenue, New York City.\",\"tags\":[\"tech\",\"sex\",\"porn\"],\"social_links\":{},\"custom_links\":{}}"
      }
    ],
    "temperature": 0
  }'
```

## Evaluating Results

After receiving Claude's actual response, compare it with the mock responses used in the tests:

1. Does Claude return an empty array `[]`?
2. Does Claude flag both the bio (for PII) and tags (for offensive content)?
3. Does Claude return properly formatted JSON?

These observations will help you understand how the actual LLM would behave in production compared to the mocked responses in your tests. 