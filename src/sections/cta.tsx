import { CalendarCheck2 } from 'lucide-react'
import Image from 'next/image'

export default function CallToAction() {
  return (
    <div className="md:w-full flex flex-col bg-indigo-200 p-5 md:p-9 items-center lg:bg-transparent lg:text-white">
      <p className="text-center mx-2 text-2xl italic md:hidden">
        Your growth is our priority. Reach out today and let’s make digital
        excellence a reality.
      </p>
      <h2 className="text-center text-5xl font-bold hidden md:block">
        Your Growth is Our Priority
      </h2>
      <p className="text-center mx-10 text-lg mt-2 italic hidden md:block">
        In today’s fast-paced digital landscape, every moment counts—delay could
        mean competitors capitalizing on opportunities that should be yours. At
        Globlinkz, we’re forging a strategic partnership that transforms
        challenges into digital excellence, because your growth is our priority.
        Reach out today to secure your competitive edge and propel your business
        to new heights.
      </p>
      <div className="mt-10 flex items-center gap-x-12 flex-col md:flex-row">
        <a
          href="/bookings"
          className="rounded-md bg-green-600 flex gap-2 items-center px-4 py-3 text-white text-sm md:text-xl hover:bg-green-700 mb-2 md:mb-0"
        >
          Book an Appointment
          <CalendarCheck2 className="ms-3" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=2347036825350"
          className="flex items-center text-sm/6 font-semibold text-green-700 border-2 border-green-700 rounded-md px-4 py-3"
        >
          Start a Conversation
          <Image
            width={24}
            height={24}
            src="/icons8-whatsapp-24.png"
            alt="whatsapp--v1"
            className="ms-3"
          />
        </a>
      </div>
    </div>
  )
}
