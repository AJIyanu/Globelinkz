import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { format, parseISO } from 'date-fns'

// Define the POST handler
export async function POST(req: Request) {
  try {
    const { name, email, date, platform, time, timezone } = await req.json()

    if (!name || !email) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // console.log(platform, time, timezone)
    // Configure Nodemailer transporter for Zoho Mail
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER!,
        pass: process.env.ZOHO_PASS!,
      },
    })

    // Email options
    const mailOptions = {
      from: `"Globelinkz" <${process.env.ZOHO_USER}>`,
      to: email, // Change this if you want to send to another recipient
      subject: 'Your Booking Details',
      html: `
               <p data-sourcepos="3:1-3:17">Dear ${name},</p>
                <p data-sourcepos="5:1-5:123">Thank you for booking a meeting with us! We truly appreciate you choosing <a target="_blank" rel="noopener noreferrer" href="https://www.globelinkz.com"><strong>GLOBELINKZ FULL DIGITAL AGENCY</strong></a> for your data analysis needs.</p>
                <p data-sourcepos="7:1-7:65">We're excited to connect with you. Here are your ${platform} meeting details:</p>
                <ul data-sourcepos="9:1-12:0">
                    <li data-sourcepos="9:1-9:18"><strong>Date:</strong> ${format(parseISO(date), 'EEE, do MMMM, yyyy')}</li>
                    <li data-sourcepos="10:1-10:30"><strong>Time:</strong> ${time} ${timezone}</li>
                    <li data-sourcepos="10:1-10:30"><strong>Platform:</strong> ${platform}</li>
                </ul>
                <p data-sourcepos="13:1-13:99">You can expect to receive your meeting link via email 30 minutes before the scheduled meeting time.</p>
                <p data-sourcepos="15:1-15:297">Our team is confident that you'll have a valuable and insightful experience as we delve into your data analysis goals. We've been preparing to make sure this meeting is as productive as possible, and we're looking forward to showing you how we can help you turn your data into actionable insights.</p>
                <p data-sourcepos="17:1-17:189">As a special thank you for booking with us, we'll be sharing an exclusive offer during our meeting that we think you'll find particularly beneficial. Be sure to come prepared to learn more!</p>
                <p data-sourcepos="19:1-19:145">In the meantime, if you have any questions or need to reschedule, please don't hesitate to reply to this email or call us at <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=2347036825350">+2347036825350</a></p>
                <p data-sourcepos="21:1-21:35">We look forward to seeing you soon!</p>
                <p data-sourcepos="23:1-23:10">Sincerely,</p>
                <p data-sourcepos="25:1-26:14">Elijah</p>
                <p data-sourcepos="25:1-26:14">CEO @ <a target="_blank" rel="noopener noreferrer" href="https://globelinkz">Globelinkz</a></p>
            `,
    }

    const companymailOptions = {
      from: `"Booking System" <${process.env.ZOHO_USER}>`,
      to: 'peacimon@gmail.com',
      subject: `${name} Booked a Meeting on the Website`,
      html: `
               <p data-sourcepos="3:1-3:21">Dear GlobeLinkz Team,</p>
                <p data-sourcepos="5:1-5:74">A new booking has been made on your website. Here are the meeting details:</p>
                <ul data-sourcepos="7:1-13:0">
                    <li data-sourcepos="7:1-7:28"><strong>Name:</strong> ${name}</li>
                    <li data-sourcepos="7:1-7:28"><strong>Client Email:</strong> ${email}</li>
                    <li data-sourcepos="9:1-9:18"><strong>Date:</strong> ${format(parseISO(date), 'EEE, do MMMM, yyyy')}</li>
                    <li data-sourcepos="10:1-10:18"><strong>Time:</strong> ${time}</li>
                    <li data-sourcepos="11:1-11:38"><strong>User Time Zone:</strong> ${timezone}</li>
                    <li data-sourcepos="12:1-13:0"><strong>Platform:</strong> ${platform}</li>
                </ul>
                <p data-sourcepos="14:1-14:118">Please ensure that the meeting link is generated and sent to ${name} 30 minutes before the scheduled meeting time.</p>
                <p data-sourcepos="16:1-16:50">Please review the booking and prepare accordingly.</p>
                <p data-sourcepos="18:1-18:10">Thank you,</p>
                <p data-sourcepos="20:1-20:40">The Software Engineering Team</p>
            `,
    }

    // Send email
    try {
      const mailPromise = transporter.sendMail(mailOptions)
      const companyMailPromise = transporter.sendMail(companymailOptions)

      await Promise.all([mailPromise, companyMailPromise])
    } catch (error) {
      console.error('Error sending emails:', error)
    }

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
