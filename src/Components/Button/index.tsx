import { cn } from "@bem-react/classname";

export interface IButtonProps {
  tag?: string;
  onClick?: any;
  className?: string;
}

export const cnButton = cn("Button");
