import {email, z} from 'zod';
export const donationSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    amount : z.number().min(1, "Amount must be at least 1"),});