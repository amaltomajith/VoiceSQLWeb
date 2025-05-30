import * as React from "react";

export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="mt-4 w-full">
      {"success" in message && (
        <div className="flex items-center gap-2 rounded-md bg-green-500/10 px-4 py-2 text-sm text-green-500">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2 text-sm text-primary">
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="flex items-center gap-2 rounded-md bg-surface/50 px-4 py-2 text-sm text-text">
          {message.message}
        </div>
      )}
    </div>
  );
}
