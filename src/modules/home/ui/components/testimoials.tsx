const testimonials = [
  {
    name: "Alex Carter",
    role: "Community Manager",
    text: "Orbit keeps my community engaged and connected like never before.",
  },
  {
    name: "Sofia Kim",
    role: "Team Lead",
    text: "Our team productivity skyrocketed once we moved to Orbit!",
  },
  {
    name: "Raj Mehta",
    role: "Student",
    text: "Finally a messaging app that’s clean, fast, and easy to use.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30 flex flex-col items-center gap-y-12">
      <h2 className="text-4xl font-bold text-center">Loved by People Everywhere</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-accent-foreground/10 shadow-md bg-background"
          >
            <p className="text-accent-foreground/80 mb-4">“{t.text}”</p>
            <p className="font-semibold">{t.name}</p>
            <p className="text-xs text-accent-foreground/60">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
