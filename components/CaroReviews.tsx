import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel'
import { UserReview } from '@/lib/constants'

const CaroReviews = () => {
  return (
    <Carousel className=''>
      <img
        src='/fingradient.svg'
        width='500px'
        height='500px'
        className='absolute left-0  -mt-[160px]  -z-10 '
      />
      <CarouselContent className=' mb-12 '>
        {[...UserReview].map((item, index) => (
          <CarouselItem
            key={index}
            className=' md:min-w-[680px] border-2 border-gray-600 md:m-12   bg-gray-400/5  rounded-xl md:h-[465px] md:shrink w-[12rem] h-[12rem]'
          >
            <div className=' m-12  uppercase '>
              <p className='md:text-2xl  font-thin font-Inter'>
                "{item.review}"
              </p>
              <div className='flex flex-row  md:mt-[230px]'>
                <img
                  src={item.image}
                  width={64}
                  height={64}
                />
                <div className='pl-7 pt-3 text-2xl font-medium text-white flex-col flex '>
                  {item.username}
                  <p className='   inline  text-white text-sm'>
                    {item.gamename} BY{' '}
                    <span className='text-red-500'>
                      {item.coachname}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CaroReviews
