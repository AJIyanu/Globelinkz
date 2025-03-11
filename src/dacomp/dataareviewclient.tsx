'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, BadgeCheck } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

export interface Review {
  rating: number
  content: string
  dateOfReview: string
  reviewVerificationLink: string | null
  reviewPlatform: string
  subject: string
}

export interface ReviewCollection {
  items: Review[]
}

export interface ReviewData {
  reviewCollection: ReviewCollection
}

interface DataReviewClientProps {
  reviewData: ReviewData
}

export default function DataAReviewClient({
  reviewData,
}: DataReviewClientProps) {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  const handleCardClick = (link: string | null) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="w-[90%] xl:w-[80%] py-8 bg-green-100 px-3">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-5">
          {reviewData.reviewCollection.items.map((review, idx) => (
            <CarouselItem
              key={idx}
              className="pl-5 my-auto lg:basis-1/2 xl:basis-1/3"
            >
              <div>
                <Card
                  className={`${review.reviewVerificationLink ? 'cursor-pointer hover:shadow-lg transition-shadow duration-200' : ''}`}
                  onClick={() => handleCardClick(review.reviewVerificationLink)}
                >
                  <CardContent className="aspect-[16/9] items-center justify-center p-6 relative">
                    <div className="flex items-center rounded-xl bg-gray-200 w-fit px-3 py-1">
                      <BadgeCheck />
                      <p className="text-gray-600 italic ms-3">
                        Verified Reviewer
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <div>
                        <Avatar className="h-12 w-12">
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
                    <div className="flex justify-between w-full">
                      <div className="flex items-center">
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
                        <div className="flex items-center font-inter">
                          {review.dateOfReview}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
