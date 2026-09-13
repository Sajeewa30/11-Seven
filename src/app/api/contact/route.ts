import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * TODO before launch: forward the payload somewhere useful — an email (Resend / SMTP),
 * a WhatsApp Business template, or an n8n webhook. Right now it validates and logs.
 */
interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  topic?: string;
  message?: string;
  /** Honeypot — real visitors never see or fill this field. */
  company?: string;
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Silently accept bot submissions so they don't retry.
  if (body.company) return NextResponse.json({ ok: true });

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (name.length < 2 || message.length < 10 || (!phone && !email)) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
  }

  console.info("[contact]", {
    name,
    phone,
    email,
    topic: body.topic ?? "general",
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
