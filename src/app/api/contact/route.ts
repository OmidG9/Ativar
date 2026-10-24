import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const required = ["fullName", "email", "message", "privacy"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
    }

    if (!body.privacy) {
      return NextResponse.json({ error: "Privacy consent required" }, { status: 400 });
    }

    // In production, connect to email/CRM. For now, log and return success.
    console.log("[CONTACT]", {
      ...body,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
