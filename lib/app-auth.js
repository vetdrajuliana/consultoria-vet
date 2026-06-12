const sessionCookieName = "pecuaria_session";
const sessionDurationSeconds = 60 * 60 * 12;

function getSessionSecret() {
  return process.env.PECUARIA_SESSION_SECRET || "";
}

function toBase64Url(bytes) {
  const binary = String.fromCharCode(...bytes);
  return btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

function fromBase64Url(value) {
  const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
  return Uint8Array.from(atob(padded), (char) => char.charCodeAt(0));
}

async function sign(value) {
  const secret = getSessionSecret();

  if (!secret) {
    throw new Error("Missing PECUARIA_SESSION_SECRET");
  }

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(value),
  );

  return toBase64Url(new Uint8Array(signature));
}

export function getSessionCookieName() {
  return sessionCookieName;
}

export function getSessionDurationSeconds() {
  return sessionDurationSeconds;
}

export async function createSessionToken(email) {
  const payload = toBase64Url(
    new TextEncoder().encode(
      JSON.stringify({
        email,
        exp: Math.floor(Date.now() / 1000) + sessionDurationSeconds,
      }),
    ),
  );
  const signature = await sign(payload);

  return `${payload}.${signature}`;
}

export async function verifySessionToken(token) {
  if (!token || !token.includes(".")) {
    return false;
  }

  const [payload, signature] = token.split(".");

  if (!payload || !signature) {
    return false;
  }

  const expectedSignature = await sign(payload);

  if (signature !== expectedSignature) {
    return false;
  }

  try {
    const decodedPayload = new TextDecoder().decode(fromBase64Url(payload));
    const session = JSON.parse(decodedPayload);

    return Boolean(session.exp && session.exp > Math.floor(Date.now() / 1000));
  } catch {
    return false;
  }
}
