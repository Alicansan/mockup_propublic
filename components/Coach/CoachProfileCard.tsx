import React from 'react'

interface CoachProfileProp {
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
    <div className='mb-12 mt-30'>
      <div className='border-2 border-gray-400 rounded-[10px] w-[24rem] h-[42rem] bg-opacity-5 bg-gray-50'>
        <img src={image} />
        <div className=''>{name}</div>
      </div>
    </div>
  )
}

export default CoachProfileCard
