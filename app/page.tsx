import CaroCoaches from '@/components/CaroCoaches'
import CaroGames from '@/components/CaroGames'
import CaroImage from '@/components/CaroImage'
import CaroReviews from '@/components/CaroReviews'
import CaroSponsors from '@/components/CaroSponsors'
import CaroVideo from '@/components/CaroVideo'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const n = 6
  const z = 5

  return (
    <main className='mt-[7rem] md:w-full md:mx-auto md:max-w-[89rem] md:h-full px-4 !w-auto '>
      <div className='bg-[#2fff00] font-Inter text-black  text-sm  font-small '>
        A NEW COURSE HAS BEEN UPDATED! "HOW TO
        MAINTAIN TEAMMATE COMMUNICATING SKILLS"{' '}
        <Link href='/'>
          <span className='font-semibold ml-3'>
            VIEW COURSE
          </span>
        </Link>
      </div>
      {/* Hero Section */}
      <div className='  flex flex-col justify-evenly mt-11'>
        <div className=' md:text-[180px] text-[4rem] font-semibold z-20 text-center  relative flex flex-col'>
          <h1 className='sr-only'>
            Unleash your gaming potential.
          </h1>
          <span className='md:-mb-[130px]'>
            UNLEASH YOUR{' '}
          </span>
          <span className='relative text-[#fe0037]'>
            GAMING{' '}
            <span className='relative '>
              POTENTIAL{' '}
              <img
                src='/scribble.svg'
                className='absolute bottom-0 right-0 '
              />
            </span>
          </span>
          <div className='flex justify-center'>
            <p className='md:text-xl max-w-3xl uppercase  font-Inter font-light mt-12 text-sm px-16'>
              we stand as the only platform that
              provides professional coaching
              services tailored specifically for
              your favorite mobile games.
            </p>
          </div>
        </div>
      </div>
      {/* Background Images */}
      <div className='flex justify-between h-screen  -mt-[160px]'>
        <img
          src='/rightwing.svg '
          width='500px'
          height='800px'
          className=' left-0 top-0  -z-10 object-scale-down max-w-full'
        />

        <img
          src='/leftwing.svg'
          width='500px'
          height='800px'
          className=' right-0 top-0   -z-10 object-scale-down max-w-full'
        />
      </div>
      {/* Hero Section */}
      {/* Stripes */}
      <div className='flex flex-col  justify-start mt-[90px] mb-[190px] w-auto '>
        <div className='bg-white relative z-20 text-black flex justify-center text-2xl py-5 font-bold md:text-nowrap'>
          {[...Array(n)].map((e, i) => (
            <div className=' text-nowrap mx-7'>
              SCROLL TO EXPLORE
            </div>
          ))}
        </div>
        <div
          className='bg-[#fe0037] relative z-10 text-white flex justify-center text-2xl py-5 font-bold md:text-nowrap'
          style={{ transform: 'rotate(-2deg)' }}
        >
          {[...Array(z)].map((e, i) => (
            <div className=' text-nowrap mx-7 z-0 overflow'>
              UNLEASH YOUR POTENTIAL
            </div>
          ))}
        </div>
      </div>
      {/* Stripes */}
    </main>
  )
}
