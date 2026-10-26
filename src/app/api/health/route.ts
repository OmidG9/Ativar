import { NextResponse } from "next/server";

// Used by the Docker healthcheck and the deploy job in CI.
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(
    { status: "ok" },
    { headers: { "Cache-Control": "no-store" } },
  );
}
