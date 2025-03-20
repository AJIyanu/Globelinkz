'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'

import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { navigation } from '@/lib/utils'

export default function Header() {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">GLOBELINKZ</span>
              <Image
                alt="globelinkzlogo"
                src="/globelinkz-full.png"
                width={50}
                height={50}
                className="h-12 bg-white/80 backdrop-blur-md rounded-lg p-2 w-auto"
              />
            </Link>
          </div>

          <div className="hidden lg:flex me-20 rounded-full px-5 shadow-lg bg-white/10 backdrop-blur-md border">
            <Menubar className="border-none bg-transparent">
              {navigation.map((item) => (
                <MenubarMenu key={item.name}>
                  {/* If item has submenu, create a dropdown trigger */}
                  {item.sub && item.sub.length > 0 ? (
                    <>
                      <MenubarTrigger className="text-sm font-semibold text-gray-900 bg-transparent hover:bg-transparent focus:bg-transparent">
                        {item.name}
                      </MenubarTrigger>
                      <MenubarContent className="bg-white/30 backdrop-blur-md">
                        {item.sub.map((subItem) => (
                          <MenubarItem key={subItem.name} asChild>
                            <Link
                              href={subItem.href}
                              className="text-sm font-medium cursor-pointer"
                            >
                              {subItem.name}
                            </Link>
                          </MenubarItem>
                        ))}
                      </MenubarContent>
                    </>
                  ) : (
                    // If no submenu, just render a link styled as a MenubarTrigger
                    <MenubarTrigger asChild>
                      <Link
                        href={item.href}
                        className="text-sm font-semibold text-indigo-900 bg-transparent focus:bg-transparent"
                      >
                        {item.name}
                      </Link>
                    </MenubarTrigger>
                  )}
                </MenubarMenu>
              ))}
            </Menubar>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="lg:hidden" color="white" />
            </SheetTrigger>
            <SheetContent className="w-[70%] bg-green-100">
              <div className="flex items-center justify-between">
                <Link href="#" className="-m-1.5 p-1.5">
                  <Image
                    alt="logo"
                    src="/globelinkz-full.png"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-green-500"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </div>
  )
}
