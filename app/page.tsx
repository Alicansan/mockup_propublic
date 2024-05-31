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
    <main className='overflow-hidden mt-[7rem] md:w-full md:mx-auto md:max-w-[89rem] md:h-full   '>
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
            <p className='md:text-xl max-w-3xl uppercase  font-Inter font-light mt-12 text-sm px-16 '>
              we stand as the only platform that
              provides professional coaching
              services tailored specifically for
              your favorite mobile games.
            </p>
          </div>
          {/* Background Images */}
          <div className='flex justify-between h-screen  -mt-[30rem]  md:-mt-[21rem] -z-10'>
            <img
              src='/rightwing.svg '
              className='absolute left-0 top-0    md:h-[70rem] md:w-[32rem]  h-full w-[9rem]  '
            />

            <img
              src='/leftwing.svg'
              className='absolute right-0 top-0    md:h-[70rem] md:w-[32rem]  h-full w-[9rem] '
            />
          </div>
          {/* Background Images */}
        </div>
      </div>

      {/* Hero Section */}
      {/* Stripes */}
      <div className='md:flex hidden flex-col  justify-start md:-mt-[20rem] mb-[190px] w-auto z-10'>
        <div className='bg-white relative z-20 text-black flex justify-center text-2xl py-5 font-bold md:text-nowrap'>
          {[...Array(n)].map((e, i) => (
            <div className=' text-nowrap mx-7'>
              SCROLL TO EXPLORE
            </div>
          ))}
        </div>
        <div
          className='bg-[#fe0037] relative z-20 text-white flex justify-center text-2xl py-5 font-bold md:text-nowrap'
          style={{ transform: 'rotate(-2deg)' }}
        >
          {[...Array(z)].map((e, i) => (
            <div className=' text-nowrap mx-7 z-0 overflow'>
              UNLEASH YOUR POTENTIAL
            </div>
          ))}
        </div>
      </div>
      {/* Small Stripes */}
      <div className='flex md:hidden flex-col  justify-start md:-mt-[20rem] mb-[190px] w-auto z-10 -mt-[120px]'>
        <div className='bg-white relative z-20 text-black flex justify-center text-2xl py-3 font-bold '>
          <div className=' text-nowrap mx-7'>
            SCROLL TO EXPLORE
          </div>
        </div>
        <div
          className='bg-[#fe0037] relative z-10 text-white flex justify-center text-2xl py-3 font-bold md:text-nowrap'
          style={{ transform: 'rotate(-2deg)' }}
        >
          <div className=' text-nowrap mx-7 z-0 overflow'>
            UNLEASH YOUR POTENTIAL
          </div>
        </div>
      </div>
      {/* Stripes */}
      {/* Caro Image */}
      <div className=''>
        <CaroImage />
        <div className='flex items-center flex-col px-2 relative  mt-12'>
          <img
            src='/fingradient.svg'
            className='absolute left-0 top-16 -mt-[160px] md:w-[30rem]+h-[30rem] w-[15rem] h-[15rem] -z-10 '
          />
          <p className=' md:text-4xl text-xl font-normal'>
            WE AT PROPUBLIC, BELIEVE THAT
          </p>
          <p className='md:text-6xl text-3xl uppercase  text-center font-semibold mt-12 mb-7'>
            standing out and shining in play is
            not just a goal but a journey guided
            by expert hands.
          </p>
          <Link href='/'>
            <Button
              variant='green'
              className='  rounded-[6px] text-end '
            >
              ABOUT US
            </Button>
          </Link>
        </div>
      </div>

      {/* Caro Image */}
      {/* Statistics */}
      <div className='container'>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-x-4'>
          <div className='text-center'>
            <p className=' text-[100px]  md:text-[152px] font-bold transform  md:-mb-[60px]'>
              25{' '}
              <span className='pl-2 text-red-600 -ml-7 m text-[120px] md:text-[162px] -mb-[60px]'>
                {' '}
                +
              </span>
            </p>
            <p className='uppercase -mt-10 container text-sm font-thin max-w-[250px] font-Inter'>
              Popular Games to chose best for you
            </p>
          </div>
          <div className='text-center'>
            <p className=' text-[100px]  md:text-[152px] font-bold transform  md:-mb-[60px]'>
              30{' '}
              <span className='pl-2 text-red-600 -ml-7 m text-[120px] md:text-[162px] -mb-[60px]'>
                {' '}
                +
              </span>
            </p>
            <p className='uppercase -mt-10 container text-sm font-thin max-w-[250px] font-Inter'>
              Achievements that makes us proud
            </p>
          </div>
          <div className='text-center'>
            <p className=' text-[100px]  md:text-[152px] font-bold transform  md:-mb-[60px]'>
              10{' '}
              <span className='pl-2 text-red-600 -ml-7 m text-[120px] md:text-[162px] -mb-[60px]'>
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
      {/* Statistics */}
      {/* Videos Section */}
      <div className='flex flex-col md:flex-row  justify-between m-[100px]'>
        <p className='uppercase md:text-7xl text-3xl font-[500]'>
          Top popular{' '}
          <span className='relative'>
            masterclasses{' '}
            <img
              src='/scribble.svg'
              className='absolute bottom-0 right-0'
            />
          </span>
        </p>
        <Link
          href='/'
          className='md:pt-0 pt-12 -mb-24 md:mb-0'
        >
          <Button variant='green'>
            EXPLORE MORE COURSES!
          </Button>
        </Link>
      </div>
      <CaroVideo />
      {/* Videos Section */}
      {/* Coaches Section */}
      <div className='flex flex-col md:flex-row justify-between m-[100px] '>
        <p className='uppercase md:text-7xl text-3xl font-[500] text-center'>
          our professional{' '}
          <span className='relative w-full'>
            coaches{' '}
            <img
              src='/scribble.svg'
              className='absolute bottom-0 right-0 '
            />
          </span>
        </p>
        <Link
          href='/'
          className='md:pt-0 pt-12  md:mb-0'
        >
          <Button variant='green' className='  '>
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
      <div className='md:flex hidden flex-col  justify-start  mb-[190px] w-auto z-10'>
        <div className='bg-white relative z-20 text-black flex justify-center text-2xl py-5 font-bold md:text-nowrap'>
          {[...Array(n)].map((e, i) => (
            <div className=' text-nowrap mx-7'>
              SCROLL TO EXPLORE
            </div>
          ))}
        </div>
        <div
          className='bg-[#fe0037] relative z-20 text-white flex justify-center text-2xl py-5 font-bold md:text-nowrap'
          style={{ transform: 'rotate(-2deg)' }}
        >
          {[...Array(z)].map((e, i) => (
            <div className=' text-nowrap mx-7 z-0 overflow'>
              UNLEASH YOUR POTENTIAL
            </div>
          ))}
        </div>
      </div>
      {/* Small Stripes */}
      <div className='flex md:hidden flex-col  justify-start md:-mt-[20rem] mb-[190px] w-auto z-10 b-0'>
        <div className='bg-white relative z-20 text-black flex justify-center text-2xl py-3 font-bold '>
          <div className=' text-nowrap mx-7'>
            SCROLL TO EXPLORE
          </div>
        </div>
        <div
          className='bg-[#fe0037] relative z-10 text-white flex justify-center text-2xl py-3 font-bold md:text-nowrap'
          style={{ transform: 'rotate(-2deg)' }}
        >
          <div className=' text-nowrap mx-7 z-0 overflow'>
            UNLEASH YOUR POTENTIAL
          </div>
        </div>
      </div>
      {/* Stripes */}

      {/* Fishing Content */}
      <div className='flex flex-row justify-center m-[100px] '>
        <p className='uppercase text-4xl md:text-7xl font-[500]  flex-col md:text-start text-center'>
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
      <div className='hidden relative max-w-auto - md:flex flex-row mx-[200px]'>
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
        <div className='grid md:grid-cols-3  grid-cols-1 gap-x-4'>
          <div className='text-center '>
            <h1 className='text-[100px] md:text-[152px] font-bold  leading-none text-red-600'>
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
            <p className='text-[100px] md:text-[152px] font-bold  leading-none text-red-600'>
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
            <p className='text-[100px] md:text-[152px] font-bold  leading-none text-red-600'>
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
      {/* Fishing Content */}
      {/* Join Content */}
      <div className='bg-red-600 flex md:flex-row flex-col justify-evenly  w-4/6 mx-auto my-11 rounded-xl py-3'>
        <div className='md:w-1/3 whitespace-pre-wrap flex flex-col justify-center md:py-12 text-center pb-12 md:pb-0'>
          <p className='font-bold md:text-5xl '>
            BE A MEMBER & GET ACCESS ON ALL
            COURSES!
          </p>
          <p className='font-bold md:text-5xl'>
            $10 /{' '}
            <span className='md:text-3xl'>
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
              className='md:px-12   '
            >
              BECOME A MEMBER!
            </Button>
          </Link>
        </div>
      </div>
      {/* Join Content */}
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
      <p className='uppercase flex justify-center font-extralight md:text-3xl text-center px-2'>
        we partner with the region’s expertise to
        provide the best coaching lessons and
        coach vidEos.
      </p>
      <CaroSponsors />
      {/* Sponsors */}
      {/* Reviews */}
      <div className='flex justify-center m-[100px] '>
        <p className='uppercase text-3xl md:text-7xl font-[500]  text-start '>
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
