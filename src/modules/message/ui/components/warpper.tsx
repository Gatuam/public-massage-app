"use client";
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
import { DataTable } from "./data-table";
import { columns } from "./coloms";
import { Loader } from "lucide-react";
import { useSession } from "next-auth/react";

export const Warpper = () => {
  const { data: session } = useSession();
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

  if (!session) {
    return (
      <Card className=" justify-center items-center flex flex-col animate-pulse ">
        <CardHeader className=" justify-center items-center flex flex-col gap-3">
          <CardTitle>Unauthorized</CardTitle>
        </CardHeader>
        <CardContent className=" w-full flex items-center justify-center">
          Login to check the messages
        </CardContent>
        <CardFooter>
          <Loader className=" animate-spin" />
        </CardFooter>
      </Card>
    );
  }

  return (
    <div>
      <Card className=" bg-background ">
        <CardHeader>
          <CardTitle>All Messages data</CardTitle>
          <CardAction>
            <MessageForm />
          </CardAction>
        </CardHeader>
        <CardContent>
         {<DataTable columns={columns} data={messages} />}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};
