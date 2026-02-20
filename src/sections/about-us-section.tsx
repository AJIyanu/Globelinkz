import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutUsSection() {
  return (
    <div className="w-full h-full flex justify-evenly items-center h-[70vh] flex-col md:flex-row">
      <div>
        <Image
          width="600"
          height="600"
          src="/about-us-icon.png"
          alt="We grow your business"
        />
      </div>
      <div className="flex flex-col justify-around max-w-md p-10">
        <h1 className="text-5xl font-bold text-brand-green">
          Let’s Solve the Frustration of Low Sales; No Heavy Lifting from You
        </h1>
        <p className="text-lg mt-7 mb-1">
          At Globelinkz, we make growing your sales simple and effective so you can focus on running your business
        </p>
        {/* <p className="text-lg mt-1 mb-7">
          <ul className="list-disc list-inside">
            <li>
                Is your business facing any of these challenges?
            </li>
            <li>
                Struggling with financial strain?
            </li>
            <li>
                Growth feels stunted and stuck?
            </li>
            <li>
                Losing confidence in your strategies?
            </li>
            <li>
                Dealing with financial insecurity every month?
            </li>
            <li>
                Seeing your reputation take a hit?
            </li>
            <li>
                Missing out on financial opportunities?
            </li>
            <li>
                Feeling the pressure of increased competition?
            </li>
            <li>
                Worrying about employee uncertainty?
            </li>
            <li>
                Sitting on unsold inventory?
            </li>
            <li>
              Feeling drained by the emotional toll of no sales?
            </li>
          </ul>
          We understand, and we're here to help free you from all of that.
        </p> */}
        <Link href="/learn-more">
          <Button variant="acent">Learn more</Button>
        </Link>
      </div>
    </div>
  )
}
