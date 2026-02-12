import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutUsSection() {
  return (
    <div className="w-full flex justify-evenly items-center">
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
          Your Partner in Sales Growth
        </h1>
        <p className="text-lg mt-7 mb-7">
          At Globelinkz, we understand how tough it can be to grow your
          business. With years of experience, we’ve helped companies increase
          their sales and reach their goals with effective marketing.
        </p>
        <Link href="/learn-more">
          <Button variant="acent">Learn more</Button>
        </Link>
      </div>
    </div>
  )
}
