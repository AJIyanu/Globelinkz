import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Define the POST handler
export async function POST(req: Request) {
  try {
    const { name, email, date } = await req.json()

    if (!name || !email) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Configure Nodemailer transporter for Zoho Mail
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465, // Use 587 if TLS is required instead of SSL
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.ZOHO_USER!,
        pass: process.env.ZOHO_PASS!,
      },
    })

    // Email options
    const mailOptions = {
      from: `"Booking System" <${process.env.ZOHO_USER}>`,
      to: email, // Change this if you want to send to another recipient
      subject: 'New Booking Submission',
      html: `
                <h2>New Booking Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Message:</strong> 'No message provided'</p>
            `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Booking submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
