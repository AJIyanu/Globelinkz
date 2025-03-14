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
import { ReviewData } from '@/dacomp/dataareviewclient'
import { StaffData } from './ourteam'
import { formatDate } from '@/dacomp/dataareviewclient'

interface ReviewDataProps {
  reviewData: ReviewData
  staffData: StaffData
}

export default function Reviews({ reviewData, staffData }: ReviewDataProps) {
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
            {reviewData.reviewCollection.items.map((review, idx) => (
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
                          src={review.subject}
                          alt={review.subject}
                        />
                        <AvatarFallback>
                          {review.subject.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">
                        {review.subject}
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
                  <div className="pl-12 italic my-3">{review.content}</div>
                  <Separator className="h-[1px] my-1 bg-gray-500 mt-auto" />
                  <div className="flex justify-end">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://img.icons8.com/ios-filled/50/fiverr--v2.png" />
                        <AvatarFallback>Fr</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-gray-600 italic">
                        {review.reviewPlatform}
                      </h3>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="w-[1px] mx-2 bg-gray-500 h-8 my-auto"
                    />
                    <div className="flex items-center font-inter ">
                      {formatDate(review.dateOfReview)}
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
