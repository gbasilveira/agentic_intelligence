// Direct Claude API test
// Make sure to set ANTHROPIC_API_KEY in your environment before running

const https = require('https');

// Configuration
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const API_URL = 'api.anthropic.com';
const API_PATH = '/v1/messages';
const MODEL = 'claude-3-5-sonnet-20240620';

// User data to validate - same as in the tests
const userData = {
  bio: 'Hello! My name is Alice and I like to eat pizza. I live in 5th Avenue, New York City.',
  tags: ['tech', 'sex', 'porn'],
  social_links: {},
  custom_links: {}
};

// System prompt
const SYSTEM_PROMPT = `
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
`;

async function callClaudeAPI() {
  // User prompt
  const prompt = `Validate the following user data:\n${JSON.stringify(userData)}`;

  // Request data
  const data = JSON.stringify({
    model: MODEL,
    system: SYSTEM_PROMPT,
    messages: [
      { role: 'user', content: prompt }
    ],
    max_tokens: 1024,
    temperature: 0
  });

  // Request options
  const options = {
    hostname: API_URL,
    path: API_PATH,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          console.log('Status Code:', res.statusCode);
          if (res.statusCode === 200) {
            const parsedData = JSON.parse(responseData);
            resolve(parsedData);
          } else {
            console.log('Error Response:', responseData);
            reject(new Error(`API call failed with status ${res.statusCode}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.write(data);
    req.end();
  });
}

// Main function
async function main() {
  try {
    console.log('Calling Claude API to validate user data...');
    console.log('User data:', userData);
    console.log('System prompt:', SYSTEM_PROMPT);
    
    const response = await callClaudeAPI();
    
    console.log('\n--- RAW CLAUDE API RESPONSE ---');
    console.log(JSON.stringify(response, null, 2));
    
    // Extract the content from the response
    if (response.content && response.content.length > 0) {
      const textContent = response.content[0].text;
      console.log('\n--- TEXT CONTENT ---');
      console.log(textContent);
      
      try {
        // Try to parse the JSON from the content
        const parsedJson = JSON.parse(textContent);
        console.log('\n--- PARSED JSON ---');
        console.log(JSON.stringify(parsedJson, null, 2));
      } catch (e) {
        console.log('\nFailed to parse response as JSON:', e.message);
      }
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main(); 