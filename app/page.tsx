import Image from 'next/image'
import Link from 'next/link'
import Carousel from './components/Carousel'

export default function Home() {
  const n = 6

  return (
    <main className='relative mt-[110px] w-full mx-auto max-w-[1920px]'>
      <div className='bg-[#2fff00] font-Inter text-black flex justify-center text-xl py-2 font-light'>
        A NEW COURSE HAS BEEN UPDATED! "HOW TO
        MAINTAIN TEAMMATE COMMUNICATING SKILLS"{' '}
        <Link href='/'>
          <span className='font-semibold ml-3'>
            VIEW COURSE
          </span>
        </Link>
      </div>
      <div className=' flex justify-evenly mx-[12rem]  mt-11'>
        <div
          className='absolute left-0 top-0 h-[1200px] w-[500px]  bg-cover  bg-left -z-10'
          style={{
            backgroundImage:
              "url('/leftwing.png')",
          }}
        ></div>
        <div>
          <div className='text-[170px] font-semibold z-20 text-center  relative flex flex-col'>
            <h1 className='sr-only'>
              Unleash your gaming potential. we
              stand as the only platform that
              provides professional coaching
              services tailored specifically for
              your favorite mobile games.
            </h1>
            <span className=''>
              UNLEASH YOUR{' '}
            </span>
            <span className='text-[#fe0037]'>
              GAMING{' '}
              <span className='relative'>
                POTENTIAL{' '}
                <img
                  src='/scribble.svg'
                  className='absolute bottom-9sharex right-0 '
                />
              </span>
            </span>
          </div>
          <p className='text-4xl uppercase flex flex-nowrap my-[5rem] mx-[350px]'>
            we stand as the only platform that
            provides professional coaching
            services tailored specifically for
            your favorite mobile games.
          </p>
        </div>

        <div
          className='absolute right-0 top-0 h-[1200px] w-[500px]  bg-cover  bg-right -z-10 '
          style={{
            backgroundImage:
              "url('/rightwing.png')",
          }}
        ></div>
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
