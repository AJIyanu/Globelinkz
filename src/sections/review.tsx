import { Separator } from "@radix-ui/react-separator";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import ReviewCarousel from "@/components/ui/ReviewCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "start", loop: true, duration: 50 };
const REVOPTIONS: EmblaOptionsType = {
  align: "end",
  loop: true,
  duration: 50,
  axis: "y",
};

const staffData = [
  {
    name: "Elijah",
    role: "Quantitative Data Analyst",
    quote:
      "Your website is the gateway to your business, and I'm here to make it unforgettable. I see myself as the technical artisan, turning your vision into seamless code and interactive design that captivates your audience",
    imageUrl: "Elijah.jpeg",
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

const reviewData = [
  {
    name: "Elon Musk",
    rating: 4,
    role: "CEO of SpaceX",
    msg: "I have worked with Peace and Funke on several projects, and I must say, their technical expertise and dedication are truly impressive.",

    reviewerImg:
      "https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*",
    medium: "Fiverr",
    date: "28th February, 2023",
    mediumImg: "https://img.icons8.com/ios-filled/50/fiverr--v2.png",
  },
  {
    name: "Mark Zuckerberg",
    rating: 5,
    role: "CEO of Meta",
    msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    reviewerImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    medium: "Upwork",
    date: "15th March, 2023",
    mediumImg: "https://img.icons8.com/ios-filled/50/upwork.png",
  },
  {
    name: "Aliko Dangote",
    rating: 4,
    role: "CEO of Dangote Group",
    msg: "I have Worked with Globelinkz for 2 years and I can say that they are the best in the industry. They are very professional and always deliver on time. I would recommend them to anyone looking for a web development company.",
    reviewerImg:
      "https://imageio.forbes.com/specials-images/imageserve/5c33a1554bbe6f7020fb2fd2/0x0.jpg?format=jpg&crop=1909,1909,x865,y206,safe&height=416&width=416&fit=bounds",
    medium: "Upwork",
    date: "25th March, 2023",
    mediumImg: "https://img.icons8.com/ios-filled/50/upwork.png",
  },
];
export default function Reviews() {
  return (
    <div className="w-[80%] flex flex-col-reverse md:flex-row my-12">
      <div className="md:w-[49%] pe-3">
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
      <div className="md:w-[49%] pe-3 ms-2">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700 md:text-right">
          What our clients says about us!
        </h1>
        <Separator className="h-[1px] my-4 bg-gray-800 md:w-[80%] md:ms-auto" />
        <ReviewCarousel slides={reviewData} options={REVOPTIONS} />
      </div>
    </div>
  );
}
