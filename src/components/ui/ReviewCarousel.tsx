'use client'

import React, { useCallback } from 'react'
import { BadgeCheck } from 'lucide-react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel from 'embla-carousel-react'
import { Star } from 'lucide-react'
// import Image from "next/image";
import { Separator } from '@radix-ui/react-separator'

interface ReveiwProp {
  name: string
  rating: number
  msg: string
  reviewerImg: string
  role: string
  medium: string
  date: string
  mediumImg: string
}

type PropType = {
  slides: ReveiwProp[]
  options?: EmblaOptionsType
}

const ReviewCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 8000 }),
    ClassNames(),
  ])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  )

  return (
    <section className="embla_review">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container_review">
          {slides.map((review, idx) => (
            <div className="embla__slide_review" key={idx}>
              <div className="border-indigo-500 border-2 rounded-xl shadow-xl p-3 flex flex-col min-h-[95%]">
                <div className="flex items-center rounded-xl bg-gray-200 w-fit px-3 py-1">
                  <BadgeCheck />
                  <p className="text-gray-600 italic ms-3">Verified Reviewer</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div>
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={review.reviewerImg} alt={review.name} />
                      <AvatarFallback>{review.name.slice(0, 2)}</AvatarFallback>
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
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'border-2 border-indigo-300 aspect-square w-[20px] rounded-full me-4'.concat(
                index === selectedIndex ? ' border-indigo-900 border-4' : '',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewCarousel
