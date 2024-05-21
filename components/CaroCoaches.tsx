import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { CaroCoachs } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Rating from './Rating'

const CaroCoaches = () => {
  return (
    <Carousel>
      <CarouselContent>
        {[...CaroCoachs].map((item, index) => (
          <Link href={`coaches/${item.id}`}>
            <div className=' relative mb-12  '>
              <CarouselItem
                key={index}
                className=' ml-2 '
              >
                <img
                  src={item.background}
                  className='object-contain'
                />
                <img
                  src={item.image}
                  className=' z-20 absolute bottom-1 right-0 max-h-full'
                />
                <div className='absolute z-30 bottom-0 left-10 flex '>
                  <p className='mr-2'>
                    {item.author}
                  </p>
                  <Rating />
                </div>
              </CarouselItem>
            </div>
          </Link>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CaroCoaches
