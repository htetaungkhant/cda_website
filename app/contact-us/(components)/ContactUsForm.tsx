"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ParsedCountry, PhoneInput } from "react-international-phone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { cn } from "@/lib/shared/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData, contactSchema } from "@/lib/shared/validations";
import { useAsyncOperation } from "@/hooks/use-auth";
import { contactService } from "@/services/client/contact-service";

interface BookingFormProps {
  className?: string;
}

const defaultValues: ContactFormData = {
  firstName: "",
  mobileNumber: {
    phone: "",
    dialCode: "44",
  },
  emailId: "",
  course: "",
  message: "",
  agreeToTerms: true,
};

export function ContactUsForm({ className }: BookingFormProps) {
  const { loading, execute } = useAsyncOperation();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const modifiedData = {
        ...data,
        fullName: data.firstName,
        email: data.emailId,
        phoneNumber: `+${data.mobileNumber.dialCode}-${data.mobileNumber.phone
          ?.replace("+", "")
          .replace(data.mobileNumber.dialCode, "")}`,
        courseCategory: data.course,
      };

      await execute(async () => {
        const result = await contactService.createInquiry(modifiedData);
        toast.success("Contact request received successfully");
        form.reset();
        return result;
      });
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
      console.error("Form submission error:", error);
    }
  }

  function handlePhoneNumberChange(
    phone: string,
    meta: { country: ParsedCountry; inputValue: string }
  ) {
    const trimmedPhone = phone.trim();
    form.setValue("mobileNumber", {
      phone: trimmedPhone,
      dialCode: meta?.country?.dialCode,
    });

    if (
      form.formState.isSubmitted &&
      trimmedPhone.replace(`+${meta?.country?.dialCode}`, "").length > 0
    ) {
      form.trigger("mobileNumber");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "max-w-240 w-full border border-[var(--custom-primary)] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.25)] rounded-xl bg-white overflow-hidden",
          className
        )}
      >
        <div className="flex flex-col lg:flex-row">
          <Link
            href="https://www.google.com/maps/place/Cambridge+Driving+Academy/@52.218965,0.139653,10z/data=!4m15!1m8!3m7!1s0x47d870f6b8b15949:0xe4646c6d8649454d!2s11+Kinross+Rd,+Chesterton,+Cambridge+CB4+1QU,+UK!3b1!8m2!3d52.2189646!4d0.1396526!16s%2Fg%2F11c0_ckcgp!3m5!1s0x47d8710ab2ecfe95:0x8cb000cee85efed5!8m2!3d52.2189652!4d0.1396524!16s%2Fg%2F11rgfxkw1j?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
            rel="noopener noreferrer"
            target="_blank"
            className="w-full lg:w-1/2 lg:min-w-1/2 relative"
          >
            <Image
              src="/google-map.png"
              alt="google map"
              width={616}
              height={616}
              className="w-full h-full"
            />
            <div className="min-w-60 min-[375px]:min-w-72 sm:min-w-88 absolute top-5 left-5 flex justify-between border border-black rounded-xl bg-white p-3 shadow-sm">
              <div>
                <h2 className="mb-2 text-xs min-[375px]:text-base sm:text-lg font-semibold">
                  11 Kinross Rd
                </h2>
                <p className="text-[#5B5B5B] text-[10px] min-[375px]:text-xs sm:text-sm">
                  11 Kinross Rd, Chesterton,
                </p>
                <p className="text-[#5B5B5B] text-[10px] min-[375px]:text-xs sm:text-sm">
                  Cambridge CB4 1QU, UK
                </p>
              </div>
              <div>
                <div className="mx-auto w-8 h-8 md:w-10 md:h-10 bg-[url('/google-nav-icon.svg')] bg-contain bg-center bg-no-repeat" />
                <p className="mt-2 text-[10px] min-[375px]:text-xs text-[#1A73E8]">
                  Directions
                </p>
              </div>
            </div>
          </Link>
          <div>
            <h1 className="flex-1 px-5 py-3 text-lg font-semibold bg-gradient-to-r from-[#FFFAC6] to-[#FFFAC600] text-gray-800">
              Get A Free Quote
            </h1>
            <div className="px-2 py-3 sm:px-3 md:px-6 md:py-5 space-y-3">
              {/* First Name and Email Row */}
              <div className="grid grid-cols-1 min-sm:grid-cols-2 gap-2 sm:gap-4">
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
                          disabled={loading}
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
                          disabled={loading}
                          className="max-sm:text-xs border-gray-300 rounded-sm p-2 sm:px-4 sm:py-3 text-gray-800 placeholder:text-gray-500 focus:border-gray-400 focus:ring-0 focus-visible:ring-0"
                        />
                      </FormControl>
                      <FormMessage className="-mt-1 text-[10px] sm:text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Mobile Number and Course Row */}
              <div className="grid grid-cols-1 min-sm:grid-cols-2 gap-2 sm:gap-4">
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
                          value={field.value?.phone || ""}
                          onChange={handlePhoneNumberChange}
                          disableDialCodePrefill={true}
                          disableDialCodeAndPrefix={true}
                          placeholder="Phone number"
                          disabled={loading}
                          className="rounded-[4px] focus-within:border-gray-600 border-[0.5px]"
                          inputClassName="w-full flex-1 max-sm:text-xs!"
                        />
                      </FormControl>
                      <FormMessage className="-mt-1 text-[10px] sm:text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-gray-600 font-medium whitespace-nowrap text-xs sm:text-sm">
                        Your Course
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          disabled={loading}
                        >
                          <SelectTrigger className="max-sm:text-xs w-full border-gray-300 rounded-sm p-2 sm:px-4 sm:py-3 text-gray-800 focus:border-gray-400 focus:ring-0 focus-visible:ring-0">
                            <SelectValue placeholder="Select your Course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="automatic">Automatic</SelectItem>
                            <SelectItem value="manual">Manual</SelectItem>
                            <SelectItem value="intensive">Intensive</SelectItem>
                            <SelectItem value="bulk booking">
                              Bulk Booking
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="-mt-1 text-[10px] sm:text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Message Row */}
              <div className="grid grid-cols-1">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-gray-600 font-medium whitespace-nowrap text-xs sm:text-sm">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Need to discuss about the Course"
                          {...field}
                          disabled={loading}
                          className="h-24 lg:h-28 max-sm:text-xs border-gray-300 rounded-sm p-2 sm:px-4 sm:py-3 text-gray-800 placeholder:text-gray-500 focus:border-gray-400 focus:ring-0 focus-visible:ring-0"
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
                        disabled={loading}
                        className="mt-0.5 border-2 border-yellow-400 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400 rounded-sm w-4 h-4"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-xs sm:text-sm text-gray-600 cursor-pointer">
                        I agree to the{" "}
                        <Link
                          href="/terms-conditions"
                          className="text-yellow-500 font-medium hover:underline"
                        >
                          terms & conditions
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
                size="lg"
                disabled={loading}
                className="w-full bg-[var(--custom-primary)] hover:bg-yellow-400 cursor-pointer text-white font-semibold py-4 rounded-full text-sm sm:text-base transition-all duration-200"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </div>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
