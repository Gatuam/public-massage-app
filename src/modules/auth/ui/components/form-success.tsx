import {  CheckCircle} from "lucide-react";
import React from "react";

interface Props {
  message?: string;
}

export const FormSuccess = ({ message }: Props) => {
  return (
    <div className=" w-full p-3 flex gap-x-3 justify-start items-center bg-green-300/10 text-green-600/90 rounded-md">
      <CheckCircle className=" size-4 text-green-600/90" />
      <p className=" text-sm font-semibold">{message}</p>
    </div>
  );
};
