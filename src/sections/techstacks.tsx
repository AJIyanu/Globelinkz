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
  {
    name: 'Microsoft PowerBi',
    imgSrc: '/icons/powerbi.png',
  },
]

export default function TechStack() {
  return (
    <div className="lg:w-[90%] xl:w-[80%] flex flex-col justify-center lg:flex-row items-center my-10 text-blue-900 px-5">
      <div className="text-center lg: text-left lg:w-[40%] mb-9">
        <div className="font-[rajdhani] text-3xl lg:text-5xl font-bold flex justify-center lg:flex-col lg:items-start">
          <h2 className="me-2">OUR</h2>
          <h2 className="me-2">TECH</h2>
          <h2 className="me-2">STACK</h2>
        </div>
        <Separator />
        <p className="font-[rajdhani] text-2xl lg:text-left">
          <span className="italic font-semibold">Measure twice, cut once </span>
          <br />
          That&apos;s our guiding principle at Globlinkz. We believe that
          precision starts with having the right tools, and our advanced tech
          stack is built to unlock deep, actionable insights from your
          data.{' '}
        </p>
      </div>
      <div className="mx-auto lg:ms-[20px] lg:p-[50px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 w-full lg:border-l border-gray-500">
        {techStackArray.map((stack, idx) => (
          <div
            className="flex flex-col items-center inset-shadow-sm inset-shadow-indigo-500"
            key={idx}
          >
            <Image
              src={stack.imgSrc}
              alt={stack.name}
              width={150}
              height={150}
              className="rounded-lg shadaow-lg border-gray-700 border p-4 mx-auto"
            />
            <p className="text-center text-xl lg:text-3xl mt-6 font-semibold mb-auto">
              {stack.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
