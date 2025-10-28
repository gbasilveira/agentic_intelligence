import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// POST request to update email address
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    
    if (!email) {
      return NextResponse.json({ error: 'New email address is required' }, { status: 400 })
    }
    
    // Get auth token from header
    const authHeader = req.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const token = authHeader.substring(7)
    
    // Update email
    const { data, error } = await supabase.auth.updateUser(
      { email }, 
      { emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/profile` }
    )
    
    if (error) {
      console.error('Error updating email:', error)
      return NextResponse.json({ error: 'Failed to update email' }, { status: 500 })
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email verification has been sent to your new email address. Please verify to complete the update.' 
    })
  } catch (error) {
    console.error('Error in POST /api/user/email-update:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 