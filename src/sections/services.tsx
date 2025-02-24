import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function OurCompetence() {
  return (
    <div className="w-full h-[800px] bg-gradient-to-t from-indigo-700 to-white flex justify-around">
      <div className="w-[22%] h-[70%] bg-[#3EE8C4] rounded-xl shadow-md pt-5 flex flex-col items-center">
        <Image
          src="/data_analyst.gif"
          width={400}
          height={400}
          alt="data analysis"
        />
        <h1 className="text-5xl font-bold">DATA</h1>
        <h1 className="text-5xl font-bold">ANALYSIS</h1>
        <Separator className="w-[85%] mx-auto bg-black my-2" />
        <p>Get quality insight from data</p>
      </div>
      <div className="w-[22%] h-[85%] bg-[#3EE8C4] pt-8 mt-[4%] rounded-xl shadow-md flex flex-col items-center">
        <Image
          src="/digitMarket.gif"
          width={400}
          height={400}
          alt="data analysis"
          className="mix-blend-multiply"
        />
        <h1 className="text-5xl font-bold">DIGITAL</h1>
        <h1 className="text-5xl font-bold">MARKETING</h1>
        <Separator className="w-[85%] mx-auto bg-black my-2" />
        <p>Get quality insight from data</p>
      </div>
      <div className="w-[22%] h-[70%] bg-[#3EE8C4] rounded-xl shadow-md flex flex-col items-center">
        <Image
          src="/webdev.gif"
          width={400}
          height={400}
          alt="data analysis"
          className="mix-blend-multiply"
        />
        <h1 className="text-5xl font-bold">WEB</h1>
        <h1 className="text-5xl font-bold">DEVELOPMENT</h1>
        <Separator className="w-[85%] mx-auto bg-black my-2" />
        <p>Get quality insight from data</p>
      </div>
      <div className="w-[22%] h-[85%] bg-[#3EE8C4] pt-8 mt-[4%] rounded-xl shadow-md flex flex-col items-center">
        <Image
          src="/glz.gif"
          width={400}
          height={400}
          alt="data analysis"
          className="mix-blend-multiply"
        />
        <h1 className="text-5xl font-bold">BRANDING/</h1>
        <h1 className="text-5xl font-bold">GRAPHICS</h1>
        <Separator className="w-[85%] mx-auto bg-black my-2" />
        <p>Get quality insight from data</p>
      </div>
    </div>
  );
}
