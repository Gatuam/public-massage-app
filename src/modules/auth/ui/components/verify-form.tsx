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
import { signInSchema, verifySchema } from "@/schema";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function VerifyForm() {
  const route = useRouter();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      code: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof verifySchema>) => {
      const res = await axios.post("/api/verification", {
        code: values.code,
      });
      console.log(res.data);
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("code verify successfully");
      setSuccess(data?.message);
      setError(undefined);
      route.push("/sign-in");
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message || "Something went wrong. Try again.";
      toast.error("SignUp failed: " + message);
      setError(message);
      setSuccess(undefined);
    },
  });

  function onSubmit(values: z.infer<typeof verifySchema>) {
    console.log(values);
    mutation.mutate(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className=" space-y-4">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="1234" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className=" flex flex-col gap-y-3">
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
