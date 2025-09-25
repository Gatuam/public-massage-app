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
import { signInSchema } from "@/schema";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export function SignInForm() {
  const route = useRouter();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof signInSchema>) => {
      const res = await signIn("credentials", {
        redirect: false,
        callbackUrl: "/",
        email: values.email,
        password: values.password,
      });
      if (!res) throw new Error("No response from server");
      if (!res.ok) {
        throw new Error(res.error || "Invalid credentials");
      }
      console.log(res);
      return res;
    },
    onSuccess: (data) => {
      toast.success("Signin successfully!");
      setSuccess("Signed in successfully!");
      setError(undefined);
      route.push("/");
    },
    onError: (error: any) => {
      const message = error.message || "Something went wrong. Try again.";
      toast.error("SignIn failed: " + message);
      setError(message);
      setSuccess(undefined);
    },
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
    mutation.mutate(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className=" space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                   disabled={mutation.isPending}
                  type="email" placeholder="john@gmail.com" {...field} />
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
                  type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className=" flex flex-col gap-y-3">
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}
          <Button 
           disabled={mutation.isPending}
          type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
