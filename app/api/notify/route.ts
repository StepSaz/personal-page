import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, courseName } = await req.json();

    if (!email || !courseName) {
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

    // TODO: Implement email notification service
    // This could be SendGrid, Mailgun, AWS SES, etc.
    // For now, just log the notification request
    console.log(`Notification requested for ${courseName} by ${email}`);

    // In production, you would:
    // 1. Save the email to a database
    // 2. Add to a mailing list
    // 3. Send a confirmation email

    return NextResponse.json({
      success: true,
      message: "You'll be notified when this course is available!"
    });
  } catch (error) {
    console.error("Notification error:", error);
    return NextResponse.json(
      { error: "Failed to register notification" },
      { status: 500 }
    );
  }
}
