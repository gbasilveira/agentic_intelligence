import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// POST request to initiate password reset
export async function POST(req: NextRequest) {
  try {
    const { email, redirectTo } = await req.json()
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }
    
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectTo || `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`,
    })
    
    if (error) {
      console.error('Error initiating password reset:', error)
      return NextResponse.json({ error: 'Failed to initiate password reset' }, { status: 500 })
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Password reset email sent. Please check your inbox.' 
    })
  } catch (error) {
    console.error('Error in POST /api/user/password-reset:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT request to update password
export async function PUT(req: NextRequest) {
  try {
    const { password } = await req.json()
    
    if (!password) {
      return NextResponse.json({ error: 'Password is required' }, { status: 400 })
    }
    
    // Get auth token from header
    const authHeader = req.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const token = authHeader.substring(7)
    
    // Update password
    const { error } = await supabase.auth.updateUser({ password })
    
    if (error) {
      console.error('Error updating password:', error)
      return NextResponse.json({ error: 'Failed to update password' }, { status: 500 })
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Password has been updated successfully' 
    })
  } catch (error) {
    console.error('Error in PUT /api/user/password-reset:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 