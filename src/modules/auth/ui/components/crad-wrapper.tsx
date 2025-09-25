import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
  backLink?: React.ReactNode;
}

export const CardWarpper = ({ backLink, description, title, children }: Props) => {
  return (
    <Card className=" max-w-md min-w-[360px] md:min-w-[400px]  ">
      <CardHeader className=" flex flex-col items-center justify-center gap-1 mb-1">
        <CardTitle className=" text-md text-center">{title}</CardTitle>
        <CardDescription> {description} </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{backLink}</CardFooter>
    </Card>
  );
};


