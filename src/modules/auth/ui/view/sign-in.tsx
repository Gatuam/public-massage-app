import React from "react";
import { CardWarpper } from "../components/crad-wrapper";
import { SignInForm } from "../components/signin-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SignInView = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-screen">
      <CardWarpper
        title="Welcome back from Public messaging"
        description="Signin to get start"
        backLink={
          <>
            <p className=" text-sm ">Sont have an account yet?</p>
            <Button variant={"link"} size={"sm"}>
              <Link href={"/sign-up"}>Sign-up</Link>
            </Button>
          </>
        }
      >
        <SignInForm />
      </CardWarpper>
    </div>
  );
};
