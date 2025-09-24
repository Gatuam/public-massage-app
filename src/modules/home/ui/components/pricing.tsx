import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["Unlimited messaging", "Basic features", "Community access"],
  },
  {
    name: "Pro",
    price: "$9/mo",
    features: ["Everything in Free", "Priority support", "Advanced tools"],
    highlight: true,
  },
];

export const Pricing = () => {
  return (
    <section className="py-20 flex flex-col items-center gap-y-12">
      <h2 className="text-4xl font-bold text-center">Simple Pricing</h2>
      <div className="grid md:grid-cols-2 gap-8 px-6 max-w-5xl">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl border shadow-md flex flex-col gap-6 ${
              plan.highlight ? "border-chart-2 bg-muted/50" : "border-accent-foreground/10"
            }`}
          >
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="text-4xl font-bold">{plan.price}</p>
            <ul className="flex flex-col gap-2 text-sm text-accent-foreground/70">
              {plan.features.map((f, i) => (
                <li key={i}>✅ {f}</li>
              ))}
            </ul>
            <Button
              className={`${
                plan.highlight
                  ? "bg-gradient-to-b from-primary to-chart-3"
                  : "bg-muted"
              }`}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
