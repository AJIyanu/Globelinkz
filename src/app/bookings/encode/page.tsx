'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'

const encodeBase64Url = (data: string): string => {
  return Buffer.from(data, 'utf-8')
    .toString('base64')
    .replace(/\+/g, '-') // Replace '+' with '-'
    .replace(/\//g, '_') // Replace '/' with '_'
    .replace(/=+$/, '') // Remove '=' padding
}

export default function EncodePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [encodedLink, setEncodedLink] = useState<string | null>(null)

  const handleGenerateLink = () => {
    if (!name || !email) {
      alert('Please enter both name and email.')
      return
    }

    const bookingUrl = `https://www.globelinkz.com/bookings?utm_source=personalmail&utm_medium=emailcta&utm_id=emailleads&name=${encodeBase64Url(name)}&email=${encodeBase64Url(email)}`
    setEncodedLink(bookingUrl)
  }

  const copyToClipboard = () => {
    if (encodedLink) {
      navigator.clipboard.writeText(encodedLink)
    }
  }

  return (
    <div className="w-[25rem] lg:w-[35rem] mx-auto p-6 space-y-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">Generate Booking Link</h2>

      <Input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        onClick={handleGenerateLink}
        className="w-full bg-blue-500 text-white hover:bg-blue-600"
      >
        Generate Link
      </Button>

      {encodedLink && (
        <div className="mt-4 p-2 border rounded-lg bg-gray-100 flex justify-between items-center">
          <span className="text-sm truncate">{encodedLink}</span>
          <Button variant="ghost" size="icon" onClick={copyToClipboard}>
            <Copy className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  )
}
