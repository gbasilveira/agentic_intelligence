import { getResponse, type ToolDefinition } from "@/lib/anthropic"


export default class User {
    id: string
    email: string
    first_name: string
    last_name: string
    bio: string
    profile_image: string
    tags: string[]
    social_links: Record<string, string>
    custom_links: Record<string, string>
    created_at: string
    updated_at: string

    constructor(user: Partial<User>) {
        this.id = user.id ?? ''
        this.email = user.email ?? ''
        this.first_name = user.first_name ?? ''
        this.last_name = user.last_name ?? ''
        this.bio = user.bio ?? ''
        this.profile_image = user.profile_image ?? ''
        this.tags = user.tags ?? []
        this.social_links = user.social_links ?? {}
        this.custom_links = user.custom_links ?? {}
        this.created_at = user.created_at ?? ''
        this.updated_at = user.updated_at ?? ''
    }

    public validateEmail(): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    }

    public async validateUserThroughLLM(): Promise<{ valid: boolean, issues: {field: string, reason: string, evidence: string | string[]}[] }[]> {


        const SYSTEM_PROMPT = `You are a content moderation assistant tasked with identifying potentially problematic content in user profiles.
        
            Analyze the provided text for:
            1. Personally Identifiable Information (PII) like addresses, phone numbers, email addresses
            2. Offensive, inappropriate, or harmful content
            3. Potential links to malicious websites
            4. Potential impersonation of another person
            5. Anything else that shouldn't be in a public profile

            If you find any issues, respond with a JSON object in this format:
            { "valid": false, "issues": [{"field": string, "reason": string, "evidence":string | array] }

            If you don't find any issues, respond with:
            { "valid": true, "issues": [] } `

        const data = {
            bio: this.bio,
            tags: this.tags,
            social_links: this.social_links,
            custom_links: this.custom_links
        }

        const prompt = `${JSON.stringify(data)}`

        const raw = await getResponse(
            prompt,[],
            { systemPrompt: SYSTEM_PROMPT, temperature: 0 }
        )

        try {
            return JSON.parse(raw)
        } catch (e) {
            return [{ valid: false, issues: [] }]
        }


    }
}