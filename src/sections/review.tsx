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
    imageUrl: "peace.jpg",
  },
  {
    name: "Simon Peace",
    role: "Digital Marketer/Branding",
    quote:
      "Marketing isn’t just about ads—it’s about connection. I blend data-driven insights with creative execution to craft campaigns that don’t just capture attention but drive real results. Every campaign is a masterpiece in the making—you bring the vision, and I bring the strategy, precision, and expertise to turn it into measurable success.CD",
    imageUrl: "peace.jpg",
  },
  {
    name: "Funke",
    role: "Data Analyst",
    quote:
      "Every dataset tells a story—I help you uncover its meaning. With precision and expertise, I turn complex information into easy-to-understand visuals and reports, empowering you to make data-driven decisions with confidence. ",
    imageUrl: "funke.png",
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
