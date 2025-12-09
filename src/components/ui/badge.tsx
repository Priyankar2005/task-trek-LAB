import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-montserrat",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-sm hover:shadow-[0_0_15px_hsl(145_70%_45%/0.5)]",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground shadow-sm hover:shadow-[0_0_15px_hsl(45_95%_55%/0.5)]",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-sm",
        outline: 
          "border-border text-foreground",
        html:
          "border-transparent bg-orange-500/20 text-orange-400 shadow-sm hover:shadow-[0_0_15px_hsl(25_95%_55%/0.5)]",
        css:
          "border-transparent bg-sky-500/20 text-sky-400 shadow-sm hover:shadow-[0_0_15px_hsl(195_95%_55%/0.5)]",
        javascript:
          "border-transparent bg-yellow-500/20 text-yellow-400 shadow-sm hover:shadow-[0_0_15px_hsl(50_95%_55%/0.5)]",
        react:
          "border-transparent bg-cyan-500/20 text-cyan-400 shadow-sm hover:shadow-[0_0_15px_hsl(185_95%_55%/0.5)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
