import React from "react";
import { CardWarpper } from "../components/crad-wrapper";
import { SignInForm } from "../components/signin-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignUpForm } from "../components/signup-form";

export const SignUpView = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-screen">
      <CardWarpper
        title="Welcome from Public Messaging App"
        description="Signup to get start"
        backLink={
          <>
            <p className=" text-sm ">Alerday have an accouny?</p>
            <Button variant={"link"} size={"sm"}>
              <Link href={"/sign-in"}>Sign-in</Link>
            </Button>
          </>
        }
      >
        <SignUpForm />
      </CardWarpper>
    </div>
  );
};
