import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, type } = await req.json();

    if (!email || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Log the signup
    console.log(`Email signup - Type: ${type}, Email: ${email}`);

    // TODO: Implement email service (Resend/SendGrid)
    // Based on type:
    // - "free-pdf": Send PDF download link
    // - "early-access": Add to early access list

    // For now, simulate success
    const message = type === "free-pdf"
      ? "Check your email for the PDF download link!"
      : "You're on the list! We'll notify you when it's ready.";

    return NextResponse.json({
      success: true,
      message,
    });
  } catch (error) {
    console.error("Notification error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
