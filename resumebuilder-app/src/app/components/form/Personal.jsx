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
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const personalSchema = z.object({
  name: z.string().min(1, "Name is required"), // Must be a string, at least 1 character
  email: z.string().email("Enter a valid email").min(1, "Email is required"), // Must be a valid email
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .max(16, "Phone too long"), // String for flexibility (e.g., "123-456-7890")
  linkedIn: z
    .string()
    .url()
    .refine((url) => url.startsWith("https://www.linkedin.com"), {
      message: "URL must be from linkedin.com",
    }),
  location: z
    .string()
    .min(5, "Enter your City followed by State")
    .max(100, "You do not live here"),
});

const Personal = ({ formData, setFormData, prevStep, nextStep }) => {
  const form = useForm({
    resolver: zodResolver(personalSchema),
    defaultValues: formData.personal,
  });

  const onSubmit = (data) => {
    setFormData((formData) => ({ ...formData, personal: { ...data } }));
    nextStep();
  };

  return (
    <div className="gap-1.5">
      <h2 className="wizard-title"> Personal Info</h2>
      <div className="flex flex-col items-center py-2 ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-500 text-white border placeholder:text-white"
                      placeholder="Your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-500 text-white border placeholder:text-white"
                      placeholder="you@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone no</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-500 text-white border placeholder:text-white"
                      placeholder="ex: +91-7411794089"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn link</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-500 text-white border placeholder:text-white"
                      placeholder="Your LinkedIn profile link"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-500 text-white border placeholder:text-white"
                      placeholder="Example: Hyderabad, Telengana"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="buttons-far">
              <Button className="buttons-color" onClick={() => prevStep}>
                {" "}
                Previous{" "}
              </Button>
              <Button className="buttons-color" type="submit">
                Next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Personal;
