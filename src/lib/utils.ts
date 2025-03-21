import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { GraphQLClient } from 'graphql-request'

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
  sub?: {
    name: string
    href: string
  }[]
}

export const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  // { name: 'Data Analysis', href: '/data-analysis' },
  {
    name: 'Services',
    href: '/services',
    sub: [
      { name: 'Data Analysis', href: '/data-analysis' },
      { name: 'Digital Marketing', href: '#' },
      { name: 'Branding', href: '#' },
      { name: 'Web Design', href: '#' },
      // { name: 'Metric View App ', href: '#' }
    ],
  },
  { name: 'About us', href: '#' },
  { name: 'Blog', href: '/blog' },
]

const endpoint = `${process.env.GRAPHCMS_ENDPOINT}${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`
const headers = {
  Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
}

export const Client = new GraphQLClient(endpoint, {
  headers,
  // requestMiddleware: (request) => {
  //   console.log('Request URL:', request.url)
  //   console.log('Request Headers:', request.headers)
  //   console.log('Request Body:', request.body)
  // return request
  // },
})
