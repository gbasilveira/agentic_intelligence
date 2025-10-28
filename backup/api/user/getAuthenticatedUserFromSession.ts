import { supabase } from "@/lib/supabase"
import { NextRequest } from "next/server"

type UserResponse = {
    error?: string
    status?: number
    user?: any
}   

export default async function getAuthenticatedUserFromSession(req: Request): Promise<UserResponse> {
    // Using headers to get the session in an API route
    const authHeader = req.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { error: 'Unauthorized', status: 401 }
    }
    
    const token = authHeader.substring(7)
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)

    if (authError){
        return authError
    }

    return { user }
}