"use server";

import * as z from "zod";
import { ContactFormSchema } from "@/lib/types";

type ContactFormResponse = {
    success: boolean;
    message: string;
}

export async function sendContactMessage(
  values: z.infer<typeof ContactFormSchema>
): Promise<ContactFormResponse> {
  const validatedFields = ContactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your inputs.",
    };
  }
  
  const { name, email, message } = validatedFields.data;

  // In a real application, you would integrate with an email service
  // like Resend, SendGrid, or Nodemailer here.
  console.log("----- New Contact Form Submission -----");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log("---------------------------------------");

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Always return success for this example
  return {
    success: true,
    message: "Your message has been sent successfully!",
  };
}
