import Image from 'next/image'
import Link from 'next/link'
import { CalendarCheck2 } from 'lucide-react'

export default function UnderConstruction() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover object-center"
      >
        <source src="/construct.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 p-8 text-white h-full flex flex-col justify-center">
        <h1 className="text-[8vw] md:text-[5vw] leading-[0.9] font-bold">
          We’re Crafting a<br />
          Better Experience for You!
        </h1>
        <p className="text-[3vw] md:text-[2vw]">
          Our team is hard at work creating a seamless digital experience.
          <br /> In the meantime, let&apos;s connect and bring your ideas to
          life!
        </p>
        <div className="mt-10 flex items-center gap-x-6 flex-row">
          <Link
            href="/bookings"
            className="rounded-md bg-green-600 flex gap-2 items-center px-4 py-3 text-white text-sm md:text-xl hover:bg-green-700 mb-2 md:mb-0"
          >
            Book an Appointment
            <CalendarCheck2 className="ms-3" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=2347036825350"
            className="flex items-center text-sm/6 font-semibold text-white  rounded-md px-4 py-3"
          >
            Start a Conversation
            <Image
              width={24}
              height={24}
              src="/icons8-whatsapp-24.png"
              alt="whatsapp--v1"
              className="ms-3"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
