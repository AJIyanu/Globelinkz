'use server';

import { bookSessionSchema, type BookSessionInput } from '@/lib/schemas';

/**
 * Server action to handle book session form submission
 * Validates input with Zod and sends email (dummy implementation)
 */
export async function submitBookSession(
  formData: BookSessionInput
): Promise<{ success: boolean; message: string; error?: string }> {
  // Validate input
  const validation = bookSessionSchema.safeParse(formData);

  if (!validation.success) {
    return {
      success: false,
      message: 'Validation failed',
      error: validation.error.errors[0]?.message || 'Invalid form data',
    };
  }

  const data = validation.data;

  // TODO: Configure email service
  // Dummy email implementation - replace with your actual email service
  // Example providers: Resend, SendGrid, Mailgun, AWS SES, etc.
  console.log('📧 Booking Session Submission:', {
    name: data.name,
    phone: data.phone,
    email: data.email,
    businessType: data.businessType,
    location: data.location,
    challenge: data.challenge,
    timestamp: new Date().toISOString(),
  });

  /**
   * Replace the console.log with your actual email implementation:
   *
   * Example with Resend:
   * ---
   * import { Resend } from 'resend';
   * const resend = new Resend(process.env.RESEND_API_KEY);
   *
   * try {
   *   await resend.emails.send({
   *     from: 'noreply@globelinkz.com',
   *     to: process.env.ADMIN_EMAIL || 'admin@globelinkz.com',
   *     subject: `New Booking: ${data.name}`,
   *     html: `
   *       <h2>New Strategy Session Booking</h2>
   *       <p><strong>Name:</strong> ${data.name}</p>
   *       <p><strong>Email:</strong> ${data.email}</p>
   *       <p><strong>Phone:</strong> ${data.phone}</p>
   *       <p><strong>Business Type:</strong> ${data.businessType}</p>
   *       <p><strong>Location:</strong> ${data.location || 'Not provided'}</p>
   *       <p><strong>Challenge:</strong> ${data.challenge || 'Not provided'}</p>
   *     `,
   *   });
   * } catch (error) {
   *   console.error('Email sending error:', error);
   *   return {
   *     success: false,
   *     message: 'Failed to submit booking',
   *     error: 'Please try again later',
   *   };
   * }
   */

  return {
    success: true,
    message: 'Booking submitted successfully!',
  };
}

/**
 * Server action for contact form submission
 */
export async function submitContactForm(formData: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; message: string; error?: string }> {
  console.log('📧 Contact Form Submission:', {
    ...formData,
    timestamp: new Date().toISOString(),
  });

  // TODO: Configure email service for contact form
  // Same pattern as above

  return {
    success: true,
    message: 'Message sent successfully!',
  };
}
