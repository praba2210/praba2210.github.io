
import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariants = "default" | "secondary" | "outline" | "ghost";

type ButtonProps<C extends React.ElementType> = {
  as?: C;
  variant?: ButtonVariants;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<C>, "as" | "className">;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C> & { ref?: React.Ref<HTMLElement> }
) => React.ReactElement | null;


// TypeScript limitation: ref type is 'any' to support both button and anchor
const ButtonImpl = React.forwardRef(
  <C extends React.ElementType = "button">(
    { as, variant = "default", className, ...props }: ButtonProps<C>,
    ref: any
  ) => {
    const Component = as || "button";
    return (
      <Component
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" && "bg-indigo-500 text-white hover:bg-indigo-600",
          variant === "secondary" && "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
          variant === "outline" && "border border-zinc-700 text-zinc-100 hover:bg-zinc-800",
          variant === "ghost" && "bg-transparent text-zinc-300 hover:bg-zinc-800",
          className
        )}
        {...props}
      />
    );
  }
) as ButtonComponent;
// @ts-expect-error displayName is safe to assign
ButtonImpl.displayName = "Button";
export const Button = ButtonImpl;
