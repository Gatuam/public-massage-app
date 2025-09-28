"use client";
import { Message } from "@/model/user";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { accpectionMessageSchema } from "@/schema";

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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const MessageForm = () => {
  const queryClient = useQueryClient();

  const [messages, setMessages] = useState<Message[]>([]);

  const handleDeletMessage = (messageId: string) => {
    setMessages(messages.filter((message) => message._id !== messageId));
  };

  const form = useForm<z.infer<typeof accpectionMessageSchema>>({
    resolver: zodResolver(accpectionMessageSchema),
    defaultValues: {
      accpectMessage: false,
    },
  });

  const { setValue, register } = form;
  const accpectMessage = form.watch("accpectMessage");

  function onSubmit(values: z.infer<typeof accpectionMessageSchema>) {
    console.log(values);
  }

  const handleSwitchChange = async () => {
    try {
      const res = await axios.post<ApiResponse>("/api/accpect-message", {
        accpectMessages: !accpectMessage,
      });
      setValue("accpectMessage", !accpectMessage);
      return res;
    } catch (error) {
      throw error;
    }
  };

  const switchStatusMutation = useMutation({
    mutationFn: handleSwitchChange,
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Something went wrong!");
      } else {
        toast.error("Unexpected error");
      }
    },
    onSuccess: (data) => {
      toast.success(data.data.message || "Cahnge Succesfully");
      queryClient.invalidateQueries({ queryKey: ["isAccpectings"] });
    },
  });

  const fetchStatus = async () => {
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

      return res;
    } catch (error: any) {
      toast.error(error?.message || "Something went wrong!");
      console.log(error);
      throw error;
    }
  };

  const todoListQuery = useQuery({
    queryKey: ["isAccpectings"],
    queryFn: fetchStatus,
  });

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="accpectMessage"
            render={({ field }) => (
              <FormItem className=" flex flex-col justify-center items-center">
                <FormLabel>Accpect Message</FormLabel>
                <div className=" flex gap-x-2 justify-center items-center">
                  <FormControl>
                    <Switch
                      {...register("accpectMessage")}
                      checked={field.value}
                      onCheckedChange={() => switchStatusMutation.mutate()}
                    />
                  </FormControl>
                  <samp>{accpectMessage ? "on" : "off"}</samp>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
