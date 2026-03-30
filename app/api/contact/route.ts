import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    // TODO: Connect an email provider here (e.g. nodemailer, Resend, SendGrid)
    // to forward form submissions to your business email.
    //
    // Example with Resend:
    //   import { Resend } from 'resend';
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({ from: '...', to: '...', subject: '...', text: ... });
    //
    // For now, submissions are logged to the server console.

    console.log("New contact form submission:", {
      name,
      phone,
      email,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
