const BackgroundEffects = () => {
  return (
    <>
      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float"
          style={{ animationDuration: "8s" }}
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] animate-float"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse-glow"
        />
      </div>

      {/* Stadium light beams */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 left-1/4 w-1 h-[600px] bg-gradient-to-b from-primary/30 to-transparent rotate-12 blur-sm"
        />
        <div 
          className="absolute -top-40 right-1/4 w-1 h-[600px] bg-gradient-to-b from-primary/30 to-transparent -rotate-12 blur-sm"
        />
      </div>

      {/* Field lines */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
    </>
  );
};

export default BackgroundEffects;
