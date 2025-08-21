"use client";
import React from "react";
import Link from "next/link";
import { PhoneInput } from "react-international-phone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { cn } from "@/lib/shared/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  mobileNumber: z.string().min(10, {
    message: "Please enter a valid mobile number.",
  }),
  emailId: z.string().email({
    message: "Please enter a valid email address.",
  }),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

interface CommonBookingFormProps {
  className?: string;
}

const CommonBookingForm: React.FC<CommonBookingFormProps> = ({ className }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      mobileNumber: "",
      emailId: "",
      agreeToTerms: true,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "max-w-200 w-full border border-[var(--custom-primary)] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.25)] rounded-xl bg-white",
          className
        )}
      >
        <h1 className="p-2 sm:px-5 sm:py-3 text-base sm:text-lg font-semibold bg-gradient-to-r from-[#FFFAC6] to-[#FFFAC600] text-gray-800 rounded-t-xl">
          Please fill in the form below
        </h1>

        <div className="px-2 py-4 sm:px-3 md:px-6 md:py-6 space-y-5">
          {/* First Name and Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-gray-600 font-medium whitespace-nowrap text-xs sm:text-sm">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Walter"
                      {...field}
                      className="max-sm:text-xs border-gray-300 rounded-sm p-2 sm:px-4 sm:py-3 text-gray-800 placeholder:text-gray-500 focus:border-gray-400 focus:ring-0 focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage className="-mt-1 text-[10px] sm:text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailId"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-gray-600 font-medium whitespace-nowrap text-xs sm:text-sm">
                    Email ID
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="waltergray.matter@gmail.com"
                      {...field}
                      className="max-sm:text-xs border-gray-300 rounded-sm p-2 sm:px-4 sm:py-3 text-gray-800 placeholder:text-gray-500 focus:border-gray-400 focus:ring-0 focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage className="-mt-1 text-[10px] sm:text-xs" />
                </FormItem>
              )}
            />
          </div>

          {/* Mobile Number and Email Row */}
          <div className="grid grid-cols-1">
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-gray-600 font-medium whitespace-nowrap text-xs sm:text-sm">
                    Mobile Number
                  </FormLabel>
                  <FormControl>
                    <PhoneInput
                      defaultCountry="gb"
                      value={field.value}
                      onChange={field.onChange}
                      className="rounded-[3px] focus-within:border-gray-600 border-[0.5px]"
                      inputClassName="w-full max-sm:text-xs!"
                    />
                  </FormControl>
                  <FormMessage className="-mt-1 text-[10px] sm:text-xs" />
                </FormItem>
              )}
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row space-x-0 space-y-0 mt-6">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-0.5 border-2 border-yellow-400 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400 rounded-sm w-4 h-4"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-xs sm:text-sm text-gray-600 cursor-pointer whitespace-nowrap flex flex-wrap items-center">
                    I agree to the{" "}
                    <Link
                      href="/terms-conditions"
                      className="text-yellow-500 font-medium hover:underline"
                    >
                      terms & conditions
                    </Link>{" "}
                    &{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-yellow-500 font-medium hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </FormLabel>
                  <FormMessage className="-mt-1 text-[10px] sm:text-xs" />
                </div>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[var(--custom-primary)] hover:bg-yellow-400 cursor-pointer text-white font-semibold py-4 rounded-full text-sm sm:text-base transition-all duration-200"
            size="lg"
          >
            Make Payment
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CommonBookingForm;
