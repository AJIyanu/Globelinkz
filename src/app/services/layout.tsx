import Header from '@/components/Header'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Header Section */}
      {/* <div className="bg-indigo-300 w-full h-[80px] lg:h-[100px]"> */}
      <Header />
      {/* </div> */}

      {/* Page Content */}
      <div className="w-full border-l border-r border-gray-300 min-h-screen flex flex-col items-center justify-start bg-cover">
        {children}
      </div>
    </div>
  )
}
