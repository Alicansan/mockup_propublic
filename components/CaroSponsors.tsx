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
      <CarouselContent className='my-11'>
        {[...Sponsors].map((item, index) => (
          <div className=' b  mx-auto flex flex-col  justify-center text-center  border-4 rounded-xl border-gray-500   transition duration-300 ease-in-out transform hover:scale-110'>
            <CarouselItem
              key={index}
              className='mx-auto  pl-0 flex justify-center'
            >
              <img
                src={item.image}
                className='flex transition duration-300 m-8  ease-in-out transform hover:scale-110 object-contain'
                height={198}
                width={198}
              />
            </CarouselItem>
            <div className='text-5xl'>
              {item.name}
            </div>
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CaroSponsors
