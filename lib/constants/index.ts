import { Stringifier } from "postcss"

 interface Caro {
  name: string
  header: string
  context: string
  image: string
  id: string
}


export const Caros: Caro[] = [
  {
    id: '0',
    name: 'first',
    header: 'Get Better, Faster',
    context:
      "JOIN OUR LIVE SESSIONS, UNLOCK REPLAY REVIEWS, AND ACCESS PERSONALIZED TRAINING PLANS. USE PROMO CODE 'GAMEPRO' FOR AN EXCLUSIVE OFFER",
    image: '/caro1.png',
  },
  {
    id: '1',
    name: 'second',
    header: 'Get Better, Faster',
    context:
      "JOIN OUR LIVE SESSIONS, UNLOCK REPLAY REVIEWS, AND ACCESS PERSONALIZED TRAINING PLANS. USE PROMO CODE 'GAMEPRO' FOR AN EXCLUSIVE OFFER",
    image: '/caro2.png',
  },
  {
    id: '2',
    name: 'third',
    header: 'Get Better, Faster',
    context:
      "JOIN OUR LIVE SESSIONS, UNLOCK REPLAY REVIEWS, AND ACCESS PERSONALIZED TRAINING PLANS. USE PROMO CODE 'GAMEPRO' FOR AN EXCLUSIVE OFFER",
    image: '/caro3.png',
  },
]


interface Iconsprop {
  image: string
  name: string
}

export const Icons: Iconsprop[] = [
  {
    image:"icons8-facebook.svg",
    name:"facebook",
  },
  {
    image:"icons8-instagram.svg",
    name:"instagram",
  },
  {
    image:"icons8-twitterx.svg",
    name:"twitterx",
  },
  {
    image:"icons8-youtube.svg",
    name:"youtube",
  },

 ]

 interface QuickLinks {
  link: string
  context: string
 }

 export const quickLinks: QuickLinks[]=[
  {context:"EXPLORE ALL COURSES",
    link: "/"
  },
  {context:"BECOME A COACH",
    link: "/"
  },
  {context:"JOIN AS MEMBER",
    link: "/"
  },
 ]

 interface PopularGames{
  context: string
  link: string
 }

 export const popularGames: PopularGames[]=[
  {
    context:"LEAGUE OF LEGENDS",
    link:"/"
  },
  {
    context:"CALL OF DUTY",
    link:"/"
  },
  {
    context:"DOTA 2",
    link:"/"
  },
  {
    context:"FIFA",
    link:"/"
  },
  {
    context:"OVERWATCH",
    link:"/"
  },
  {
    context:"MOBILE LEGENDS",
    link:"/"
  },
 ]


 interface CaroVideo {
  isHot: boolean
  header: string
  author: string
  source: string
  
 }

 export const CaroVideos: CaroVideo[]=[
  {
    isHot: true,
    header: 'GIT GUD WITH GILLIAN GOODMAN',
    author: 'John',
    source: 'https://www.youtube.com/embed/5ttW-1i6pIc?si=t-yQSzr1B1SfHvL4',
    

  },
  {
    isHot: false,
    header: 'GIT GUD WITH GILLIAN GOODMAN',
    author: 'John',
    source: 'https://www.youtube.com/embed/5ttW-1i6pIc?si=t-yQSzr1B1SfHvL4',
    

  },
  {
    isHot: true,
    header: 'GIT GUD WITH GILLIAN GOODMAN',
    author: 'John',
    source: 'https://www.youtube.com/embed/5ttW-1i6pIc?si=t-yQSzr1B1SfHvL4',
    

  },
  {
    isHot: true,
    header: 'GIT GUD WITH GILLIAN GOODMAN',
    author: 'John',
    source: 'https://www.youtube.com/embed/5ttW-1i6pIc?si=t-yQSzr1B1SfHvL4',
    

  },
 ]

 interface CaroCoach {
  author: string
  image: string
  background: string
 }

 export const CaroCoachs: CaroCoach[]=[
  {
    
    author: 'John',
    image: '/coach1.png',
    background: '/coachbg1.svg'
    

  },
  {
    
    author: 'Alex',
    image: '/coach2.png',
    background: '/coachbg2.svg'
    

  },
  {
    
    author: 'Robert',
    image: '/coach1.png',
    background: '/coachbg1.svg'
    

  },
  {
    
    author: 'Jason',
    image: '/coach2.png',
    background: '/coachbg2.svg'
    

  },
 ]


 interface CarosGames{
  image: string
 }

 export const CaroGame= [
  {
    image: '/game1.svg',
  },
  {
    image: '/game2.svg',
  },
  {
    image: '/game1.svg',
  },
  {
    image: '/game4.svg',
  },
  {
    image: '/game2.svg',
  },
 ]

 interface SponsorProp {
  name: string
  image: string
 }

 export const Sponsors =[
  {
    name: 'TEAM LIQUID',
    image:'/sponsor1.svg'
  },
  {
    name: 'RRQ',
    image:'/sponsor2.svg'
  },
  {
    name: 'BOOM',
    image:'/sponsor3.svg'
  },
  {
    name: 'DEWA UNITED',
    image:'/sponsor4.svg'
  },
  {
    name: 'EVOS',
    image:'/sponsor5.svg'
  },
 ]

 interface Reviews{
   review: string
   image: string
   username: string
   coachname: string
   gamename: string
 }

 export const UserReview = [
  {
    review: 'Amazing coaching session! Learned so much about strategy and teamwork.',
    image: '/propic.svg',
    username: 'Alex Johnson',
    coachname: 'Coach Mike',
    gamename: 'League of Legends',
  },
  {
    review: 'Improved my skills drastically in just a few sessions. Highly recommend!',
    image: '/propic.svg',
    username: 'Sara Lee',
    coachname: 'Coach Emily',
    gamename: 'Overwatch',
  },
  {
    review: 'Great experience! The coach helped me understand advanced tactics.',
    image: '/propic.svg',
    username: 'Jake Martinez',
    coachname: 'Coach Dave',
    gamename: 'CS:GO',
  },
  {
    review: 'Learned new techniques that I never thought of before. Fantastic coach!',
    image: '/propic.svg',
    username: 'Megan Brown',
    coachname: 'Coach Sarah',
    gamename: 'Dota 2',
  },
];


