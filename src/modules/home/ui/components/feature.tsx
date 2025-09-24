import { MessageCircle, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="size-6 text-chart-1" />,
    title: "Seamless Messaging",
    desc: "Fast, reliable chat built for communities and teams.",
  },
  {
    icon: <ShieldCheck className="size-6 text-chart-2" />,
    title: "Private & Secure",
    desc: "Your data is encrypted and your privacy protected.",
  },
  {
    icon: <Zap className="size-6 text-chart-3" />,
    title: "Always Fast",
    desc: "Lightweight and distraction-free design for real-time messaging.",
  },
];

export const Features = () => {
  return (
    <section className="py-16 md:py-36 flex flex-col items-center gap-y-12">
      <div className="relative inline-block border border-primary md:px-6 md:py-4 px-3 py-1 ">
        {/* Corner handles */}
        <span className="absolute -top-1 -left-1 h-2 w-2 bg-chart-2"></span>
        <span className="absolute -top-1 -right-1 h-2 w-2 bg-chart-2"></span>
        <span className="absolute -bottom-1 -left-1 h-2 w-2 bg-chart-2"></span>
        <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-chart-2"></span>

        <h1 className="md:text-4xl text-md text-center text-muted-foreground font-bold">
          Why Choose Orbit?
        </h1>
      </div>
      <div className="relative flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-5 px-6">
        <div className="absolute top-1/2 left-1/2 md:w-100 w-50 h-50 md:h-100 bg-gradient-to-b from-primary/40 to-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-accent-foreground/10 shadow-sm flex flex-col items-center gap-4 text-center  w-90"
          >
            <div className="p-3 rounded-full bg-muted">{f.icon}</div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-sm text-accent-foreground/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
