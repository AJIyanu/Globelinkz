import Header from '@/components/Header'
import { CalendarCheck2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative w-full bg-green-200 bg-[url(/hero-bg2.jpg)] bg-cover">
      {/* <div className="absolute inset-0 bg-green-200 opacity-50"></div> */}
      <div className="relative z-10">
        <Header />
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="max-w-2xl py-32 md:ms-20 sm:py-48 lg:py-56">
            <div className="text-center md:text-left">
              <h1 className="text-4xl text-white font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                Digital Transformation Starts Here
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-green-300 sm:text-xl/8">
                Leading the way in digital solutions, we help you stay ahead of
                the curve and achieve sustainable growth.
              </p>
              <div className="mt-10 flex items-center gap-x-6 flex-col md:flex-row">
                <Link
                  href="/bookings"
                  className="rounded-md bg-green-600 flex gap-2 items-center px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Book an Appointment
                  <CalendarCheck2 className="ms-3" />
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=2347036825350"
                  target="_blank"
                  className="flex items-center text-sm/6 font-semibold text-green-100 mt-5 lg:mt-0"
                  rel="noreferrer"
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
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}
