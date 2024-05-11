import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { CaroVideos } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Rating from './Rating'

const CaroVideo = () => {
  return (
    <Carousel className=''>
      <CarouselContent>
        {[...CaroVideos].map((item, index) => (
          <div className='bg-[#191919] mx-4 my-8  p-9 pb-[10px] rounded-xl relative '>
            <CarouselItem
              key={index}
              className='bg-white flex  flex-row  justify-start  pl-0 basis-[50%] rounded-xl'
            >
              <iframe
                src={item.source}
                width={750}
                height={421}
                className='rounded-xl '
              ></iframe>
            </CarouselItem>
            <div>
              <h1 className='flex flex-row my-8 justify-items-start text-5xl'>
                {item.header}
              </h1>
              <div className='flex flex-row justify-between'>
                <h2 className='flex flex-row my-8 justify-items-start text-xl font-Inter uppercase'>
                  {item.author}
                </h2>
                <div className='flex flex-row items-center '>
                  <Rating />
                </div>
              </div>
            </div>
            {item.isHot && (
              <img
                src='/carofire.svg'
                className='absolute -top-12 -left-12 '
              />
            )}
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CaroVideo
