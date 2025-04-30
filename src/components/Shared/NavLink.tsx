"use client";

import { NavLinkItem } from "@/types/types";
import { Bus, Home, Hotel, Package } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { href: "/", label: "Home", icon: Home, delay: 0.6 },
  { href: "/Bus", label: "Bus", icon: Bus, delay: 1 },
  { href: "/hotel-book", label: "Book Hotel", icon: Hotel, delay: 1.4 },
  { href: "/packages", label: "Packages", icon: Package, delay: 1.8 },
];

const NavLink = () => {
  const path = usePathname();

  return (
    <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
      {navLinks.map((item: NavLinkItem, index: number) => (
        <Link
          key={index}
          href={item.href}
          className={`text-sm font-bold flex gap-x-1.5 items-center
            ${
              path === item.href
                ? "text-[#0dac53] border-2 border-green-400 px-3 py-1 rounded-[8px]"
                : "text-black"
            }`}
        >
          <item.icon className="size-5" />
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLink;
