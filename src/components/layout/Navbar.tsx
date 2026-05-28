"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#pain", label: "The Problem" },
  { href: "#proof", label: "Results" },
  { href: "#services", label: "Services" },
  { href: "#how", label: "How It Works" },
  { href: "#reviews", label: "Clients" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-500 flex items-center justify-between px-[7%] transition-all duration-300 ${scrolled ? "border-b border-[rgba(125,193,42,.1)] bg-[rgba(4,8,16,.95)] py-3.25 backdrop-blur-[18px]" : "py-5"}`}
    >
      <Link
        href="#hero"
        className="font-heading text-2xl tracking-[2px] text-white flex items-center gap-3"
      >
        <Image
          src="/images/globelinkz-full.png"
          alt="GlobeLinkz Logo"
          width={25}
          height={25}
        />
        <div>
          Globe<span className="text-(--g)">Linkz</span>
        </div>
      </Link>
      <ul className="hidden list-none items-center gap-8 md:flex">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium text-(--gr) transition hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#book"
            className="rounded-md bg-(--g) px-5.5 py-2.5 text-sm font-bold text-(--dk) transition hover:bg-(--gb)"
          >
            Book Free Session →
          </Link>
        </li>
      </ul>
    </nav>
  );
}
