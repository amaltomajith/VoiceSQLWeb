import { ArrowUpRight, InfoIcon } from "lucide-react";
import Link from "next/link";

export function SmtpMessage() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-surface/90 backdrop-blur-sm px-5 py-3 border border-border/50 rounded-md flex gap-4 shadow-lg">
      <InfoIcon size={16} className="mt-0.5 text-primary" />
      <div className="flex flex-col gap-1">
        <small className="text-sm text-text">
          <strong>Note:</strong> Emails are rate limited. Enable Custom SMTP to
          increase the rate limit.
        </small>
        <div>
          <Link
            href="https://supabase.com/docs/guides/auth/auth-smtp"
            target="_blank"
            className="text-primary hover:text-primary/80 flex items-center text-sm gap-1 transition-colors"
          >
            Learn more <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