interface CoachPageProps {
  ProfileCard: {
    name: string
    image: string
    achievements: string[]
    games: string[]
    roles: string[]
    bio: string


  },
  CoachDashboard:{
    sessions: {
      header: string
      hours: string
      context: string
      howMuch: string
    }[];
    trainingPlans: {
      header: string
      sessionCount: string
      context: string
      fee: string 
    }[];
    courses: {
      vidUrl: string
      name:string
      fee:string 
    }[];
    faqs:{
      header: string
      answer: string
    }[]

  },
  CoachReviews:{
    name: string
    gameName: string
    comment: string
  }[];
}

export const coaches: CoachPageProps[] = [
  {
    ProfileCard: {
      name: "John Doe",
      image: "",
      achievements: ["First Place in CS:GO Tournament", "Top 10 in Dota Championship"],
      games: ["CS:GO", "Mobile Legends", "Dota"],
      roles: ["Support", "Assassin", "Mid", "Jungle"],
      bio: "John Doe is an experienced esports player with a passion for competitive gaming.",
    },
    CoachDashboard: {
      sessions: [
        {
          header: "CS:GO Training Session",
          hours: "10 AM - 12 PM",
          context: "Aim Practice and Strategy",
          howMuch: "$50",
        },
        {
          header: "Dota Strategy Workshop",
          hours: "2 PM - 4 PM",
          context: "Drafting and Team Coordination",
          howMuch: "$75",
        },
      ],
      trainingPlans: [
        {
          header: "CS:GO Basics",
          sessionCount: "5 sessions",
          context: "Introduction to CS:GO mechanics",
          fee: "$200",
        },
        {
          header: "Dota Masterclass",
          sessionCount: "10 sessions",
          context: "Advanced strategies for Dota 2",
          fee: "$350",
        },
      ],
      courses: [
        {
          vidUrl: "https://example.com/csgo-course",
          name: "CS:GO Aim Training Course",
          fee: "$100",
        },
        {
          vidUrl: "https://example.com/dota-course",
          name: "Dota 2 Strategy Guide",
          fee: "$150",
        },
      ],
      faqs: [
        {
          header: "What is CS:GO?",
          answer: "CS:GO is a popular first-person shooter game developed by Valve Corporation.",
        },
        {
          header: "How can I improve my Dota skills?",
          answer: "Improving your Dota skills requires practice, teamwork, and understanding game mechanics.",
        },
      ],
    },
    CoachReviews: [
      {
        name: "Alice",
        gameName: "Mobile Legends",
        comment: "John Doe's coaching helped me climb the ranks!",
      },
      {
        name: "Bob",
        gameName: "CS:GO",
        comment: "Great sessions with valuable insights!",
      },
    ],
  },
 
];



