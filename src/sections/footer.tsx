import { navigation } from '@/lib/utils'
import {
  Facebook,
  Instagram,
  // Twitter,
  // Youtube,
  LinkedinIcon,
} from 'lucide-react'

export default function Footer() {
  return (
    <div className="bg-gray-800 gap-10 p-10 text-white w-full flex flex-col items-center justify-center lg:bg-transparent">
      <div className="grid grid-cols-2 md:flex gap-7">
        {navigation.map((item, idx) => (
          <a href={item.href} key={idx} className="text-white">
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex gap-7">
        <a
          href="https://www.facebook.com/Globelinkz"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com/globelinkz/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        {/* <a href="#">
          <Twitter />
        </a>
        <a href="#">
          <Youtube />
        </a> */}
        <a
          href="https://ng.linkedin.com/company/globelinkz"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </a>
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
