"use client";
import React, { useCallback, useState } from "react";
import { DataTable } from "../components/data-table";
import { columns } from "../components/coloms";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageForm } from "./message-form";
import axios from "axios";
import { ApiResponse } from "@/types/types";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { Message } from "@/model/user";

export const Warpper = () => {
  const fetchMessages = async () => {
    try {
      const res = await axios.get<ApiResponse>("/api/get-messages");
      if (res.data?.success !== true) {
        toast.error("Something went wrong");
        throw new Error("Getting messages error");
      }

      if (!Array.isArray(res.data.message)) {
        throw new Error("API returned unexpected message shape");
      }

      if (res.data.success && res.data.message) {
        toast.success("Messages loaded successfully");
      }
      console.log(res);

      return res.data.message;
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong!", error?.message);
      throw error;
    }
  };

  const { data: messages = [], isLoading } = useQuery<Message[]>({
    queryKey: ["messages"],
    queryFn: fetchMessages,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <Card className=" bg-background ">
        <CardHeader>
          <CardTitle>Your messages data</CardTitle>
          <CardAction>
            <MessageForm />
          </CardAction>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={messages} />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};
