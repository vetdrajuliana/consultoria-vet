import { NextResponse } from "next/server";
import {
  createSessionToken,
  getSessionCookieName,
  getSessionDurationSeconds,
} from "../../../../lib/app-auth";

export async function POST(request) {
  const { email = "", password = "" } = await request.json();
  const expectedEmail = process.env.PECUARIA_LOGIN_EMAIL || "";
  const expectedPassword = process.env.PECUARIA_LOGIN_PASSWORD || "";

  if (!expectedEmail || !expectedPassword) {
    return NextResponse.json(
      { message: "Login nao configurado." },
      { status: 500 },
    );
  }

  const emailMatches =
    String(email).trim().toLowerCase() === expectedEmail.trim().toLowerCase();
  const passwordMatches = String(password) === expectedPassword;

  if (!emailMatches || !passwordMatches) {
    return NextResponse.json(
      { message: "E-mail ou senha incorretos." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  const token = await createSessionToken(expectedEmail);

  response.cookies.set({
    name: getSessionCookieName(),
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: getSessionDurationSeconds(),
  });

  return response;
}
