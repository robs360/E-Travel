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

  export type CalendarModeProps= {
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  }

  export type TSearch = {
    from: string,
    to: string,
    date: Date
}