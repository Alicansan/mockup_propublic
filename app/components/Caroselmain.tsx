import React from 'react'
import { Caros } from './constants'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import Button from './Button'

const Carouselmain = () => {
  return (
    <Carousel className='w-full'>
      <CarouselContent className=''>
        {Caros.map((item) => (
          <CarouselItem
            key={item.id}
            className='basis-1/2 lg:basis-1/3'
          >
            <Card className='relative'>
              <CardTitle>{item.header}</CardTitle>
              <CardContent>
                <div className='flex flex-col justify-start items-start gap-4 w-full'>
                  {item.context}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type='button'
                  link='/'
                  variant='btn_green'
                  title='Learn More'
                />
              </CardFooter>

              <img
                src={item.image}
                alt={item.name}
                className='absolute inset-0 z-[1]'
              />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default Carouselmain
