import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await request.json(); // Just validate the request is JSON
    // TODO: Add your email service integration here
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
