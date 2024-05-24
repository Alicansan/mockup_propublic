'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isClicked, setisClicked] =
    useState(false)

  const toggleNavbar = (): void => {
    setisClicked(!isClicked)
  }
  return (
    <nav className='fixed left-0 right-0 top-0 bg-black z-30 backdrop-blur-[3px] bg-opacity-0 w-full mx-auto  max-w-[89rem] max-h-[6rem] px-auto md:px-0'>
      <div className='  mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:h-24'>
          {/* Left Side */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center '>
              <div className='flex-shrink-0'>
                <Link
                  href='/'
                  className='flex items-center'
                >
                  <Image
                    src='/propublic.png'
                    alt='logo'
                    width={61}
                    height={61}
                  />
                  <div className='text-4xl font-medium mx-6 '>
                    PROPUBLIC
                  </div>
                </Link>
              </div>
            </div>
            <div className='hidden md:flex'>
              <div className='ml-4 flex items-center space-x-4'>
                <span className='bg-gray-400 w-[1px] h-[6rem] p-0 m-0'></span>

                <div className='text-2xl flex  gap-7 font-medium mx-6'>
                  <Link href='/'>COURSES</Link>
                  <Link href='/'>GAMES</Link>
                  <Link href='/'>
                    BECOMING A COACH
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Left Side */}
          <div className='hidden md:flex justify-between m-5 items-center gap-5 '>
            <Button //asChild
              variant='green'
              className=''
              asChild
              onClick={toggleNavbar}
            >
              <Link href='/'>
                JOIN MEMBERSHIP
              </Link>
            </Button>

            <Link href='/'>
              <Button
                icon='/user.png'
                variant='white'
                className='px-6'
              ></Button>
            </Link>
          </div>
          <div className='md:hidden flex items-center  w-12 h-12'>
            <button
              className=' inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              onClick={toggleNavbar}
            >
              {isClicked ? (
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              )}{' '}
            </button>
          </div>
        </div>
      </div>
      {isClicked && (
        <div className='md:hidden -mt-12 h-24 bg-black  '>
          <div className='px-2 pt-2 pb-3  sm:px-3  flex flex-col items-center text-3xl bg-black '>
            <Link href='/' className='block'>
              COURSES
            </Link>
            <Link href='/' className='block'>
              GAMES
            </Link>
            <Link href='/' className='block'>
              BECOMING A COACH
            </Link>
            <div className='flex  justify-between m-5 items-center gap-5 '>
              <Button //asChild
                variant='green'
                className=''
                asChild
                onClick={toggleNavbar}
              >
                <Link href='/'>
                  JOIN MEMBERSHIP
                </Link>
              </Button>

              <Link href='/'>
                <Button
                  icon='/user.png'
                  variant='white'
                  className='px-6'
                ></Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
