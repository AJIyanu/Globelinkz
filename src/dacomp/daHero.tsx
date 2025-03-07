import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TextWipeAnimation from '@/components/textwipe'
import { Separator } from '@/components/ui/separator'
import Header from '@/components/Header'
// import { Button } from '@/components/ui/button'

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full">
      <Header />
      <Image
        // src=""
        src="/resources/globehand.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-[#EDF7F4] opacity-95"></div>
      <div className="absolute inset-0 flex flex justify-center items-center text-blue-900">
        <div className="flex mx-[10%]">
          <Separator
            orientation="vertical"
            className="hidden lg:block h-[300px] mt-4 bg-[#FF8D00] me-3 w-[8px]"
          />
          <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <h1 className="text-2xl md:text-4xl font-bold font-[rajdhani]">
              Your Data Holds the Answer
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold font-[rajdhani]">
              We Convey <br /> Them to LIGHT
            </h1>
            <p className="text-md md:text-xl w-[70%] lg:w-[50%] mt-3">
              Beyond numbers, your business speaks in stories, feedback, and
              trends. We analyze qualitative data to uncover insights that drive
              smarter decisions.
            </p>
            {/* <Button asChild> */}
            <Link
              href="#"
              className="flex items-center mt-4 text-2xl bg-green-700 p-5 rounded-md hover:bg-green-900 font-semibold text-[#EDF7F4] py-2"
            >
              Let&apos;s Chat
              <Image
                src="/icons8-whatsapp.gif"
                alt="whatsapp"
                height={30}
                width={30}
                className="ms-3 mix-blend-multiply"
              />
            </Link>
            {/* </Button> */}
          </div>
          <div className="hidden bg-[#EDF7F4] shadow-lg rounded-lg lg:flex flex-col justify-evenly overflow-hidden w-[60%] px-9">
            <Image
              src="/dataanalysis.gif"
              alt="data analysis"
              height={500}
              width={500}
              className="mx-auto"
            />
            <TextWipeAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
