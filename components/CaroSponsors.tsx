import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { Sponsors } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Rating from './Rating'

const CaroSponsors = () => {
  return (
    <Carousel>
      <img
        src='/fingradientmid.svg'
        width='500px'
        height='500px'
        className='absolute m-auto left-0 right-0 -top-48 -z-10'
      />
      <CarouselContent className='my-11 '>
        {[...Sponsors].map((item, index) => (
          <div className='bg-white/5  mx-7 relative text-center  border-4 rounded-xl border-gray-500   transition duration-300 ease-in-out transform hover:scale-110'>
            <CarouselItem
              key={index}
              className='w-[12rem] h-[12rem]  flex-col items-center  '
            >
              <img
                src={item.image}
                className=' transition duration-300 m-8  ease-in-out transform hover:scale-110 w-[7rem] h-[7rem] '
              />
            </CarouselItem>
            <div className='text-3xl '>
              {item.name}
            </div>
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CaroSponsors
