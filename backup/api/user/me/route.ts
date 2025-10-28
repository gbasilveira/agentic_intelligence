import User from '../User'
import { NextResponse, NextRequest } from 'next/server'
import { withAuth } from '@api/lib/withAuth'

export async function GET(req: NextRequest) {
  return withAuth(async (req: NextRequest, user: User) => {
    return NextResponse.json(user)
  })(req)
}
 
// POST update user profile
export async function POST (req: Request) {
  try {

    const u = await req.json() as Partial<User>;

    const nu= new User(u)
    const issues = await nu.validateUserThroughLLM()

    return NextResponse.json({
      issues
  })
    
  } catch (error) {
    console.error('Error in POST /api/user:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

} 