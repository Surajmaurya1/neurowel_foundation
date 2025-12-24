import { z } from "zod";

export const volunteerSchema = z.object({
  // FIRST NAME
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .regex(/^[A-Za-z]+$/, "First name can contain only letters"),

  // LAST NAME
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .regex(/^[A-Za-z]+$/, "Last name can contain only letters"),

  // EMAIL
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),

  // MOBILE NUMBER
  phone: z
    .string()
    .regex(/^\d{10}$/, "Mobile number must be exactly 10 digits"),

  // ALTERNATE MOBILE
  alternatePhone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\d{10}$/.test(val),
      "Alternate mobile must be 10 digits"
    ),

  // LOCATION
  location: z
    .string()
    .min(2, "Location must be at least 2 characters"),

  // PRIOR EXPERIENCE 
  priorExperience: z.enum(["yes", "no"], {
    errorMap: () => ({
      message: "Please select Yes or No",
    }),
  }),

  // MESSAGE
  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});
