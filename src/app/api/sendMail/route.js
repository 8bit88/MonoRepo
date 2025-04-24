import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { to, subject, text } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "127.0.0.1",
      port: 1025, 
      secure: false,
    });

    await transporter.sendMail({
      from: '"School App" <no-reply@school.local>',
      to,
      subject,
      text,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Mail sending error:", error);
    return new Response(JSON.stringify({ error: "Mail send failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
