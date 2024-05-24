import {
  Icons,
  quickLinks,
  popularGames,
} from '@/lib/constants'

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <footer className='!overflow-hidden w-full mx-auto  top-0 max-w-[89rem] '>
      <div className='bg-gray-400 w-full h-[1px] mb-11'></div>
      <div className='p-4 flex flex-col md:flex-row justify-around items-center md:items-start gap-3'>
        <div className='items-center flex flex-col '>
          <div className=' flex flex-row mb-11 '>
            <img
              src='/propublic.png'
              alt='logo'
              width={86}
              height={86}
            />
            <div className='text-5xl content-center font-medium mx-6 max-w-[89rem]'>
              PROPUBLIC
            </div>
          </div>
          <p className='uppercase  w-[270px] text-xs font-extralight font-Inter mb-[100px]'>
            the ultimate gaming academy dedicated
            to nurturing your skills, fostering
            camaraderie, and shaping the next
            generation of e-Sports champions.
          </p>
          <div className='flex  flex-col py-12 items-center'>
            <p className='uppercase  w-[300px] text-sm font-extralight font-Inter text-center'>
              we are on social media!
            </p>
            <div className='flex flex-row gap-5 mt-3 '>
              {Icons.map((item) => (
                <img
                  className='bg-white'
                  src={item.image}
                  alt={item.name}
                  width={32}
                  height={32}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='gap-3 flex flex-col '>
          <p className='uppercase  text-sm font-extralight font-Inter inline'>
            QUICK LINKS
          </p>
          {quickLinks.map((item) => (
            <Link
              href={item.link}
              key={item.context}
            >
              <p className='inline'>
                {item.context}
              </p>
            </Link>
          ))}
        </div>
        <div className='gap-3 flex flex-col '>
          <p className='uppercase  text-sm font-extralight font-Inter inline'>
            POPULAR GAMES
          </p>
          {popularGames.map((item) => (
            <Link
              href={item.link}
              key={item.context}
            >
              <p className='inline'>
                {item.context}
              </p>
            </Link>
          ))}
          <Button variant='white'>
            {' '}
            BACK TO TOP{' '}
          </Button>
        </div>
      </div>
      <div className='w-full border-gray-500  border h-[1px] border-dotted  my-[120px] '>
        <div className='flex md:flex-row flex-col my-11 justify-around md:items-start items-center'>
          <p className='upper'>
            {' '}
            2024 PROPUBLIC. ALL RIGTS RESERVED.
          </p>
          <div className='w-11 flex gap-6'>
            <Link href='/'>TERMS</Link>
            <Link href='/'>PRIVACY</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
