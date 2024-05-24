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
          <div className='  my-7  mx-4 border-4 rounded-xl border-gray-800 md:overflow-clip transition duration-300 ease-in-out transform hover:scale-110'>
            <CarouselItem
              key={index}
              className='  w-[12rem]  md:w-[24rem] md:h-[20rem] p-3 relative   flex '
            >
              <img
                src={item.image}
                className=' object-contain object-center transition duration-300 ease-in-out transform hover:scale-110'
              />
            </CarouselItem>
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CaroGames
