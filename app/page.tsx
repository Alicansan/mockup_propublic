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
    <main className=' mt-[7rem] w-full mx-auto max-w-[89rem] h-full'>
      {/* Hero Section */}
      <div className='bg-[#2fff00] font-Inter text-black flex justify-center text-sm py-2 font-small'>
        A NEW COURSE HAS BEEN UPDATED! "HOW TO
        MAINTAIN TEAMMATE COMMUNICATING SKILLS"{' '}
        <Link href='/'>
          <span className='font-semibold ml-3'>
            VIEW COURSE
          </span>
        </Link>
      </div>

      <div className=' relative flex flex-col justify-evenly mt-11'>
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
          height='800px'
          className='absolute left-0 top-0 -mt-[160px]  -z-10 '
        />

        <img
          src='/rightwing.png'
          width='500px'
          height='800px'
          className='absolute right-0 top-0 -mt-[160px]  -z-10 '
        />
      </div>
      {/* Stripes */}
      <div className='flex flex-col gap-0 justify-start mt-[90px] mb-[190px]'>
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
      {/* Stripes */}
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
      {/* Statistics */}
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
      {/* Videos Section */}
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
      <CaroVideo />
      {/* Videos Section */}
      {/* Coaches Section */}
      <div className='flex flex-row justify-between m-[100px]'>
        <p className='uppercase text-7xl font-[500]'>
          our professional{' '}
          <span className='relative w-full'>
            coaches{' '}
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
            BECOME A COACH!
          </Button>
        </Link>
      </div>
      <CaroCoaches />
      {/* Coaches Section */}
      {/* Games Section */}
      <div className='flex flex-row justify-center m-[100px] '>
        <p className='uppercase text-7xl font-[500]  flex-col text-center '>
          pick your<br></br>
          <span className='relative w-full'>
            favourite games{' '}
            <img
              src='/scribble.svg'
              className='absolute bottom-0 right-0'
            />
          </span>
        </p>
      </div>
      <CaroGames />
      <Link href='/'>
        <Button
          variant='green'
          className=' py-7 rounded-[6px] text-end mb-10'
        >
          BROWSE ALL GAMES
        </Button>
      </Link>
      {/* Games Section */}
      {/* Stripes */}
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
      {/* Stripes */}
      <div className='flex flex-row justify-start m-[100px] '>
        <p className='uppercase text-7xl font-[500]  flex-col text-start '>
          INTERESTED?<br></br>
          HERE'S HOW{' '}
          <span className='relative w-full'>
            YOU CAN START!
            <img
              src='/scribble.svg'
              className='absolute bottom-0 right-0'
            />
          </span>
        </p>
      </div>
      <div className='relative max-w-auto - flex flex-row mx-[200px]'>
        <img
          src='/stripes.svg'
          className=' my-5'
        />
        <img
          src='/circledot.svg'
          className='absolute top-1.5 -left-0 '
        />
        <img
          src='/circledot.svg'
          className='absolute top-1.5 left-[440px] '
        />
        <img
          src='/circledot.svg'
          className='absolute top-1.5 left-[890px] '
        />
        <p className='whitespace-nowrap text-3xl'>
          HAVE FUN!
        </p>
      </div>
      <div className='container mb-16'>
        <div className='grid grid-cols-3 gap-x-4'>
          <div className='text-center '>
            <h1 className='text-[152px] font-bold  leading-none text-red-600'>
              01{' '}
            </h1>
            <h1 className='text-[36px]'>
              Pick your choice
            </h1>
            <p className='uppercase  container  text-sm font-thin max-w-[250px] font-Inter'>
              SELECT YOUR GAME AND YOUR COACH.
            </p>
          </div>
          <div className='text-center '>
            <p className='text-[152px] font-bold  leading-none text-red-600'>
              02{' '}
            </p>
            <h1 className='text-[36px]'>
              REQUEST BEING PROCESSED
            </h1>
            <p className='uppercase  container  text-sm font-thin max-w-[250px] font-Inter'>
              OUR COACH WILL GET BACK TO YOU
              WITHIN 24 HOURS.
            </p>
          </div>
          <div className='text-center '>
            <p className='text-[152px] font-bold  leading-none text-red-600'>
              03{' '}
            </p>
            <h1 className='text-[36px]'>
              Start scheduling lesson
            </h1>
            <p className='uppercase  container  text-sm font-thin max-w-[250px] font-Inter'>
              START PLANNING OUT LESSON'S SCHEDULE
              WITH YOUR COACH.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-red-600 flex justify-evenly  w-4/6 mx-auto my-11 rounded-xl py-3'>
        <div className='w-1/3 whitespace-pre-wrap flex flex-col justify-center py-12'>
          <p className='font-bold text-5xl'>
            BE A MEMBER & GET ACCESS ON ALL
            COURSES!
          </p>
          <p className='font-bold text-5xl'>
            $10 /{' '}
            <span className='text-3xl'>
              Month
            </span>
          </p>{' '}
        </div>
        <div className='bg-white text-black  rounded-xl p-12'>
          <h2 className='text-xl'>
            WHAT YOU'LL GET AS A MEMBER:
          </h2>
          <ul className='list-disc mb-11'>
            <li>
              FULL ACCESS TO ALL ONLINE COURSES,
              GUIDES AND VIDEOS,
            </li>
            <li>
              GET THE LATEST GAMING UPDATES ON NEW
              TECHNIQUES,
            </li>
            <li>
              GET REWARDS OF FREE COURSES EVERY
              NEW SEASON,
            </li>
            <li>DIRECTLY SUPPORT THE CREATORS</li>
            <li>ACCESS TO 20+ GAMES</li>
          </ul>
          <Link href='/'>
            <Button
              variant='green'
              className=' px-14'
            >
              BECOME A MEMBER!
            </Button>
          </Link>
        </div>
      </div>
      {/* Sponsors */}
      <div className='flex justify-center m-[100px] '>
        <p className='uppercase text-7xl font-[500]  text-center '>
          our trusted{' '}
          <span className='relative w-full'>
            partners{' '}
            <img
              src='/scribble.svg'
              className='absolute bottom-0 right-0'
            />
          </span>
        </p>
      </div>
      <p className='uppercase flex justify-center font-extralight '>
        we partner with the region’s expertise to
        provide the best coaching lessons and
        coach vidEos.
      </p>
      <CaroSponsors />
      {/* Sponsors */}

      {/* Reviews */}
      <div className='flex justify-center m-[100px] '>
        <p className='uppercase text-7xl font-[500]  text-start '>
          TRUST THE RESULTS, <br /> JUST READ WHAT{' '}
          <span className='relative w-full'>
            OUR STUDENTS{' '}
            <img
              src='/scribble.svg'
              className='absolute bottom-0 right-0'
            />
          </span>
          SAY
        </p>
      </div>
      <CaroReviews />
      {/* Reviews */}
    </main>
  )
}
