import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority";
import clsx from 'clsx';
import '../app/globals.css';

export function cn(...inputs) {
  return clsx(inputs);
}

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        cta: [
          "bg-[hsla(155,89%,51%,1)] rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full hover:shadow-[0px_4px_30px] hover:shadow-[rgb(247_176_253_/_50%)] transition-shadow duration-300",
          "[&_.highlight]:ml-2",
        ],    
        cta1: [
          "bg-white rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-full",
          "[&_.highlight]:ml-2",
        ],      
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // default: "h-6 md:h-9 px-3 md:px-4 py-1 md:py-2",
        default: "h-6 lg:h-9 px-3 lg:px-4 py-1 lg:py-2",
        // default1: "h-9 px-4 py-2",
        default1: "w-[188px] h-[43px] md:h-[37px] md:w-[220px] lg:w-[265px] lg:h-[50px] xl:h-[72px] xl:w-[360px]",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
