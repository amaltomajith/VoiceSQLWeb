import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";

interface LoginProps {
  searchParams: Promise<Message>;
}

export default async function SignInPage({ searchParams }: LoginProps) {
  const message = await searchParams;

  if ("message" in message) {
    return (
      <div className="flex h-screen w-full flex-1 items-center justify-center p-4 sm:max-w-md">
        <FormMessage message={message} />
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <form className="flex flex-col">
          <h1 className="auth-title">Welcome Back</h1>
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="auth-input"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="auth-input"
          />

          <div className="flex justify-end mb-4">
            <Link href="/forgot-password" className="auth-link">
              Forgot Password?
            </Link>
          </div>

          <SubmitButton
            formAction={signInAction}
            pendingText="Signing in..."
            className="auth-button"
          >
            Sign in
          </SubmitButton>

          <div className="auth-separator">
            <span>Don't have an account?</span>
          </div>

          <Link href="/sign-up" className="auth-link text-center">
            Create an account
          </Link>

          <FormMessage message={message} />
        </form>
      </div>
    </div>
  );
}
