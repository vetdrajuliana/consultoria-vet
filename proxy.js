import { NextResponse } from "next/server";
import { getSessionCookieName, verifySessionToken } from "./lib/app-auth";

export async function proxy(request) {
  const token = request.cookies.get(getSessionCookieName())?.value;
  const isAuthenticated = await verifySessionToken(token);

  if (isAuthenticated) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/app", request.url);
  loginUrl.searchParams.set("next", request.nextUrl.pathname);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/app/painel/:path*",
    "/app/animais/:path*",
    "/app/fazendas/:path*",
    "/app/fornecedores/:path*",
    "/app/insumos/:path*",
    "/app/manejos/:path*",
    "/app/nutricao/:path*",
    "/app/pessoas/:path*",
    "/app/usuarios/:path*",
  ],
};
