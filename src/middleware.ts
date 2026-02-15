import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Better Authのセッションクッキーを確認
  const sessionCookie = request.cookies.get("better-auth.session_token");

  if (!sessionCookie) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  // /dashboard 以下のルートを保護
  matcher: ["/dashboard/:path*"],
};
