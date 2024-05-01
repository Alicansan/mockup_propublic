import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='fixed z-30  backdrop-blur-[3px] w-full mx-auto left-0 right-0 top-0 max-w-[1920px] '>
      <div className='flex items-center float-start p-0 m-0'>
        <Link href='/' className='flex'>
          <Image
            src='/propublic.png'
            alt='logo'
            width={61}
            height={61}
          />
          <div className='text-4xl content-center font-medium mx-6 '>
            PROPUBLIC
          </div>
        </Link>

        <span className='bg-gray-400 w-[1px] h-[100px] p-0 m-0'></span>

        <div className='text-2xl flex  gap-7 font-medium mx-6'>
          <Link href='/'>COURSES</Link>
          <Link href='/'>GAMES</Link>
          <Link href='/'>BECOMING A COACH</Link>
        </div>
      </div>
      <div className='flex float-right justify-around'>
        <span className='bg-gray-400 w-[1px] h-[100px] p-0 m-0'></span>
        <div className='flex justify-between m-5 gap-5 '>
          <Button
            type='button'
            title='JOIN MEMBERSHIP'
            link='/'
            variant='btn_green'
          />
          <Button
            type='button'
            link='/'
            variant='btn_white'
            icon='/user.png'
            additional={'p-4'}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
