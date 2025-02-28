'use client'

import { Separator } from '@radix-ui/react-separator'
import EmblaCarousel from '@/components/ui/EmblaCarousel'
import Autoplay from 'embla-carousel-autoplay'
import { BadgeCheck, Star } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useRef } from 'react'
// import ReviewCarousel from "@/components/ui/ReviewCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from '@/components/ui/carousel'

const OPTIONS: EmblaOptionsType = { align: 'start', loop: true, duration: 50 }
const REVOPTIONS: EmblaOptionsType = {
  align: 'end',
  loop: true,
  duration: 50,
}

const staffData = [
  {
    name: 'Elijah',
    role: 'Quantitative Data Analyst',
    quote:
      "Your website is the gateway to your business, and I'm here to make it unforgettable. I see myself as the technical artisan, turning your vision into seamless code and interactive design that captivates your audience",
    imageUrl: 'Elijah.jpeg',
  },
  {
    name: 'Simon Peace',
    role: 'Digital Marketer/Branding',
    quote:
      'Marketing isn’t just about ads—it’s about connection. I blend data-driven insights with creative execution to craft campaigns that don’t just capture attention but drive real results. Every campaign is a masterpiece in the making—you bring the vision, and I bring the strategy, precision, and expertise to turn it into measurable success.CD',
    imageUrl: 'peace.jpg',
  },
  {
    name: 'Funke',
    role: 'Data Analyst',
    quote:
      'Every dataset tells a story—I help you uncover its meaning. With precision and expertise, I turn complex information into easy-to-understand visuals and reports, empowering you to make data-driven decisions with confidence. ',
    imageUrl: 'funke.png',
  },
  {
    name: 'Temidayo',
    role: 'Administrative Staff',
    quote:
      "Your website is the gateway to your business, and I'm here to make it unforgettable. I see myself as the technical artisan, turning your vision into seamless code and interactive design that captivates your audience",
    imageUrl: 'ajiyanu.jpg',
  },
  {
    name: 'Joseph Aderemi',
    role: 'Web Developer',
    quote:
      "Your website is the gateway to your business, and I'm here to make it unforgettable. I see myself as the technical artisan, turning your vision into seamless code and interactive design that captivates your audience",
    imageUrl: 'ajiyanu.jpg',
  },
]

const reviewData = [
  {
    name: 'Elon Musk',
    rating: 4,
    role: 'CEO of SpaceX',
    msg: 'I have worked with Peace and Funke on several projects, and I must say, their technical expertise and dedication are truly impressive.',

    reviewerImg:
      'https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*',
    medium: 'Fiverr',
    date: '28th February, 2023',
    mediumImg: 'https://img.icons8.com/ios-filled/50/fiverr--v2.png',
  },
  {
    name: 'Mark Zuckerberg',
    rating: 5,
    role: 'CEO of Meta',
    msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    reviewerImg:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
    medium: 'Upwork',
    date: '15th March, 2023',
    mediumImg: 'https://img.icons8.com/ios-filled/50/upwork.png',
  },
  {
    name: 'Aliko Dangote',
    rating: 4,
    role: 'CEO of Dangote Group',
    msg: 'I have Worked with Globelinkz for 2 years and I can say that they are the best in the industry. They are very professional and always deliver on time. I would recommend them to anyone looking for a web development company.',
    reviewerImg:
      'https://imageio.forbes.com/specials-images/imageserve/5c33a1554bbe6f7020fb2fd2/0x0.jpg?format=jpg&crop=1909,1909,x865,y206,safe&height=416&width=416&fit=bounds',
    medium: 'Upwork',
    date: '25th March, 2023',
    mediumImg: 'https://img.icons8.com/ios-filled/50/upwork.png',
  },
]
export default function Reviews() {
  const plugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: true }))
  return (
    <div className="w-[80%] flex flex-col-reverse xl:flex-row my-12">
      <div className="xl:w-[49%] pe-3">
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
      <div className="xl:w-[49%] h-auto pe-3 ms-2">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700 md:text-right">
          What our clients says about us!
        </h1>
        <Separator className="h-[1px] my-4 bg-gray-800 md:w-[80%] md:ms-auto" />
        <Carousel
          orientation="vertical"
          opts={REVOPTIONS}
          plugins={[plugin.current]}
        >
          <CarouselContent className="mt-1 h-[490px] md:h-[390px]">
            {reviewData.map((review, idx) => (
              <CarouselItem key={idx}>
                <div className="border-indigo-500 border-2 rounded-xl shadow-xl p-3 flex flex-col min-h-[95%]">
                  <div className="flex items-center rounded-xl bg-gray-200 w-fit px-3 py-1">
                    <BadgeCheck />
                    <p className="text-gray-600 italic ms-3">
                      Verified Reviewer
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <div>
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={review.reviewerImg}
                          alt={review.name}
                        />
                        <AvatarFallback>
                          {review.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">
                        {review.name} -{' '}
                        <span className="text-gray-700 font-normal text-sm">
                          {review.role}
                        </span>
                      </h2>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={17}
                            className={
                              index < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="pl-12 italic my-3">{review.msg}</div>
                  <Separator className="h-[1px] my-1 bg-gray-500 mt-auto" />
                  <div className="flex justify-end">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://img.icons8.com/ios-filled/50/fiverr--v2.png" />
                        <AvatarFallback>Fr</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-gray-600 italic">
                        {review.medium}
                      </h3>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="w-[1px] mx-2 bg-gray-500 h-8 my-auto"
                    />
                    <div className="flex items-center font-inter ">
                      {review.date}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* <ReviewCarousel slides={reviewData} options={REVOPTIONS} /> */}
      </div>
    </div>
  )
}
