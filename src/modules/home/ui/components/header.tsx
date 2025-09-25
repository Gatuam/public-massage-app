"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SheetMobile } from "./sheet";
import { nav } from "@/const";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "@/components/global/mode-toggle";
import { SheetTrigger } from "@/components/ui/sheet";
import { signOut } from "next-auth/react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" w-full  flex bg-primary-foreground/10 max-w-screen backdrop-blur-lg border-b border-accent-foreground/30 inset-0 fixed z-50 py-10 h-9 lg:px-4 px-2  ">
      <div className=" max-w-7xl mx-auto flex w-full justify-between items-center px-1 gap-x-6 ">
        <Link className=" flex justify-center items-center gap-2" href={"/"}>
          <Image
            className=" size-9 md:13"
            src={"/vercel.svg"}
            alt="logo"
            width={40}
            height={50}
          />
          <h1 className="text-2xl md:text-3xl  font-bold drop-shadow-2xl ">
            Orbit
          </h1>
        </Link>

        <div className=" flex-1 hidden md:flex ">
          <nav className=" flex w-full justify-center items-center gap-x-6">
            {nav.map((ele, i) => (
              <Button
                variant={"ghost"}
                asChild
                key={ele.id}
                className=" h-8 border border-accent-foreground/5 bg-accent-foreground/5"
              >
                <Link href={ele.href}>
                  <ele.icon />
                  <p className=" text-sm ">{ele.label}</p>
                </Link>
              </Button>
            ))}
          </nav>
        </div>

        <div className=" flex-1 w-full flex justify-end items-center md:hidden ">
          <Button
            onClick={() => setOpen((pre) => !pre)}
            variant={"ghost"}
            className="h-8 bg-gradient-to-b from-primary to-chart-3 drop-shadow-2xl text-accent"
          >
            Menu
          </Button>
          <SheetMobile open={open} setOpen={setOpen} />
        </div>

        <div className=" flex  justify-center items-center gap-2">
          <Button
          onClick={()=> {
            signOut()
          }}
            className=" hidden md:block bg-gradient-to-b from-primary to-chart-3 drop-shadow-2xl"
            size={"sm"}
          >
            Sign Out
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
