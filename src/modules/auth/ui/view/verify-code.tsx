import React from "react";
import { CardWarpper } from "../components/crad-wrapper";
import { SignInForm } from "../components/signin-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { VerifyForm } from "../components/verify-form";

export const VerifyView = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-screen">
      <CardWarpper
        title="Verify your email"
        description="verify your email to get start"
      >
        <VerifyForm />
      </CardWarpper>
    </div>
  );
};
