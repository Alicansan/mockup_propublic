import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { Caros } from '@/lib/constants'

type ButtonProp = {
  className?: string
  header: string
  context: string
  image?: string
  name: string
}

const Carouselmain = ({
  className,
  header,
  context,
  image,
  name,
}: ButtonProp) => {
  return (
    <Carousel className='w-full'>
      <CarouselContent className='pl-20 gap-20'>
        {[...Caros].map((item, index) => (
          <CarouselItem
            key={index}
            className='basis-1/2 aspect-[16/9] relative border-gray-500 border-2 rounded-[10px]'
          >
            <div className='flex flex-col h-full gap-10 justify-center items-start'>
              <h2 className='text-2xl font-semibold'>
                {item.header}
              </h2>
              <p className='max-w-[300px] text-2xl font-semibold'>
                {item.context}
              </p>
            </div>

            <img
              src={item.image}
              alt={item.name}
              width={1000}
              height={500}
              className='absolute object-cover inset-0 w-full h-full z-[-2] rounded-[8px]'
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default Carouselmain
