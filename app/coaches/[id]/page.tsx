import CoachProfileCard from '@/components/Coach/CoachProfileCard'
import React from 'react'
import { coaches } from '@/lib/constants'
import CoachDashBoard from '@/components/Coach/CoachDashBoard'

//inline equivalent of interface defining CoachPages( {params}:{params: {id: string}})

export default function Coach({
  params,
}: {
  params: { id: string }
}) {
  const id = params.id
  /// Find the coach with the mathing ID
  const coach = coaches.find(
    (coach) => coach.profileCard.id === id
  )
  return (
    <main className='mt-[7rem] w-full mx-auto max-w-[89rem] h-full'>
      <div className='grid  grid-cols-1 xl:grid-cols-3 mx-12 '>
        <div className='col-span-1 '>
          {coach && (
            <CoachProfileCard
              {...coach.profileCard}
            />
          )}
        </div>
        <div className='col-span-2 '>
          {coach && (
            <CoachDashBoard
              {...coach.CoachDashboard}
            />
          )}
        </div>
      </div>
    </main>
  )
}
