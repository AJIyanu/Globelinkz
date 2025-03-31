import Image from 'next/image'
import Link from 'next/link'

interface ServiceOverviewProps {
  direction?: 'normal' | 'reversed'
  name: string
  desc: string
  img: string
  lnk: string
}

;<style>{`
  .trapezium {
    clip-path: polygon(
      20% 0,
      80% 0,
      100% 100%,
      0% 100%
    ); /* Example: Upward facing */
  }
`}</style>

export default function ServiceOverview({
  direction = 'normal',
  name,
  desc,
  img,
  lnk,
}: ServiceOverviewProps) {
  return (
    <div
      className={`flex flex-col ${direction === 'reversed' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center lg:w-[90%] xl:w-[80%] overflow-hidden lg:h-[500px] my-2`}
    >
      <div className="relative bg-black w-full h-full">
        {/* <div
          className={`absolute ${direction === 'normal' ? 'border-trapezium-rev' : 'border-trapezium'}`}
          > */}
        <Image
          src={img}
          alt={name}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
        {/* </div> */}
      </div>
      <Link
        href={lnk}
        className="bg-blue-100 flex flex-col items-start w-full h-full px-12"
      >
        <div className="text-[4rem] font-bold">{name}</div>
        <div className="text-[1.2rem] text-left">{desc}</div>
      </Link>
    </div>
  )
}
