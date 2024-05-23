import React from 'react'
import Rating from '../Rating'
import { Button } from '../ui/button'
import Link from 'next/link'

type CoachReviewProp = {
  CoachReviews: {
    name: string
    gameName: string
    comment: string
  }[]
}
const CoachReview = ({
  CoachReviews,
}: CoachReviewProp) => {
  return (
    <div className='flex flex-col p-12  items-center'>
      <div className='text-start text-6xl font-semibold'>
        REVIEWS
      </div>
      <div className=' mt-4'>
        <div className='mr-4 flex   '>
          <img className='w-8 h-8 rounded-full bg-gray-400 mr-4' />
          <textarea
            className='bg-[#0C0C0C] border-2 border-gray-400 
          rounded-l min-w-[20rem] xl:min-w-[48rem] min-h-[120px] p-2  font-Inter text-sm font-thin'
          >
            asd
          </textarea>
        </div>
        <div className=' ml-12  mt-2 text-m flex flex-row gap-2 justify-between'>
          <div className='flex  '>
            <h1>RATE COACH</h1>

            <Rating />
          </div>
          <div className='mr-4'>
            <Link href=''>
              <Button
                variant={'green'}
                className='text-sm font-bold'
              >
                POST REVIEW
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full border-2 h-[1px] border-dashed px-16 mt-7 border-gray-600 opacity-40'></div>

      {CoachReviews?.map((item) => (
        <>
          <div className='flex flex-row mt-12 min-w-[20rem] xl:min-w-[48rem] min-h-[120px] p-2  rounded-xl'>
            <img className='w-8 h-8 rounded-full bg-gray-400 mr-4' />
            <div className='flex flex-row justify-between w-full'>
              <div className='flex flex-col '>
                <h1 className='text-xl'>
                  {item.name}
                </h1>
                <h1 className='text-l text-gray-600'>
                  {item.gameName}
                </h1>
              </div>

              <div className='flex flex-row '>
                <Rating />
              </div>
            </div>
          </div>
          <p className='ml-12 '>{item.comment}</p>

          <div className='w-full border-2 h-[1px] border-dashed px-16 mt-7 border-gray-600 opacity-40'></div>
        </>
      ))}
    </div>
  )
}

export default CoachReview
