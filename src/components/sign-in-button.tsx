"use client";

import { useSession, signIn, signOut } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export function SignInButton() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <Button variant="ghost" size="sm" disabled>
        読み込み中...
      </Button>
    );
  }

  if (session) {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() =>
          signOut({
            fetchOptions: {
              onSuccess: () => {
                window.location.href = "/";
              },
            },
          })
        }
      >
        ログアウト
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => signIn.social({ provider: "google" })}
    >
      ログイン
    </Button>
  );
}
