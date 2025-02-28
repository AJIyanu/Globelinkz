import { createClient } from 'contentful'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function splitStringRegx(inputString: string): string[] {
  const chars: string[] = []
  const regx = /[\s\S]/gu

  let match

  while ((match = regx.exec(inputString)) !== null) {
    chars.push(match[0])
  }

  return chars
}

interface NavigationItem {
  name: string
  href: string
}

export const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Portfolio', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'About us', href: '#' },
]

export async function getBlogPosts() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  const response = await client.getEntries({ content_type: 'resources' })
  return response.items
}
