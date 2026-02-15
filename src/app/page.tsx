import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">zero-to-dream</h1>
        <p className="text-muted-foreground text-lg max-w-md">
          AIを活用した人生設計・夢実現支援アプリ
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/login">ログイン</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/dashboard">ダッシュボード</Link>
        </Button>
      </div>
    </main>
  );
}
