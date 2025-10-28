// Direct script to check LLM responses without Jest mocking
// Run with: NODE_OPTIONS=--experimental-specifier-resolution=node node --experimental-modules check-llm-response.js

// Using require instead of import to avoid TypeScript/ESM issues
const path = require('path');
require('dotenv').config();

// Function to simulate the problematic user data from the test
async function checkLLMResponse() {
  try {
    // Using absolute path to the anthropic library
    const anthropicPath = path.join(__dirname, 'lib', 'anthropic.ts');
    console.log(`Attempting to load anthropic from: ${anthropicPath}`);
    
    // Check if ANTHROPIC_API_KEY is set
    console.log('ANTHROPIC_API_KEY defined:', !!process.env.ANTHROPIC_API_KEY);
    
    // Create test data similar to what's in the test
    const userData = {
      bio: 'Hello! My name is Alice and I like to eat pizza. I live in 5th Avenue, New York City.',
      tags: ['tech', 'sex', 'porn'],
      social_links: {},
      custom_links: {}
    };
    
    console.log('User data being validated:', userData);
    
    // Create prompt similar to what's in the test
    const prompt = `Validate the following user data:\n${JSON.stringify(userData)}`;
    
    console.log('\nTo manually check LLM responses for testing, copy this prompt and run it through the Anthropic Claude console:');
    console.log('\n--- SYSTEM PROMPT ---');
    console.log(`
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
`);
    console.log('------------------------\n');
    
    console.log('--- USER PROMPT ---');
    console.log(prompt);
    console.log('------------------------\n');
    
    console.log(`
Since we can't run the LLM directly in this environment due to module resolution issues,
please copy these prompts into the Anthropic Claude Console (or similar API interface)
to see the actual responses.

Expected responses based on test mocks:
1. '[]' - Empty array (everything is valid)
2. '[{"field":"bio","cause":"contains PII"},{"field":"tags","cause":"offensive term"}]' - Two validation errors
3. 'NOT‑JSON' - Malformed JSON to test error handling
`);
    
  } catch (error) {
    console.error('Error running check:', error);
  }
}

// Run the check
checkLLMResponse(); 