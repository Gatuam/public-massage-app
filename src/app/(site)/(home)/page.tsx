'use client'
import { ModeToggle } from "@/components/global/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div>
      hi
      <ModeToggle/>
      <Button
      onClick={()=> signIn()}
      >
        sign in
      </Button>
    </div>
  );
}
