"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { AnimatedCard } from "./animate-card";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { GenAvatarImage } from "./gen-avtar";

export const CardComponents = () => {
  const session = useSession();
  return (
    <AnimatedCard>
      <CardHeader className="flex flex-col justify-center items-center mt-3">
        <CardTitle className="text-2xl font-bold text-white">
          Update Your Profile
        </CardTitle>
        <p className="text-slate-400 mt-2">Your profile information</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="w-full flex justify-center items-center">
          <div className=" border w-fit p-1 rounded-full border-primary/40 animate-pulse">
            <div className=" border w-fit p-1 rounded-full bg-gradient-to-b from-primary to-chart-2/80">
              {GenAvatarImage({ name: session?.data?.user?.username || "wth" })}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-slate-300">
              Username
            </Label>
            <Input
              id="username"
              value={session?.data?.user?.username || "User name"}
              className="bg-slate-700 border-slate-600 text-white read-only:cursor-default"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={session?.data?.user?.email || "User name"}
              className="bg-slate-700 border-slate-600 text-white read-only:cursor-default"
            />
          </div>
        </div>

        {/* Account Information Section */}
        <div className="space-y-4 mt-8">
          <h3 className="text-xl font-semibold text-white">
            Account Information
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-700">
              <span className="text-slate-300">Member Since</span>
              <span className="text-slate-400">Not specified</span>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-slate-300">Account Status</span>
              <Badge
                variant="default"
                className="bg-green-600 hover:bg-green-700"
              >
                Active
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </AnimatedCard>
  );
};
