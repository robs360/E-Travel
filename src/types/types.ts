import { LucideIcon } from "lucide-react";

export type Tsession={
    name:string,
    email:string,
    image:string
}
export type NavLinkItem = {
    href: string;
    label: string;
    icon: LucideIcon;
    delay:number
  };