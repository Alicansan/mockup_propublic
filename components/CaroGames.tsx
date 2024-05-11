import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { CaroGame } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Rating from './Rating'

const CaroGames = () => {
  return (
    <Carousel>
      <CarouselContent>
        {[...CaroGame].map((item, index) => (
          <div className='  mb-12 ml-5  border-4 rounded-xl border-gray-800 overflow-clip  '>
            <CarouselItem
              key={index}
              className=' ml-2  w-[350px] h-[410px] object-  mx-auto relative '
            >
              <img
                src={item.image}
                className='absolute '
              />
            </CarouselItem>
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CaroGames
