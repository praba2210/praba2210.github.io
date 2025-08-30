
import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";

type Common = {
  variant?: ButtonVariant;
  className?: string;
  children?: React.ReactNode;
};

type AnchorProps = Common & { as: "a" } & React.AnchorHTMLAttributes<HTMLAnchorElement>;
type NativeButtonProps = Common & { as?: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = AnchorProps | NativeButtonProps;

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const { variant = "default", className, children, ...rest } = props as ButtonProps & Record<string, unknown>;
    const classes = cn(
      "inline-flex items-center justify-center font-medium transition rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      variant === "default" && "bg-indigo-500 text-white hover:bg-indigo-600",
      variant === "secondary" && "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
      variant === "outline" && "border border-zinc-700 text-zinc-100 hover:bg-zinc-800",
      variant === "ghost" && "bg-transparent text-zinc-300 hover:bg-zinc-800",
      className
    );

    if ((props as AnchorProps).as === "a") {
      const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }

    const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
