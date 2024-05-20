import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface CoachProfileProp {
  id: string
  name: string
  image: string
  achievements: string[]
  games: string[]
  roles: string[]
  bio: string
}

const CoachProfileCard = ({
  name,
  image,
  achievements,
  games,
  roles,
  bio,
}: CoachProfileProp) => {
  return (
    <div className='mb-12 mt-30 flex flex-col'>
      <div className=' px-6 border-2 border-gray-600 rounded-[10px] w-[24rem] h-[42rem] bg-opacity-5 bg-gray-50 flex flex-col items-center'>
        <img
          src={image}
          width={32}
          height={32}
          className='rounded-full border-black border-2 overflow-hidden object-cover h-32 w-32 object-top mt-6 bg-white'
        />
        <h1 className='font-semibold text-4xl mt-4 uppercase '>
          {name}
        </h1>
        <ul className='font-Inter text-xs flex flex-col items-center mt-4'>
          {achievements.map((item) => (
            <li className='list-none '>{item}</li>
          ))}
        </ul>
        <Link href='/' className='mt-3 w-full '>
          <Button
            variant='white'
            className='w-full'
          >
            CHAT{' '}
          </Button>
        </Link>

        <div className='bg-white  w-full m-5  h-[1px] '></div>

        <div>
          <h3 className=' text-center mb-2 text-gray-600 '>
            GAMES
          </h3>
          <div className='flex flex-row gap-2'>
            {games.map((item) => (
              <Link
                href={'/'}
                className='border-gray-500 border-2 rounded-full text-center px-2 '
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className=' text-center mb-2 text-gray-600 mt-3 '>
            ROLES
          </h3>
          <div className='flex flex-row gap-2'>
            {roles.map((item) => (
              <Link
                href={'/'}
                className='border-gray-500 border-2 rounded-full text-center px-2 '
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className='text-center mt-12'>
          <h2 className='text-gray-600'>BIO</h2>
          {bio}
        </div>
      </div>
    </div>
  )
}

export default CoachProfileCard
