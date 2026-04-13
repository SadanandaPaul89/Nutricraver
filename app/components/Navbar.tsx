"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavbarProps = {
  cartCount?: number;
};

const NAV_ITEMS = [
  { href: "/", label: "Cuisine" },
  { href: "/menu", label: "Artisans" },
  { href: "/orders", label: "Order History" },
  { href: "/profile", label: "The Journal" },
];

export default function Navbar({ cartCount = 0 }: NavbarProps) {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#f9f9f7] shadow-sm shadow-stone-200/50">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 md:px-8 py-6">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-serif italic text-primary">
            NutriCraver
          </Link>
          <nav className="hidden md:flex gap-8 items-center">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-sans uppercase text-xs tracking-widest transition-colors duration-300 ${
                    active
                      ? "text-primary border-b-2 border-secondary pb-1"
                      : "text-stone-500 hover:text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative flex items-center gap-2 text-stone-500 hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-secondary text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setIsLoggedIn((current) => !current)}
            className="flex items-center gap-2 text-stone-500 hover:text-primary transition-colors cursor-pointer"
            title={isLoggedIn ? "Logout" : "Login"}
          >
            <span className="material-symbols-outlined">
              {isLoggedIn ? "account_circle" : "login"}
            </span>
          </button>
        </div>
      </div>
      <div className="bg-[#f4f4f2] h-px w-full"></div>
    </header>
  );
}
