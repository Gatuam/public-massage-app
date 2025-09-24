import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { nav } from "@/const";
import Link from "next/link";

import React from "react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const SheetMobile = ({ open, setOpen }: Props) => {
  return (
    <Sheet open={open} onOpenChange={setOpen} >
      <SheetContent side="left" >
        <SheetHeader className=" space-y-5">
          <SheetTitle>
            <Link
              className=" flex justify-center items-center gap-2 py-2 border-b border-accent-foreground/30"
              href={"/"}
            >
              <span className="text-xl font-bold  ">Orbit</span>
            </Link>
          </SheetTitle>
          <SheetDescription className=" sr-only">
            public messaging app
          </SheetDescription>
          <div className=" flex flex-col gap-y-2 ">
            {nav.map((ele) => (
              <Button
                variant={"ghost"}
                asChild
                key={ele.id}
                className=" border border-accent-foreground/10 bg-gradient-to-b from-accent-foreground/1 to-accent-foreground/5 drop-shadow-2xl flex justify-start hover:bg-accent-foreground/30"
              >
                <Link href={ele.href}>
                  <ele.icon />
                  <p className=" text-sm ">{ele.label}</p>
                </Link>
              </Button>
            ))}
          </div>
        </SheetHeader>
        <SheetFooter className=" gap-y-6">
          <Separator className=" bg-accent-foreground/40" />
          <div className=" w-full">
            <Button className=" relative w-full bg-gradient-to-b from-primary to-chart-3 drop-shadow-2xl">
              Signout
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
