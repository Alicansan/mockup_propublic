import Image from 'next/image'
import Link from 'next/link'
import Carousel from './components/Carousel'

export default function Home() {
  const n = 6

  return (
    <main className='relative mt-[110px] w-full mx-auto max-w-[1920px]'>
      <div className='bg-[#2fff00]  text-black flex justify-center text-2xl py-2 font-light'>
        A NEW COURSE HAS BEEN UPDATED! "HOW TO
        MAINTAIN TEAMMATE COMMUNICATING SKILLS"{' '}
        <Link href='/'>
          <span className='font-semibold ml-3'>
            VIEW COURSE
          </span>
        </Link>
      </div>
      <div className=' flex justify-evenly mx-[12rem]  mt-11'>
        <div className='bg-leftwing absolute left-0 top-0 h-[1200px] w-[500px]  bg-cover  bg-left -z-10'></div>
        <div className='text-[170px] font-semibold z-20 text-center '>
          <span className='inline-block '>
            UNLEASH YOUR{' '}
          </span>
          <span className='text-[#fe0037] inline-block '>
            GAMING{' '}
            <span className='underline decoration-[#9ce938fd] '>
              POTENTIAL
            </span>
          </span>
        </div>
        <div className='bg-rightwing absolute right-0 top-0 h-[1200px] w-[500px]  bg-cover  bg-right -z-10 '></div>
      </div>
      <div className='bg-white relative z-20 text-black flex justify-center text-2xl py-5 font-bold'>
        {[...Array(n)].map((e, i) => (
          <div className=' text-nowrap mx-7'>
            SCROLL TO EXPLORE
          </div>
        ))}
      </div>
      <div
        className='bg-[#fe0037]  relative z-10 text-white flex justify-center text-2xl py-5 font-bold '
        style={{ transform: 'rotate(-2deg)' }}
      >
        {[...Array(n)].map((e, i) => (
          <div className=' text-nowrap mx-7'>
            UNLEASH YOUR POTENTIAL
          </div>
        ))}
      </div>
      <Carousel />
    </main>
  )
}
