"use client";
import React, { useState } from "react";
import { DataTable } from "../components/data-table";
import { columns, Payment } from "../components/coloms";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Message } from "@/model/user";
import { useSession } from "next-auth/react";

export const Warpper = () => {
  const [messages, setMessages] = useState<Message[]>([]);
     
  const handleDeletMessage = (messageId : string)=> {
    setMessages(messages.filter((message)=> message._id !== messageId ))
  }

  const {data : session } = useSession();

  if(!session){
    
  }

  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "processing",
      email: "jkhfih",
    },
  ];
  return (
    <div>
      <Card className=" bg-background ">
        <CardHeader>
          <CardTitle>Your messages data</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};
