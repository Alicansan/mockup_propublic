'use client'

import React, { useState } from 'react'
import { Caros } from './constants'

const Carousel = () => {
  {
    children: Caros
  }

  const [current, setCurrent] = useState(0)

  const previous = () =>
    setCurrent((current) =>
      current === 0
        ? Caros.length - 1
        : current - 1
    )

  const next = () =>
    setCurrent((current) =>
      current === Caros.length - 1
        ? 0
        : current + 1
    )
  return (
    <>
      <div className='overflow-hidden relative m-[50px]'>
        <div className='flex'>
          {Caros.map((item) => (
            <img
              src={item.image}
              alt={item.name}
            />
          ))}
        </div>
        <div className='absolute text-4xl inset-0 flex items-center justify-between p-4  '>
          <button className='bg-gray-500 text-black'>
            Left{' '}
          </button>
          <button className='bg-gray-500 text-black'>
            Right
          </button>
        </div>
      </div>
    </>
  )
}

export default Carousel
