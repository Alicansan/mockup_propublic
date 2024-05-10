import CaroImage from '@/components/CaroImage'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const n = 6
  const z = 5

  return (
    <main className=' mt-[7rem] w-full mx-auto max-w-[89rem] h-full'>
      <div className='bg-[#2fff00] font-Inter text-black flex justify-center text-sm py-2 font-small'>
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
        <div className='text-[180px] font-semibold z-20 text-center  relative flex flex-col'>
          <h1 className='sr-only'>
            Unleash your gaming potential.
          </h1>
          <span className='-mb-[130px]'>
            UNLEASH YOUR{' '}
          </span>
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
          <div className='flex justify-center'>
            <p className='text-xl max-w-3xl uppercase  font-Inter font-light '>
              we stand as the only platform that
              provides professional coaching
              services tailored specifically for
              your favorite mobile games.
            </p>
          </div>
        </div>

        <img
          src='/leftwing.png'
          width='500px'
          height='1000px'
          className='absolute left-0 top-0 -mt-[160px]  -z-10 '
        />

        <img
          src='/rightwing.png'
          width='500px'
          height='1000px'
          className='absolute right-0 top-0 -mt-[160px]  -z-10 '
        />

        <div className='flex flex-col gap-0 justify-start -mb-10'>
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
            {[...Array(z)].map((e, i) => (
              <div className=' text-nowrap mx-7 z-0 overflow'>
                UNLEASH YOUR POTENTIAL
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hero Section */}

      {/* Body Section */}
      <CaroImage />
      <div className='flex items-center flex-col font-[400] relative '>
        <img
          src='/fingradient.svg'
          width='500px'
          height='500px'
          className='absolute left-0 top-0 -mt-[160px]  -z-10 '
        />
        <p className=' text-4xl font-normal'>
          WE AT PROPUBLIC, BELIEVE THAT
        </p>
        <p className='text-6xl uppercase max-w-[50rem]  text-center font-semibold mt-12 mb-7'>
          standing out and shining in play is not
          just a goal but a journey guided by
          expert hands.
        </p>
        <Link href='/'>
          <Button
            variant='green'
            className=' py-7 rounded-[6px] text-end '
          >
            ABOUT US
          </Button>
        </Link>
      </div>

      <div className='container'>
        <div className='grid grid-cols-3 gap-x-4'>
          <div className='text-center'>
            <p className='text-[152px] font-bold transform -mb-[60px]'>
              25{' '}
              <span className='text-red-600 -ml-7 text-[162px] -mb-[60px]'>
                {' '}
                +
              </span>
            </p>
            <p className='uppercase -mt-10 container text-sm font-thin max-w-[250px] font-Inter'>
              Popular Games to chose best for you
            </p>
          </div>
          <div className='text-center'>
            <p className='text-[152px] font-bold transform -mb-[60px]'>
              30{' '}
              <span className='text-red-600 -ml-7 text-[162px] -mb-[60px]'>
                {' '}
                +
              </span>
            </p>
            <p className='uppercase -mt-10 container text-sm font-thin max-w-[250px] font-Inter'>
              Achievements that makes us proud
            </p>
          </div>
          <div className='text-center'>
            <p className='text-[152px] font-bold transform -mb-[60px]'>
              10{' '}
              <span className='text-red-600 -ml-7 text-[162px] -mb-[60px]'>
                {' '}
                +
              </span>
            </p>
            <p className='uppercase -mt-10 container text-sm font-thin max-w-[350px] font-Inter'>
              certified coaches with industry
              achievements & experiences
            </p>
          </div>
        </div>
      </div>
      {/* Statistics section */}
      <div className='flex flex-row justify-between m-[100px]'>
        <p className='uppercase text-7xl font-[500]'>
          Top popular{' '}
          <span className='relative'>
            masterclasses{' '}
            <img
              src='/scribble.svg'
              className='absolute bottom-0 right-0'
            />
          </span>
        </p>
        <Link href='/'>
          <Button
            variant='green'
            className=' py-7 rounded-[6px] text-end '
          >
            EXPLORE MORE COURSES!
          </Button>
        </Link>
      </div>
    </main>
  )
}
