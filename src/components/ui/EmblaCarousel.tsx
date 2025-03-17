'use client'

import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay from 'embla-carousel-autoplay'
import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel from 'embla-carousel-react'
// import Image from "next/image";
import { Separator } from '@radix-ui/react-separator'
import { StaffData } from '@/sections/ourteam'

type PropType = {
  slides: StaffData
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 8000 }),
    ClassNames()
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
    onNavButtonClick
  )

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.staffCollection.items.map((staff, idx) => (
            <div className="embla__slide" key={idx}>
              <div className="border-indigo-500 border-2 rounded-xl shadow-xl p-3 flex flex-col md:flex-row items-center">
                <div
                  className="aspect-square rounded-full border-2 border-indigo-300 w-[220px] md:w-[55%]"
                  style={{
                    backgroundImage: `url(${staff.portrait.url})`,
                    backgroundPosition: 'center top',
                    backgroundSize: 'contain'
                  }}
                />
                <div className="ps-3 w-full text-center md:w-[45%] md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {`${staff.firstName} ${staff.lastName}`}
                  </h2>
                  <h3 className="text-1xl font-semibold mb-1 text-gray-800">
                    {staff.teamRole}
                  </h3>
                  <Separator className="bg-gray-600 h-[1] md:hidden" />
                  <blockquote className="text-justify mt-3 md:border-l-2 md:pl-3 md:italic border-gray-600 md:bg-gray-100 rounded p-2">
                    {staff.customerReview}
                  </blockquote>
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
                index === selectedIndex ? ' border-indigo-900 border-4' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
