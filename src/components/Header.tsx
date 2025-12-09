import { Trophy } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center mb-10">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="relative">
          <Trophy className="w-10 h-10 text-secondary animate-float" />
          <div className="absolute inset-0 blur-xl bg-secondary/30 rounded-full" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-foreground text-glow tracking-tight">
          TASK<span className="text-primary">FIELD</span>
        </h1>
        <div className="relative">
          <Trophy className="w-10 h-10 text-secondary animate-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute inset-0 blur-xl bg-secondary/30 rounded-full" />
        </div>
      </div>
      <p className="text-muted-foreground text-lg font-medium">
        Score your goals, one task at a time ⚽
      </p>
    </header>
  );
};

export default Header;
