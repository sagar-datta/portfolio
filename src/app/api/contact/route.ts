import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const _data = await request.json();

    // TODO: Add your email service integration here

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (_error) {
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
