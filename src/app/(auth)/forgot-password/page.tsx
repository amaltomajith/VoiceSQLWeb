import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import Link from "next/link";
import { forgotPasswordAction } from "@/app/actions";
import { UrlProvider } from "@/components/url-provider";

export default async function ForgotPassword(props: {
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
          <UrlProvider>
            <form className="flex flex-col">
              <h1 className="auth-title">Reset Password</h1>

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="auth-input"
              />

              <SubmitButton
                formAction={forgotPasswordAction}
                pendingText="Sending reset link..."
                className="auth-button"
              >
                Reset Password
              </SubmitButton>

              <div className="auth-separator">
                <span>Remember your password?</span>
              </div>

              <Link href="/sign-in" className="auth-link text-center">
                Back to Sign in
              </Link>

              <FormMessage message={searchParams} />
            </form>
          </UrlProvider>
        </div>
      </div>
    </>
  );
}
