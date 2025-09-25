import { TriangleAlert } from "lucide-react";
import React from "react";

interface Props {
  message?: string;
}

export const FormError = ({ message }: Props) => {
  return (
    <div className=" w-full p-3 rounded-md bg-destructive/9 text-destructive/90 flex gap-x-3 justify-start items-center ">
      <TriangleAlert className=" size-4 text-destructive/90" />
      <p className=" text-sm font-semibold">{message}</p>
    </div>
  );
};
