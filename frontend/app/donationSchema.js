import { z } from "zod";

export const donationSchema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z.string().email("Invalid email address"),

  amount: z
    .coerce
    .number({
      invalid_type_error: "Amount is required",
    })
    .min(1, "Amount must be at least 1"),
});
