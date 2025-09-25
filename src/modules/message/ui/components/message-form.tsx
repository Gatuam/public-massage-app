"use client";
import { Message } from "@/model/user";
import { useSession } from "next-auth/react";
import React, { useCallback, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { accpectionMessageSchema } from "@/schema";

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
import { Switch } from "@/components/ui/switch";
import axios from "axios";
import { toast } from "sonner";
import { ApiResponse } from "@/types/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const MessageForm = () => {
  const queryClient = useQueryClient();

  const [messages, setMessages] = useState<Message[]>([]);

  const handleDeletMessage = (messageId: string) => {
    setMessages(messages.filter((message) => message._id !== messageId));
  };

  const { data: session } = useSession();

  const form = useForm<z.infer<typeof accpectionMessageSchema>>({
    resolver: zodResolver(accpectionMessageSchema),
    defaultValues: {
      accpectMessage: false,
    },
  });

  const { formState, register, setValue } = form;
  const accpectMessage = form.watch("accpectMessage");

  function onSubmit(values: z.infer<typeof accpectionMessageSchema>) {
    console.log(values);
  }

  const fetchData = async () => {
    try {
      const res = await axios.get<ApiResponse>("/api/accpect-message");

      if (!res.data.success || !res.data) {
        toast.error("Something went wrong!");
      }
      if (res.data.isAccpectionMessage === true) {
        setValue("accpectMessage", res.data.isAccpectionMessage);
        toast.success("User is  accpecting the message");
      } else {
        setValue("accpectMessage", res.data.isAccpectionMessage || false);
        toast.success("User is not accpecting the message");
      }

      console.log(res);

      return res;
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong!");
      console.log(error);
      throw error;
    }
  };

  const FetchMessage = useCallback(() => {
    return fetchData();
  }, [setValue]);

  const todoListQuery = useQuery({
    queryKey: ["isAccpectings"],
    queryFn: FetchMessage,
  });

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="accpectMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Accpect Message</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
