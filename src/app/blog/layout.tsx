import Header from '@/components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  verification: {
    google: 'Ik-mtRBYs0hKr24g4O_0YQ95I2j35rxO0ND01L23-G4',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center">
      {/* Header Section */}
      <div className="bg-indigo-300 w-full h-[80px] lg:h-[100px]">
        <Header />
      </div>

      {/* Page Content */}
      <div className="w-full lg:w-[80%] border-l border-r border-gray-300 bg-indigo-100">
        {children}
      </div>
    </div>
  )
}
