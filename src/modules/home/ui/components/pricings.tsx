'use client'
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown, Building } from "lucide-react";
import React, { useState } from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Unlimited messaging",
      "Basic features",
      "Community access",
      "Email support",
      "Mobile app access",
    ],
    icon: Zap,
    color: "chart-4",
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "Best for growing teams",
    features: [
      "Everything in Free",
      "Priority support",
      "Advanced tools",
      "Analytics dashboard",
      "Custom integrations",
      "Team collaboration",
    ],
    highlight: true,
    popular: true,
    icon: Crown,
    color: "chart-2",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per year",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "24/7 priority support",
      "Advanced security & compliance",
      "On-premise deployment options",
      "Unlimited team members",
    ],
    icon: Building,
    color: "chart-1",
  },
];

export const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section className="py-20 flex flex-col items-center gap-y-12 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-chart-3/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="text-center space-y-4 relative z-10 px-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
          <Star className="w-4 h-4" />
          Simple & Transparent
        </div>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Choose Your Plan
        </h2>
        <p className="text-sm md:text-lg text-muted-foreground max-w-sm text-center px-2 ">
          Start free and upgrade when you're ready. No hidden fees, cancel anytime.
        </p>
      </div>

<div className=" w-full flex justify-center items-center md:mt-9 px-4 ">
     <div className="grid md:grid-cols-3 gap-8 px-6 w-full relative z-10">
        {plans.map((plan, i) => {
          const IconComponent = plan.icon;
          return (
            <div
              key={i}
              className={`relative p-8 rounded-3xl border shadow-lg flex flex-col gap-6 transition-all duration-500 cursor-pointer group ${
                plan.highlight 
                  ? "border-primary/30 bg-gradient-to-b from-background to-primary/5 hover:shadow-2xl hover:shadow-primary/20 scale-101 md:scale-110 text-accent-foreground" 
                  : "border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:border-border"
              } ${
                hoveredPlan === i ? "transform hover:scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredPlan(i)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-chart-3 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Background glow effect */}
              {plan.highlight && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-chart-3/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              )}

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-chart-2/70 flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${
                        plan.highlight 
                          ? "from-primary to-chart-3" 
                          : "from-chart-4 to-chart-4/70"
                      } flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-background" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full h-10 text-base font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? "bg-gradient-to-b from-primary to-chart-3 drop-shadow-2xl hover:from-primary/90 hover:to-chart-3/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/25"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                  } ${
                    hoveredPlan === i ? "transform scale-105" : ""
                  }`}
                >
                  {plan.name === "Free" ? "Start Free" : "Get Started"}
                  {plan.highlight && <Crown className="w-4 h-4 ml-2" />}
                </Button>

                {/* Additional info */}
                <p className="text-center text-xs text-muted-foreground mt-4">
                  {plan.name === "Free" ? "No credit card required" : "7-day free trial included"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
</div>

    </section>
  );
};