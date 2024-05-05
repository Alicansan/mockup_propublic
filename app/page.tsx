import Carouselmain from '@/components/Caroselmain'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const n = 6

  return (
    <main className=' mt-[110px] w-full mx-auto max-w-[1920px] h-full'>
      <div className='bg-[#2fff00] font-Inter text-black flex justify-center text-xl py-2 font-light'>
        A NEW COURSE HAS BEEN UPDATED! "HOW TO
        MAINTAIN TEAMMATE COMMUNICATING SKILLS"{' '}
        <Link href='/'>
          <span className='font-semibold ml-3'>
            VIEW COURSE
          </span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className='h-screen relative flex flex-col justify-evenly mt-11'>
        <div className='text-[170px] font-semibold z-20 text-center  relative flex flex-col'>
          <h1 className='sr-only'>
            Unleash your gaming potential.
          </h1>
          <span className=''>UNLEASH YOUR </span>
          <span className='text-[#fe0037]'>
            GAMING{' '}
            <span className='relative'>
              POTENTIAL{' '}
              <img
                src='/scribble.svg'
                className='absolute bottom-9 right-0'
              />
            </span>
          </span>

          <p className='text-4xl max-w-3xl mx-auto uppercase my-24 text-center'>
            we stand as the only platform that
            provides professional coaching
            services tailored specifically for
            your favorite mobile games.
          </p>
        </div>

        <img
          src='/leftwing.png'
          width='500px'
          height='1200px'
          className='absolute left-0 top-0  -z-10 '
        />

        <img
          src='/rightwing.png'
          width='500px'
          height='1200px'
          className='absolute right-0 top-0  -z-10 '
        />

        <div className='flex flex-col gap-0 justify-start'>
          <div className='bg-white relative z-20 text-black flex justify-center text-2xl py-5 font-bold'>
            {[...Array(n)].map((e, i) => (
              <div className=' text-nowrap mx-7'>
                SCROLL TO EXPLORE
              </div>
            ))}
          </div>
          <div
            className='bg-[#fe0037] relative z-10 text-white flex justify-center text-2xl py-5 font-bold '
            style={{ transform: 'rotate(-2deg)' }}
          >
            {[...Array(n)].map((e, i) => (
              <div className=' text-nowrap mx-7'>
                UNLEASH YOUR POTENTIAL
              </div>
            ))}
          </div>
        </div>
      </div>

      <Carouselmain />
    </main>
  )
}
