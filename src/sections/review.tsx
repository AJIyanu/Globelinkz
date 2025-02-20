import { Separator } from "@radix-ui/react-separator";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "start", loop: true, duration: 50 };

const staffData = [
  {
    name: "Elijah",
    role: "Quantitative Data Analyst",
    quote:
      "Your website is the gateway to your business, and I'm here to make it unforgettable. I see myself as the technical artisan, turning your vision into seamless code and interactive design that captivates your audience",
    imageUrl: "ajiyan.jpg",
  },
  {
    name: "Simon Peace",
    role: "Digital Marketer/Branding",
    quote:
      "Your website is the gateway to your business, and I'm here to make it unforgettable. I see myself as the technical artisan, turning your vision into seamless code and interactive design that captivates your audience",
    imageUrl: "peace.jpg",
  },
  {
    name: "Funke",
    role: "Data Analyst",
    quote:
      "Your website is the gateway to your business, and I'm here to make it unforgettable. I see myself as the technical artisan, turning your vision into seamless code and interactive design that captivates your audience",
    imageUrl: "ajiyanu.jpg",
  },
  {
    name: "Temidayo",
    role: "Administrative Staff",
    quote:
      "Your website is the gateway to your business, and I'm here to make it unforgettable. I see myself as the technical artisan, turning your vision into seamless code and interactive design that captivates your audience",
    imageUrl: "ajiyanu.jpg",
  },
  {
    name: "Joseph Aderemi",
    role: "Web Developer",
    quote:
      "Your website is the gateway to your business, and I'm here to make it unforgettable. I see myself as the technical artisan, turning your vision into seamless code and interactive design that captivates your audience",
    imageUrl: "ajiyanu.jpg",
  },
];

export default function Reviews() {
  return (
    <div className="w-[80%] flex flex-col-reverse md:flex-row">
      <div className="md:w-[50%] pe-3">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
          What we think about you!
        </h1>
        <Separator className="h-[1px] my-4 bg-gray-800 md:w-[65%]" />
        <EmblaCarousel slides={staffData} options={OPTIONS} />
      </div>
      <Separator
        orientation="vertical"
        className="w-[1px] bg-gray-500 rounded my-4"
        decorative
      />
      <div>What People say about us</div>
    </div>
  );
}
