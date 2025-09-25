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
import { Message } from "@/model/user";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

export const Warpper = () => {
  const fetchMessages = async () => {
    try {
      const res = await axios.get<ApiResponse>("/api/get-messages");
      if (!res.data.success || !res.data.messages) {
    throw new Error(res.data.message || "Failed to fetch messages");
  }
      if (res.data.messages && res.data.messages.length > 0) {
        toast.success("Messages loaded successfully");
      }
      return res.data.messages;
    } catch (error: any) {
      toast.error("Something went wrong!", error?.message);
      throw error;
    }
  };

  const fetchDataCallback = useCallback(() => {
    return fetchMessages;
  }, []);

  const { data: messages = [], isLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages,
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
