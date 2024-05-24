import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { Caros } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CaroImage = ({}) => {
  return (
    <Carousel className='w-screen z-20 -mt-[120px]'>
      <CarouselContent className='md:pl-20 m-12 gap-20 mt-[10px] '>
        {[...Caros].map((item, index) => (
          <CarouselItem
            key={index}
            className='md:basis-[860px] md:aspect-[16/9] relative border-gray-500 border-2 rounded-[10px]'
          >
            <div className='flex flex-col h-full gap-10 justify-center items-start'>
              <h2 className='md:text-[80px]  text-3xl leading-[70px] font-[600] uppercase w-[510px] text-start pl-2'>
                {item.header}
              </h2>

              <p className='max-w-[500px] text-left font-[200] font-Inter  text-sm p-3'>
                {item.context}
              </p>
              <img
                src={item.image}
                alt={item.name}
                width={1000}
                height={500}
                className='absolute object-cover inset-0 w-full h-full z-[-2] rounded-[8px] md:w-[62rem]+h-[32rem]'
              />
              <Link href='/'>
                <Button
                  variant='green'
                  className=' py-7 rounded-[6px] text-end'
                >
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CaroImage
