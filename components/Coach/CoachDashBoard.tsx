import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Item } from '@radix-ui/react-accordion'

interface CoachDashboardprop {
  sessions: {
    header: string
    hours: string
    context: string
    howMuch: string
  }[]
  trainingPlans: {
    header: string
    sessionCount: string
    context: string
    howMuch: string
  }[]

  courses: {
    vidUrl: string
    name: string
    howMuch: string
  }[]

  faqs: {
    header: string
    answer: string
  }[]
}
const CoachDashBoard = ({
  sessions,
  trainingPlans,
  courses,
  faqs,
}: CoachDashboardprop) => {
  return (
    <div className='w-full md:w-full   '>
      <Tabs defaultValue='sessions' className=''>
        <TabsList className=''>
          <TabsTrigger
            value='sessions'
            className=''
          >
            SESSIONS
          </TabsTrigger>
          <TabsTrigger value='trainingPlans'>
            TRAINING PLANS
          </TabsTrigger>
          <TabsTrigger value='courses'>
            COURSES
          </TabsTrigger>
          <TabsTrigger value='faqs'>
            FAQS
          </TabsTrigger>
        </TabsList>
        <TabsContent value='sessions'>
          <Accordion
            type='single'
            className='w-full'
          >
            {sessions.map((session, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className='m-2 '
              >
                <AccordionTrigger className='bg-[#141414]   p-4 text-2xl '>
                  {session.header}
                </AccordionTrigger>
                <AccordionContent className='bg-[#141414]  px-4  uppercase text-gray-200'>
                  <p className='py-2'>
                    Total Hours: {session.hours}
                  </p>
                  <p className='font-Inter text-xs'>
                    {session.context}
                  </p>
                  <p className='text-3xl pt-4 text-white'>
                    $ {session.howMuch}
                    <Link href='/' className=''>
                      <Button
                        variant={'green'}
                        className='w-full h-10 text-m text-black'
                      >
                        BOOK A SESSION
                      </Button>
                    </Link>
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        <TabsContent value='trainingPlans'>
          <div className='grid  grid-cols-1 xl:grid-cols-3 gap-4 '>
            {trainingPlans.map((item, index) => (
              <div className='bg-[#141414] rounded-2xl p-4 '>
                <div className='h-[172px]'>
                  <h1 className='text-3xl h-[5rem]'>
                    {item.header}
                  </h1>
                  <h3 className='text-sm font-Inter'>
                    {item.sessionCount}
                  </h3>
                  <h2 className='text-m font-Inter'>
                    {item.context}{' '}
                  </h2>
                </div>
                <h1 className='text-3xl'>
                  {item.howMuch}{' '}
                </h1>
                <Link href='' className='mt-auto'>
                  <Button
                    variant={'green'}
                    className='w-full'
                  >
                    SUBSCRIBE PLAN
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value='courses'>
          <div className='grid  grid-cols-1 xl:grid-cols-3  gap-4  '>
            {courses.map((item, index) => (
              <div className='bg-[#141414] rounded-2xl col-span-1 h- '>
                <div className=' p-4 '>
                  <iframe
                    src='https://www.youtube.com/embed/mGxmb-hw4M4?si=Q516Ug2K4BQ4uQAI'
                    className=' w-full h-full'
                  />
                </div>
                <div className='flex flex-col justify-between h-[120px] p-3'>
                  <h1 className='text-2xl '>
                    {item.name}
                  </h1>
                  <h1 className='text-2xl '>
                    {item.howMuch}
                  </h1>
                  <div>
                    <Link href='/' className=''>
                      <Button
                        variant={'green'}
                        className=' h-10 text-m text-black'
                      >
                        ►
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CoachDashBoard
