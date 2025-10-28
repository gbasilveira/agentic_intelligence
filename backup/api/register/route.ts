import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json()

    // Validate request data
    if (!email || !password || !name) {
      return NextResponse.json(
        { message: "Email, password, and name are required" }, 
        { status: 400 }
      )
    }

    // Create Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Register the user in Supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    })

    // Handle errors
    if (error) {
      console.error("Registration error:", error)
      return NextResponse.json(
        { message: error.message || "Registration failed" }, 
        { status: 500 }
      )
    }

    // Return success response
    return NextResponse.json(
      { user: data.user, message: "Registration successful" }, 
      { status: 201 }
    )
  } catch (error) {
    console.error("Unexpected error during registration:", error)
    return NextResponse.json(
      { message: "An unexpected error occurred" }, 
      { status: 500 }
    )
  }
} 