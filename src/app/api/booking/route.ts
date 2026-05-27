import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type BookingRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  businessType?: string;
  location?: string;
  challenge?: string;
};

const COMPANY_EMAIL = "peacimon@gmail.com";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getSafeValue(
  value: string | undefined,
  fallback = "Not provided",
): string {
  if (!value || value.trim().length === 0) {
    return fallback;
  }

  return escapeHtml(value.trim());
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as BookingRequestBody;

    const name = getSafeValue(body.name);
    const phone = getSafeValue(body.phone);
    const email = getSafeValue(body.email);
    const businessType = getSafeValue(body.businessType);
    const location = getSafeValue(body.location);
    const challenge = getSafeValue(body.challenge);

    if (!body.name || !body.email || !body.phone || !body.businessType) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!process.env.ZOHO_USER || !process.env.ZOHO_PASS) {
      return NextResponse.json(
        { message: "Email server is not configured" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    const clientMailOptions = {
      from: `"GlobeLinkz" <${process.env.ZOHO_USER}>`,
      to: body.email,
      subject: "Your Free Strategy Session Request",
      html: `
        <p>Dear ${name},</p>

        <p>
          Thank you for booking a free strategy session with us! We truly appreciate you choosing
          <a target="_blank" rel="noopener noreferrer" href="https://www.globelinkz.com">
            <strong>GLOBELINKZ FULL SERVICE DIGITAL AGENCY</strong>
          </a>
          for your business growth and digital marketing needs.
        </p>

        <p>We're excited to connect with you. Here are the details you submitted:</p>

        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>WhatsApp / Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Business Type:</strong> ${businessType}</li>
          <li><strong>Location:</strong> ${location}</li>
          <li><strong>Current Challenge:</strong> ${challenge}</li>
        </ul>

        <p>
          You can expect our team to review your details and reach out to you shortly to arrange the best time for your free strategy session.
        </p>

        <p>
          Our team is confident that you'll have a valuable and insightful experience as we look at your business goals,
          current marketing challenges, and the best strategy to help you attract the right customers and increase revenue.
        </p>

        <p>
          As a special thank you for booking with us, we'll be sharing practical recommendations during our conversation
          that we think you'll find particularly beneficial. Be sure to come prepared to learn more!
        </p>

        <p>
          In the meantime, if you have any questions, please don't hesitate to reply to this email or call us at
          <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=2347036825350">
            +2347036825350
          </a>.
        </p>

        <p>We look forward to speaking with you soon!</p>

        <p>Sincerely,</p>
        <p>Elijah</p>
        <p>
          CEO @
          <a target="_blank" rel="noopener noreferrer" href="https://www.globelinkz.com">
            GlobeLinkz
          </a>
        </p>
      `,
    };

    const companyMailOptions = {
      from: `"Booking System" <${process.env.ZOHO_USER}>`,
      to: COMPANY_EMAIL,
      subject: `${name} Booked a Free Strategy Session on the Website`,
      html: `
        <p>Dear GlobeLinkz Team,</p>

        <p>A new free strategy session request has been submitted on your website. Here are the client details:</p>

        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Client Email:</strong> ${email}</li>
          <li><strong>WhatsApp / Phone:</strong> ${phone}</li>
          <li><strong>Business Type:</strong> ${businessType}</li>
          <li><strong>Location:</strong> ${location}</li>
          <li><strong>Current Challenge:</strong> ${challenge}</li>
        </ul>

        <p>
          Please review the booking request and reach out to ${name} as soon as possible to arrange the free strategy session.
        </p>

        <p>Please prepare accordingly based on the business type and challenge submitted above.</p>

        <p>Thank you,</p>
        <p>The Software Engineering Team</p>
      `,
    };

    const clientMailPromise = transporter.sendMail(clientMailOptions);
    const companyMailPromise = transporter.sendMail(companyMailOptions);
    // console.log("Sending emails...");

    await Promise.all([clientMailPromise, companyMailPromise]);

    return NextResponse.json(
      { message: "Booking submitted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing booking request:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown server error";

    return NextResponse.json(
      { message: `Internal server error: ${errorMessage}` },
      { status: 500 },
    );
  }
}
