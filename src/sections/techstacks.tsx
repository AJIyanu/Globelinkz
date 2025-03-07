import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const techStackArray = [
  {
    name: 'SPSS',
    imgSrc: '/icons/spss.png',
  },
  {
    name: 'STATA',
    imgSrc: '/icons/stata.png',
  },
  {
    name: 'SQL',
    imgSrc: '/icons/sql.png',
  },
  {
    name: 'NVIVO',
    imgSrc: '/icons/nvivo.png',
  },
  {
    name: 'ATLAS',
    imgSrc: '/icons/ATLAS.ti.png',
  },
  {
    name: 'MAXQDA',
    imgSrc: '/icons/maxqda.png',
  },
  {
    name: 'R',
    imgSrc: '/icons/r.png',
  },
]

export default function TechStack() {
  return (
    <div className="w-[80%] flex items-center my-10 text-blue-900">
      <div className="w-[40%]">
        <h2 className="font-[rajdhani] text-5xl font-bold">OUR</h2>
        <h2 className="font-[rajdhani] text-5xl font-bold">TECH</h2>
        <h2 className="font-[rajdhani] text-5xl font-bold">STACK</h2>
        <Separator />
        <p className="font-[rajdhani] text-2xl text-left">
          <span className="italic font-semibold">Measure twice, cut once </span>
          <br />
          That&apos;s our guiding principle at Globlinkz. We believe that
          precision starts with having the right tools, and our advanced tech
          stack is built to unlock deep, actionable insights from your
          data.{' '}
        </p>
      </div>
      <div className="ms-[50px] grid grid-cols-4 gap-9 w-full border-l border-gray-500">
        {techStackArray.map((stack, idx) => (
          <div className="flex- flex-col items-center" key={idx}>
            <Image
              src={stack.imgSrc}
              alt={stack.name}
              width={150}
              height={150}
              className="rounded-lg shadaow-lg border-gray-700 border p-4 mx-auto"
            />
            <p className="text-center text-3xl mt-6 font-semibold mb-auto">
              {stack.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
