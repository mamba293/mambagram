"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import FormError from "@/components/form-error";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { login } from "@/actions/login";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import CardWrapper from "@/components/auth/card-wraper/card-wraper";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    setError("");

    startTransition(() => {
      login(data).then((data) => {
        setError(data.error);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Mambagram"
      headerParagraph="Welcome Back"
      backButtonLabel="Don't have an account? Sign up"
      backButtonHref="/signup"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className={cn(montserrat.className)}>
                  <FormLabel className="text-gray-500">Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="email"
                      {...field}
                      placeholder="enter@youremail.com"
                      className={cn(
                        "font-normal",

                        montserrat.className
                      )}
                    />
                  </FormControl>
                  <FormMessage className={cn(montserrat.className)} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className={cn(montserrat.className)}>
                  <FormLabel className="text-gray-500">Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="password"
                      autoComplete="current-password"
                      {...field}
                      placeholder="12345"
                      className={cn("font-normal", montserrat.className)}
                    />
                  </FormControl>
                  <FormMessage className={cn(montserrat.className)} />
                </FormItem>
              )}
            />
            <FormError message={error} />
          </div>
          <Button
            className="w-full bg-gradient-to-r 
                            from-blue-700 to-purple-500 hover:bg-gradient-to-r 
                            hover:from-blue-800 hover:to-purple-600"
            type="submit"
            disabled={isPending}
          >
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
