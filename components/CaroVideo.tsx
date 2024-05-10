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

const CaroVideo = () => {
  return (
    <Carousel>
      <CarouselContent>
        {[...CaroVideos].map((item, index) => (
          <CarouselItem key={index} className=''>
            <div className='flex flex-row h-full gap-10 items-center '></div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CaroVideo
