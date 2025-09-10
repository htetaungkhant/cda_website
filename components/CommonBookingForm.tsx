"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneInput } from "react-international-phone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { cn, stripePromise } from "@/lib/shared/utils";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CommonBookingFormData,
  commonBookingSchema,
} from "@/lib/shared/validations";
import { useAsyncOperation } from "@/hooks/use-auth";
import { paymentService } from "@/services/client/payment-service";
import { StripeApiResponse } from "@/types/payment";

interface CheckoutFormProps {
  stripeMetaFromAPI: StripeApiResponse | null;
  onSuccess?: () => void | Promise<void>;
  className?: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  stripeMetaFromAPI,
  onSuccess,
  className,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmitCheckout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!stripe || !elements || !stripeMetaFromAPI?.sessionId?.client_secret) {
      return;
    }

    try {
      setIsLoading(true);

      const { error: submitError } = await elements.submit();
      if (submitError) {
        toast.error(submitError.message || "Failed to process payment.");
        setIsLoading(false);
        return;
      }

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret: stripeMetaFromAPI?.sessionId?.client_secret,
        redirect: "if_required",
        confirmParams: {
          return_url: window.location.href,
        },
      });

      if (error) {
        if (error.type === "card_error" || error.type === "validation_error") {
          toast.error(error.message);
          return;
        } else {
          toast.error("An unexpected error occurred.");
          return;
        }
      }

      setIsLoading(false);
      toast.success("Booking and Payment succeeded!", { duration: 10000 });
      await onSuccess?.();
    } catch (error) {
      console.error("Payment processing error:", error);
      toast.error("Payment processing error. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmitCheckout}
      className={cn(
        "px-8 pt-12 pb-6 max-h-[95vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
        className
      )}
    >
      <PaymentElement options={{ layout: "tabs" }} />
      <div className="flex justify-end gap-4 mt-6">
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          type="submit"
          className="px-4 py-2 rounded-lg bg-[#212A63] text-white cursor-pointer"
        >
          {isLoading ? "Processing..." : "Pay now"}
        </button>
      </div>
    </form>
  );
};

interface CommonBookingFormProps {
  id: string;
  onSuccess?: () => void | Promise<void>;
  className?: string;
}

const CommonBookingForm: React.FC<CommonBookingFormProps> = ({
  id,
  onSuccess,
  className,
}) => {
  const { loading, execute } = useAsyncOperation();
  const [stripeMetaFromAPI, setStripeMetaFromAPI] =
    useState<StripeApiResponse | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const bookingForm = useForm<CommonBookingFormData>({
    resolver: zodResolver(commonBookingSchema),
    defaultValues: {
      fullName: "",
      emailId: "",
      address: "",
      postcode: "",
      mobileNumber: "",
      agreeToTerms: true,
    },
  });

  async function onSubmitBooking(values: CommonBookingFormData) {
    try {
      const payload = {
        ...values,
        courseId: id,
        email: values.emailId,
        phone: values.mobileNumber,
        postalCode: values.postcode,
        // withTest: process.env.NODE_ENV === "development" ? true : undefined,
        withTest: true,
      };

      await execute(async () => {
        const result = await paymentService.createPaymentIntent(payload);
        setStripeMetaFromAPI(result);
        setIsOpen(true);
        return result;
      });
    } catch (error) {
      toast.error("Booking form submission error. Please try again.");
      console.error("Booking form submission error:", error);
    }
  }

  async function handleAfterPaymentSuccess() {
    setIsOpen(false);
    bookingForm.reset();
    await onSuccess?.();
  }

  return (
    <>
      <Form {...bookingForm}>
        <form
          onSubmit={bookingForm.handleSubmit(onSubmitBooking)}
          className={cn(
            "max-w-200 w-full border border-[var(--custom-primary)] shadow-[4px_4px_12px_0px_rgba(0,0,0,0.25)] rounded-xl bg-white",
            className
          )}
        >
          <h1 className="p-2 sm:px-5 sm:py-3 text-base sm:text-lg font-semibold bg-gradient-to-r from-[#FFFAC6] to-[#FFFAC600] text-gray-800 rounded-t-xl">
            Please fill in the form below
          </h1>

          <div className="px-2 py-4 sm:px-3 md:px-6 md:py-6 space-y-5">
            {/* Full Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <FormField
                control={bookingForm.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-gray-600 font-medium whitespace-nowrap text-xs sm:text-sm">
                      Full Name
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
                control={bookingForm.control}
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

            {/* Address and Postcode Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <FormField
                control={bookingForm.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-gray-600 font-medium whitespace-nowrap text-xs sm:text-sm">
                      Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123 Main St"
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
                control={bookingForm.control}
                name="postcode"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-gray-600 font-medium whitespace-nowrap text-xs sm:text-sm">
                      Postcode
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="12345"
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

            {/* Mobile Number Row */}
            <div className="grid grid-cols-1">
              <FormField
                control={bookingForm.control}
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
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage className="-mt-1 text-[10px] sm:text-xs" />
                  </FormItem>
                )}
              />
            </div>

            {/* Terms and Conditions Checkbox */}
            <FormField
              control={bookingForm.control}
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
                    <FormLabel className="text-xs sm:text-sm text-gray-600 cursor-pointer whitespace-nowrap flex flex-wrap items-center">
                      I agree to the{" "}
                      <Link
                        href="/terms-conditions"
                        target="_blank"
                        className="text-yellow-500 font-medium hover:underline"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      &{" "}
                      <Link
                        href="/privacy-policy"
                        target="_blank"
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
              disabled={loading}
            >
              {loading ? "Submitting..." : "Make Payment"}
            </Button>
          </div>
        </form>
      </Form>
      <Dialog modal open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          showCloseButton={false}
          onPointerDownOutside={(e) => e.preventDefault()}
          className="p-0 sm:max-w-[70vw] w-[90vw] md:w-[75vw] lg:w-[60vw] lg:max-w-200 rounded-3xl border-none"
        >
          <DialogTitle className="hidden" />
          <DialogDescription className="hidden" />
          <DialogClose asChild>
            <Image
              src="/cross-icon-black.png"
              alt="Close"
              width={24}
              height={24}
              className="absolute top-3 right-3 cursor-pointer"
            />
          </DialogClose>
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: stripeMetaFromAPI?.sessionId?.amount,
              currency: stripeMetaFromAPI?.sessionId?.currency,
            }}
          >
            <CheckoutForm
              stripeMetaFromAPI={stripeMetaFromAPI}
              onSuccess={handleAfterPaymentSuccess}
            />
          </Elements>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CommonBookingForm;
