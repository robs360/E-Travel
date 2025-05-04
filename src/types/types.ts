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
export type TTicket={
  name:string,
  email:string,
  phone:number,
  busName:string
  busNumber:string,
  time:string
  from:string,
  to:string
  BDT:number
  ticket:string[],
  date:Date
}
