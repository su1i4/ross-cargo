"use client";

import { useState } from "react";
import { Logo } from "@/assets/icons/Logo";
import { Button } from "./ui/button";
import { links, linksName } from "@/lib/links";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Иконки меню
import { scrollToId } from "@/lib/utils";

export const Header = ({ textColor = "text-[#030115]" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#eee]">
      <div className="container flex justify-between items-center py-4 px-4 md:px-8">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden lg:flex border border-[#D4D4D4] rounded-full py-2 px-4 gap-[25px] items-center">
          {Object.entries(links).map(([key, value]) => (
            <Link
              href={value}
              key={key}
              className={`${textColor} text-[18px] hover:text-[#1342DD] transition`}
            >
              {linksName[key as keyof typeof linksName]}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/?link=leave-a-request">
            <Button className="w-full bg-[#1342DD] hover:bg-[#1342DD90] active:scale-95 transition-all duration-300 cursor-pointer">
              Оставить заявку
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="block lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <nav className="flex flex-col gap-4 border border-[#D4D4D4] rounded-xl p-4">
            {Object.entries(links).map(([key, value]) => (
              <Link
                href={value}
                key={key}
                className={`${textColor} text-[16px] hover:text-[#1342DD] transition`}
                onClick={() => setIsMenuOpen(false)} // Закрываем меню после клика
              >
                {linksName[key as keyof typeof linksName]}
              </Link>
            ))}
          </nav>

          <div className="mt-4">
            <Link href="/?link=leave-a-reauest">
              <Button
                onClick={() => scrollToId("leave-a-request")}
                className="w-full bg-[#1342DD] hover:bg-[#1342DD80] active:scale-95 transition-all duration-300 cursor"
              >
                Оставить заявку
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
