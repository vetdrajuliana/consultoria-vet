import { NextResponse } from "next/server";
import { getSessionCookieName } from "../../../../lib/app-auth";

export async function POST(request) {
  const response = NextResponse.redirect(new URL("/app", request.url), 303);

  response.cookies.set({
    name: getSessionCookieName(),
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 0,
  });

  return response;
}
