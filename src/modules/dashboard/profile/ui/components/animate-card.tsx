import { Card } from "@/components/ui/card";
import { BorderTrail } from "./card-animated";

export function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="relative overflow-hidden p-4 rounded-lg w-full max-w-md bg-gradient-to-r from-background/30 to-secondary/20 backdrop-blur-2xl border border-primary/40 ">
      {children}

      {/* Border trail */}
      <BorderTrail
        size={80}
        className="bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500"
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </Card>
  );
}
