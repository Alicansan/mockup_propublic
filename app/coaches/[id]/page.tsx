import React from 'react'
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
    <div className='mt-[7rem]'>
      {params.id} hey
    </div>
  )
}
