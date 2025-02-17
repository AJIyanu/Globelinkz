"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Services", href: "#" },
  { name: "About us", href: "#" },
];

export default function Header() {
  return (
    <div className="border">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="globelinkzlogo"
                src="/globelinkz-full.png"
                width={50}
                height={50}
                className="h-12 bg-white/80 backdrop-blur-md rounded-lg p-2 w-auto"
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 me-20 border rounded-full px-8 shadow-md bg-white/30 backdrop-blur-md p-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="md:hidden" color="white" />
            </SheetTrigger>
            <SheetContent className="w-[150px] bg-green-100">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <Image
                    alt="logo"
                    src="/globelinkz-full.png"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-green-500"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </div>
  );
}
