import { LucideIcon } from "lucide-react";

export type Tsession = {
  name: string,
  email: string,
  image: string
}
export type NavLinkItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  delay: number
};

export type CalendarModeProps = {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export type TSearch = {
  from: string,
  to: string,
  date: Date
}
export type TTicket = {
  name: string,
  email: string,
  phone: number,
  busName: string
  busNumber: string,
  time: string
  from: string,
  to: string
  BDT: number
  ticket: string[],
  date: Date
}

export type ShowHotelDataProps = {
  loading: boolean;
  info:Array<any>[]
};

export const hotelDescriptions: string[] = [
  "Luxury beachfront hotel offering panoramic sea views, rooftop dining, infinity pool, spa treatments, and private balconies.",
  "Modern city hotel with fast Wi-Fi, 24/7 concierge, gym, rooftop lounge, conference rooms, and complimentary breakfast daily.",
  "Eco-resort nestled in the hills with nature trails, organic meals, yoga classes, spa services, and sustainable accommodations.",
  "Family-friendly hotel near amusement parks featuring kid zones, swimming pool, free shuttle service, and spacious family rooms."
];