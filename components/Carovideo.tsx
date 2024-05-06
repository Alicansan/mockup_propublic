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
    <Carousel className={className}>
      <CarouselContent className={className}>
        {[...Caros].map((item, index) => (
          <CarouselItem
            key={index}
            className={className}
          >
            <div className={className}>
              <h2 className={className}>
                {item.header}
              </h2>
              <p className={className}>
                {item.context}
              </p>
            </div>

            <img
              src={item.image}
              alt={item.name}
              width={1000}
              height={500}
              className={className}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default Carouselmain
