'use client'

import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6'

interface RatingProps {
  ratingpoint?: number
}

const Rating = ({ ratingpoint }: RatingProps) => {
  const [rating, setRating] = useState<
    number | null
  >(null)
  const [hover, setHover] = useState<
    number | null
  >(null)
  const [currentRating, setCurrentRating] =
    useState(0)

  ratingpoint = currentRating
  return (
    <>
      {[...Array(5)].map((item, i) => {
        const ratingValue = i + 1

        return (
          <>
            <label>
              <input
                type='radio'
                name='rating'
                className='hidden'
                value={ratingValue}
                onClick={() => (
                  setRating(ratingValue),
                  setCurrentRating(ratingValue)
                )}
              />
              <FaStar
                color={
                  ratingValue <=
                  ((hover || rating) ?? 0)
                    ? '#2fff00'
                    : '#4fa562'
                }
                onMouseEnter={() =>
                  setHover(ratingValue)
                }
                onMouseLeave={() =>
                  setHover(null)
                }
              />
            </label>
          </>
        )
      })}
      <h3 className='ml-2 whi flex-row  justify-items-start text-sm  font-Inter uppercase '>
        {ratingpoint}
      </h3>
    </>
  )
}

export default Rating
