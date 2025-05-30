import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import { signUpAction } from "@/app/actions";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="flex h-screen w-full flex-1 items-center justify-center p-4 sm:max-w-md">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <div className="auth-container">
        <div className="auth-box">
          <form className="flex flex-col">
            <h1 className="auth-title">Create Account</h1>

            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              required
              className="auth-input"
            />

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
              minLength={6}
              required
              className="auth-input"
            />

            <SubmitButton
              formAction={signUpAction}
              pendingText="Creating your account..."
              className="auth-button"
            >
              Sign up
            </SubmitButton>

            <div className="auth-separator">
              <span>Already have an account?</span>
            </div>

            <Link href="/sign-in" className="auth-link text-center">
              Sign in
            </Link>

            <FormMessage message={searchParams} />
          </form>
        </div>
      </div>
      <SmtpMessage />
    </>
  );
}
