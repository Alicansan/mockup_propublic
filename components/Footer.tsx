import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='p-4 flex  flex-row justify-around items-center mb-[120px]'>
      <div className='items-center flex flex-col'>
        <div className=' flex flex-row  '>
          <Image
            src='/propublic.png'
            alt='logo'
            width={86}
            height={86}
          />
          <div className='text-5xl content-center font-medium mx-6 max-w-[89rem]'>
            PROPUBLIC
          </div>
        </div>
        <p className='uppercase  w-[300px] text-xs font-extralight font-Inter mb-[100px]'>
          the ultimate gaming academy dedicated to
          nurturing your skills, fostering
          camaraderie, and shaping the next
          generation of e-Sports champions.
        </p>
        <p className='uppercase  w-[300px] text-sm font-extralight font-Inter'>
          we are on social media!
        </p>
      </div>
      <div>
        <p className='uppercase  w-[300px] text-sm font-extralight font-Inter'>
          quick links
        </p>
      </div>
      <div>
        <p className='uppercase  w-[300px] text-sm font-extralight font-Inter'>
          popular games
        </p>
      </div>
    </footer>
  )
}

export default Footer
