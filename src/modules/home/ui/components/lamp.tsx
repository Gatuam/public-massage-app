"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/button";

export function Lamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-primary to-chart-2 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Orbit
        <br /> Connect Toady?
      </motion.h1>
      <Button className=" h-8 bg-gradient-to-b from-primary to-chart-3 drop-shadow-2xl text-accent">
        Get Started Free
      </Button>
    </LampContainer>
  );
}
