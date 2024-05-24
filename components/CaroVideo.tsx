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
    <Carousel>
      <CarouselContent>
        {[...CaroVideos].map((item, index) => (
          <div className='bg-[#191919] mx-4 my-8  px-9 py-3 md:p-9 pb-[10px] rounded-xl relative '>
            <CarouselItem
              key={index}
              className='bg-white flex  flex-row  justify-start  !pl-0 basis-[50%] rounded-xl'
            >
              <iframe
                src={item.source}
                className='rounded-xl md:w-[750px] md:h-[421px] '
              ></iframe>
            </CarouselItem>
            <div>
              <h1 className='flex flex-row my-8 justify-items-start md:text-5xl text-xl'>
                {item.header}
              </h1>
              <div className='flex flex-row justify-between mb-4'>
                <h2 className='flex flex-row  justify-items-start text-xl font-Inter uppercase'>
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
                className='md:block hidden absolute -top-12 -left-12 '
              />
            )}
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CaroVideo
