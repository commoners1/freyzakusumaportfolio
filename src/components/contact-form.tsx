"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ContactFormSchema } from "@/lib/types";
import { sendContactMessage } from "@/lib/actions";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    try {
      const result = await sendContactMessage(values);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(result.message || "An unknown error occurred.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          error instanceof Error
            ? error.message
            : "There was a problem with your request.",
      });
    }
  }

  return (
    <Card className="transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-card/50 border-border/50 hover:bg-card/70 group-hover:border-primary/50" style={{ transformStyle: 'preserve-3d' }}>
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input placeholder=" " {...field} className="peer" />
                  </FormControl>
                  <FormLabel className="absolute text-base text-muted-foreground duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] left-3 peer-focus:left-3 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 bg-card peer-placeholder-shown:bg-transparent px-1">Name</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input placeholder=" " {...field} className="peer" />
                  </FormControl>
                   <FormLabel className="absolute text-base text-muted-foreground duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] left-3 peer-focus:left-3 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 bg-card peer-placeholder-shown:bg-transparent px-1">Email</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Textarea
                      placeholder=" "
                      className="min-h-[120px] peer"
                      {...field}
                    />
                  </FormControl>
                  <FormLabel className="absolute text-base text-muted-foreground duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] left-3 peer-focus:left-3 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 bg-card peer-placeholder-shown:bg-transparent px-1">Message</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full text-lg py-6 rounded-full transition-transform duration-300 hover:scale-105" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
