import CoachProfileCard from '@/components/Coach/CoachProfileCard'
import React from 'react'
import { coaches } from '@/lib/constants'
import CoachDashBoard from '@/components/Coach/CoachDashBoard'
import CoachReview from '@/components/Coach/CoachReview'

//inline equivalent of interface defining CoachPages( {params}:{params: {id: string}})

function Coach({
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
      <div className='mt-[7rem] w-full mx-auto max-w-[89rem] h-full bg-[#0C0C0C] '>
        {coach && (
          <CoachReview
            CoachReviews={coach.CoachReviews}
          />
        )}
      </div>
    </main>
  )
}
export default Coach
