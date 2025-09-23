'use client'
import { ModeToggle } from "@/components/global/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const {data : session} = useSession()

  if(session){
     <div>
      hi
      <ModeToggle/>
      <Button
      onClick={()=> signOut()}
      >
        sign out
      </Button>
      {JSON.stringify(session, null, 2)}
    </div>
  }
  return (
    <div>
      <Button
      onClick={()=> signIn()}
      >
        sign in
      </Button>
    </div>
  );
}
