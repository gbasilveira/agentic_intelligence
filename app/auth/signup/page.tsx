import type { Metadata } from "next"
import SignUpForm from "./signup-form"

export const metadata: Metadata = {
  title: "Sign Up - Agentic Intelligence Lisbon",
  description: "Join the Agentic Intelligence community in Lisbon",
}

export default function SignUpPage() {
  return <SignUpForm />
}
