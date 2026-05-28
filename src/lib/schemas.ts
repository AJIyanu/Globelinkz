import { z } from 'zod';

export const bookSessionSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  businessType: z.string().min(1, 'Please select a business type'),
  location: z.string().optional(),
  challenge: z.string().optional(),
});

export type BookSessionInput = z.infer<typeof bookSessionSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
