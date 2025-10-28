import type { Metadata } from "next"
import LoginForm from "./login-form"

export const metadata: Metadata = {
  title: "Login - Agentic Intelligence Lisbon",
  description: "Log in to your Agentic Intelligence community account",
}

export default function LoginPage() {
  return <LoginForm />
}
