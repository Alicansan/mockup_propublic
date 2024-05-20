import CoachProfileCard from '@/components/Coach/CoachProfileCard'
import React from 'react'
import { coaches } from '@/lib/constants'
//inline equivalent of interface defining CoachPages( {params}:{params: {id: string}})
type CoachProp = {
  params: {
    id: string
  }
}
export default function Coach({
  params,
}: CoachProp) {
  return (
    <main className='mt-[7rem] w-full mx-auto max-w-[89rem] h-full'>
      <div className=''>
        <CoachProfileCard
          {...coaches.[0][1]}
        />
      </div>
    </main>
  )
}
