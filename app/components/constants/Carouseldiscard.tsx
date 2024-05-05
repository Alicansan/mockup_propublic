// 'use client'

// import React, { useState } from 'react'
// import { Caros } from './constants'
// import { transform } from 'next/dist/build/swc'

// const Carousel = () => {
//   {
//     children: Caros
//   }
//   const Caros1 = Caros
//   const Caros_1 = Caros
//   const [previous, setPrevious] = useState(0)
//   const [current, setCurrent] = useState(0)
//   const [next, setNext] = useState(0)

//   const goPrevious = () =>
//     setCurrent((current) =>
//       current === 0
//         ? Caros.length - 1
//         : current - 1
//     )

//   const goNext = () =>
//     setCurrent((current) =>
//       current === Caros.length - 1
//         ? 0
//         : current + 1
//     )

//   return (
//     <>
//       <div className='overflow-hidden relative  '>
//         <div
//           className='flex transition-transform ease-out duration-500'
//           style={{
//             transform: `translateX(-${
//               current * 100
//             }%)`,
//           }}
//         >
//           <div className='flex'>
//             {Caros1.map((item) => (
//               <img
//                 src={item.image}
//                 alt={item.name}
//               />
//             ))}
//           </div>
//           <div className='flex'>
//             {Caros.map((item) => (
//               <img
//                 src={item.image}
//                 alt={item.name}
//               />
//             ))}
//           </div>
//           <div className='flex'>
//             {Caros.map((item) => (
//               <img
//                 src={item.image}
//                 alt={item.name}
//               />
//             ))}
//           </div>
//         </div>
//         <div className='absolute text-4xl inset-0 flex items-center justify-between p-4  '>
//           <button
//             onClick={goPrevious}
//             className='bg-gray-500 text-black'
//           >
//             Left{' '}
//           </button>
//           <button
//             onClick={goNext}
//             className='bg-gray-500 text-black'
//           >
//             Right
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Carousel
