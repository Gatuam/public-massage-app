"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/schema";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export function SignUpForm() {
  const route = useRouter();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof signUpSchema>) => {
      const res = await axios.post("/api/sign-up", {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      console.log(res.data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Signup successfully Check email to verify");
      setSuccess(data?.message);
      setError(undefined);
      route.push("/verify-code");
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message || "Something went wrong. Try again.";
      toast.error("SignUp failed: " + message);
      setError(message);
      setSuccess(undefined);
    },
  });

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values);
    mutation.mutate(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className=" space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    disabled={mutation.isPending}
                    type="John"
                    placeholder="john"
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
                    disabled={mutation.isPending}
                    type="email"
                    placeholder="john@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    disabled={mutation.isPending}
                    type="password"
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className=" flex flex-col gap-y-3">
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}
          <Button disabled={mutation.isPending} type="submit">
           { mutation.isPending  ? <Loader className=" animate-spin"/> : 'Submit'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
