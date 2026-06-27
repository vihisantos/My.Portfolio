import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const sponsorshipSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  interest: z.enum(['visionary', 'guardian', 'community']),
  message: z.string().max(2000).optional(),
});

export type SponsorshipFormData = z.infer<typeof sponsorshipSchema>;
