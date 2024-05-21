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
    <div>
      <Tabs
        defaultValue='sessions'
        className='w-[400px]'
      >
        <TabsList>
          <TabsTrigger value='sessions'>
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
            type='multiple'
            className='w-full'
          >
            {sessions.map((session, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
              >
                <AccordionTrigger>
                  {session.header}
                </AccordionTrigger>
                <AccordionContent>
                  <p>Hours: {session.hours}</p>
                  <p>
                    Context: {session.context}
                  </p>
                  <p>Fee: {session.howMuch}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
        <TabsContent value='trainingPlans'>
          <Accordion
            type='multiple'
            className='w-full'
          >
            {trainingPlans.map((plan, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
              >
                <AccordionTrigger>
                  {plan.header}
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Hours: {plan.sessionCount}
                  </p>
                  <p>Context: {plan.context}</p>
                  <p>Fee: {plan.howMuch}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CoachDashBoard
