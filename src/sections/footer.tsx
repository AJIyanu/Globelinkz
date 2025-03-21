import { navigation } from '@/lib/utils'
import {
  Facebook,
  Instagram,
  // Twitter,
  // Youtube,
  LinkedinIcon,
} from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-gray-800 gap-10 p-10 text-white w-full flex flex-col items-center justify-center lg:bg-transparent">
      <div className="flex gap-7">
        {navigation.map((item, idx) => (
          <Link href={item.href} key={idx} className="text-white">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-7">
        <Link
          href="https://www.facebook.com/Globelinkz"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </Link>
        <Link
          href="https://www.instagram.com/globelinkz/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </Link>
        {/* <a href="#">
          <Twitter />
        </a>
        <a href="#">
          <Youtube />
        </a> */}
        <Link
          href="https://ng.linkedin.com/company/globelinkz"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </Link>
      </div>
      <div>
        <p>
          © 2025 Globelinkz{' '}
          <span className="hidden sm:inline">Full Service Digital Agency</span>
        </p>
      </div>
    </div>
  )
}
