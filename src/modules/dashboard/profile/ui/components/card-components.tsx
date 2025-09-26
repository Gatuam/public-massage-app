import React from "react";
import { AnimatedCard } from "./animate-card";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CardComponents = () => {
  return (
    <AnimatedCard>
      
        <CardHeader className=" flex justify-center items-center mt-3">
          <CardTitle>Update Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
            
        </CardContent>
        <CardFooter></CardFooter>

    </AnimatedCard>
  );
};
