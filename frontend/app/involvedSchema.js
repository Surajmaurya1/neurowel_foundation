import { z } from "zod";

export const volunteerSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters"),

  email: z
    .string()
    .email("Enter a valid email")
    .regex(/^(?=.*[a-zA-Z]).+$/, "Email must contain letters"),

  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be 10 digits"),

  aadhaarNumber: z
    .string()
    .regex(/^\d{12}$/, "Aadhaar must be exactly 12 digits"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});
