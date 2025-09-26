"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { AnimatedCard } from "./animate-card";
import { useSession } from "next-auth/react";
import { GenAvatarImage } from "./gen-avtar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { credentailSchema } from "@/schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const CardComponents = () => {
  const session = useSession();

  const form = useForm<z.infer<typeof credentailSchema>>({
    resolver: zodResolver(credentailSchema),
    defaultValues: {
      username: session?.data?.user?.username || "",
      email: session?.data?.user?.email || "",
    },
  });

  function onSubmit(values: z.infer<typeof credentailSchema>) {
    console.log(values);
  }

  return (
    <AnimatedCard>
      <CardHeader className="flex flex-col justify-center items-center mt-3">
        <CardTitle className="text-2xl font-bold text-white">
          Update Your Profile
        </CardTitle>
        <p className="text-slate-400 mt-2">Your profile information</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="w-full flex justify-center items-center">
          <div className=" border w-fit p-1 rounded-full border-primary/40 animate-pulse">
            <div className=" border w-fit p-1 rounded-full bg-gradient-to-b from-primary to-chart-2/80">
              {GenAvatarImage({ name: session?.data?.user?.username || "wth" })}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className=" space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={session?.data?.user?.username}
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
                          placeholder={session?.data?.user?.email}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>

        {/* Account Information Section */}
        <div className="space-y-4 mt-8">
          <h3 className="text-xl font-semibold text-white">
            Account Information
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-700">
              <span className="text-slate-300">Member Since</span>
              <span className="text-slate-400">Not specified</span>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-slate-300">Account Status</span>
              <Badge
                variant="default"
                className="bg-green-600 hover:bg-green-700"
              >
                Active
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </AnimatedCard>
  );
};
