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
  
};

export type Tuser={
  name:string,
    email:string
    password:string
}
export const hotelDescriptions: string[] = [
  "Luxury beachfront hotel offering panoramic sea views, rooftop dining, infinity pool, spa treatments, and private balconies.",
  "Modern city hotel with fast Wi-Fi, 24/7 concierge, gym, rooftop lounge, conference rooms, and complimentary breakfast daily.",
  "Eco-resort nestled in the hills with nature trails, organic meals, yoga classes, spa services, and sustainable accommodations.",
  "Family-friendly hotel near amusement parks featuring kid zones, swimming pool, free shuttle service, and spacious family rooms.",
  "Charming countryside inn with cozy fireplaces, home-cooked meals, bicycle rentals, and scenic walking trails.",
  "Trendy urban hotel with rooftop bar, coworking space, curated playlists, and in-room smart technology.",
  "Romantic getaway resort with candlelit dinners, couples massages, private hot tubs, and sunset cruises.",
  "Airport hotel with soundproof rooms, express check-in/out, luggage services, and free airport transfers.",
  "Secluded island resort offering overwater bungalows, snorkeling excursions, fine dining, and cultural shows.",
  "Historic hotel in the heart of the city featuring antique décor, guided tours, and afternoon tea service.",
  "Boutique hotel with designer interiors, artisanal breakfasts, pet-friendly rooms, and exclusive shopping access.",
  "Lakeside lodge with fishing docks, canoe rentals, bonfire nights, and panoramic water views.",
  "Wellness retreat focused on mental and physical health, plant-based cuisine, mindfulness classes, and detox programs.",
  "Ski resort with slopeside cabins, snowboarding lessons, après-ski lounges, and ski-lift access.",
  "Tech-savvy hotel offering voice-controlled rooms, robotic room service, and keyless entry via mobile app.",
  "Beach bungalow resort with hammocks, tiki bars, paddleboarding, beach yoga, and local seafood grills.",
  "Desert oasis resort with camel rides, traditional cuisine, luxurious tents, and stargazing under clear skies.",
  "Business hotel in financial district with meeting pods, fast check-in, airport shuttle, and ergonomic workstations.",
  "Art-themed boutique hotel featuring gallery rooms, local artist exhibits, rooftop events, and creative workshops.",
  "Mountain retreat with ski-in/ski-out access, hot tubs, fireplace suites, gear rentals, and après-ski lounges."
];

import hotel1 from '../assets/find1.jpg'
import hotel2 from '../assets/find2.jpeg'
import hotel3 from '../assets/find3.jpeg'
import hotel4 from '../assets/find4.jpeg'
import hotel5 from '../assets/find5.jpeg'
import hotel6 from '../assets/hotel11.jpg'
import hotel8 from '../assets/hotel12.jpg'
import hotel9 from '../assets/hotel20.jpg'
import hotel10 from '../assets/hotel21.jpg'
import hotel11 from '../assets/hotel24.jpg'
import photo1 from '../assets/photo1.avif'
import photo5 from '../assets/photo5.avif'
import phot2 from '../assets/photo4.avif'
import phot3 from '../assets/photo2.avif'
import phot4 from '../assets/photo3.avif'


export const imageLink=[
  hotel1, hotel2,hotel3,hotel4,hotel5,hotel6,
  hotel8,hotel9,hotel10,hotel1,hotel11,hotel4,hotel10,
  hotel1,hotel5
]

export const imagesLink=[phot2,photo1,phot3,phot4,phot2]