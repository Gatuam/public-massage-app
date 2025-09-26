import React from "react";
import { BorderTrail } from "../components/card-animated";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedCard } from "../components/animate-card";
import { CardComponents } from "../components/card-components";

export const ProfileView = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-y-5">
      <div>
        <h1 className=" text-4xl font-semibold">
            Update your details
        </h1>
      </div>
      <CardComponents/>
    </div>
  );
};
