import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isPublicRoute = [
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/api(.*)",
  "/pricing(.*)",
];

export async function middleware(request: NextRequest) {
    const token = request.cookies
    if(!token) return NextResponse.redirect(new URL("/", request.url));

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
