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
    image:"/icons8-facebook.svg",
    name:"facebook",
  },
  {
    image:"/icons8-instagram.svg",
    name:"instagram",
  },
  {
    image:"/icons8-twitterx.svg",
    name:"twitterx",
  },
  {
    image:"/icons8-youtube.svg",
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
  id: string
 }

 export const CaroCoachs: CaroCoach[]=[
  {
    id:'0',
    author: 'John',
    image: '/coach1.png',
    background: '/coachbg1.svg'
    

  },
  {
    id:'1',
    author: 'Alex',
    image: '/coach2.png',
    background: '/coachbg2.svg'
    

  },
  {
    id:'2',
    author: 'Robert',
    image: '/coach1.png',
    background: '/coachbg1.svg'
    

  },
  {
    id:'3',
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
  profileCard: {
    id:string
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
    profileCard: {
      id: "0",
      name: "John Doe",
      image: "/coach1.png",
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
  {
    profileCard: {
      id: "1",
      name: "Jane Smith",
      image: "/coach2.png",
      achievements: ["Champion in Mobile Legends Tournament", "Best Mid Player Award"],
      games: ["Mobile Legends", "Dota", "CS:GO"],
      roles: ["Mid", "Assassin", "Support", "Jungle"],
      bio: "Jane Smith has been a professional gamer for over 5 years and excels in Mobile Legends and Dota.",
    },
    CoachDashboard: {
      sessions: [
        {
          header: "Mobile Legends Strategy Session",
          hours: "1 PM - 3 PM",
          context: "Hero Selection and Tactics",
          howMuch: "$60",
        },
        {
          header: "Dota Skills Workshop",
          hours: "4 PM - 6 PM",
          context: "Advanced Gameplay Techniques",
          howMuch: "$80",
        },
      ],
      trainingPlans: [
        {
          header: "Mobile Legends Mastery",
          sessionCount: "7 sessions",
          context: "In-depth Mobile Legends training",
          fee: "$250",
        },
        {
          header: "Dota Advanced Strategies",
          sessionCount: "8 sessions",
          context: "High-level strategies for competitive play",
          fee: "$300",
        },
      ],
      courses: [
        {
          vidUrl: "https://example.com/mobilelegends-course",
          name: "Mobile Legends Complete Guide",
          fee: "$120",
        },
        {
          vidUrl: "https://example.com/dota-advanced-course",
          name: "Dota Advanced Strategies",
          fee: "$160",
        },
      ],
      faqs: [
        {
          header: "What are the key roles in Mobile Legends?",
          answer: "The key roles in Mobile Legends include Tank, Fighter, Assassin, Mage, Marksman, and Support.",
        },
        {
          header: "How do I improve my rank in Dota?",
          answer: "Consistent practice, understanding game mechanics, and effective communication with your team are crucial.",
        },
      ],
    },
    CoachReviews: [
      {
        name: "Charlie",
        gameName: "Dota",
        comment: "Jane's coaching took my gameplay to the next level!",
      },
      {
        name: "Dave",
        gameName: "Mobile Legends",
        comment: "Excellent coaching sessions, highly recommend!",
      },
    ],
  },
  {
    profileCard: {
      id: "2",
      name: "Mike Johnson",
      image: "/coach1.png",
      achievements: ["MVP in Dota International", "Top 5 in CS:GO World Championship"],
      games: ["Dota", "CS:GO", "Mobile Legends"],
      roles: ["Jungle", "Mid", "Assassin", "Support"],
      bio: "Mike Johnson is a versatile esports player known for his strategic mind and exceptional skills in Dota and CS:GO.",
    },
    CoachDashboard: {
      sessions: [
        {
          header: "Dota Jungle Workshop",
          hours: "11 AM - 1 PM",
          context: "Jungle Pathing and Efficiency",
          howMuch: "$70",
        },
        {
          header: "CS:GO Advanced Tactics",
          hours: "3 PM - 5 PM",
          context: "Team Coordination and Strategy",
          howMuch: "$90",
        },
      ],
      trainingPlans: [
        {
          header: "Dota Jungle Mastery",
          sessionCount: "6 sessions",
          context: "Mastering the Jungle role in Dota",
          fee: "$220",
        },
        {
          header: "CS:GO Team Play",
          sessionCount: "8 sessions",
          context: "Advanced team play techniques",
          fee: "$280",
        },
        
      ],
      courses: [
        {
          vidUrl: "https://example.com/dota-jungle-course",
          name: "Dota Jungle Mastery Course",
          fee: "$130",
        },
        {
          vidUrl: "https://example.com/csgo-tactics-course",
          name: "CS:GO Advanced Tactics",
          fee: "$180",
        },
      ],
      faqs: [
        {
          header: "What is the Jungle role in Dota?",
          answer: "The Jungle role involves farming neutral creeps in the jungle and ganking lanes to help your team.",
        },
        {
          header: "How do I improve my CS:GO team coordination?",
          answer: "Effective communication, understanding your role, and practicing team strategies are essential.",
        },
      ],
    },
    CoachReviews: [
      {
        name: "Eve",
        gameName: "CS:GO",
        comment: "Mike's advanced tactics sessions are a game changer!",
      },
      {
        name: "Frank",
        gameName: "Dota",
        comment: "Learned so much about the Jungle role, highly recommended!",
      },
    ],
  },
  {
    profileCard: {
      id: "3",
      name: "Mike Johnson",
      image: "/coach2.png",
      achievements: ["MVP in Dota International", "Top 5 in CS:GO World Championship"],
      games: ["Dota", "CS:GO", "Mobile Legends"],
      roles: ["Jungle", "Mid", "Assassin", "Support"],
      bio: "Mike Johnson is a versatile esports player known for his strategic mind and exceptional skills in Dota and CS:GO.",
    },
    CoachDashboard: {
      sessions: [
        {
          header: "Dota Jungle Workshop",
          hours: "11 AM - 1 PM",
          context: "Jungle Pathing and Efficiency",
          howMuch: "$70",
        },
        {
          header: "CS:GO Advanced Tactics",
          hours: "3 PM - 5 PM",
          context: "Team Coordination and Strategy",
          howMuch: "$90",
        },
      ],
      trainingPlans: [
        {
          header: "Dota Jungle Mastery",
          sessionCount: "6 sessions",
          context: "Mastering the Jungle role in Dota",
          fee: "$220",
        },
        {
          header: "CS:GO Team Play",
          sessionCount: "8 sessions",
          context: "Advanced team play techniques",
          fee: "$280",
        },
        
      ],
      courses: [
        {
          vidUrl: "https://example.com/dota-jungle-course",
          name: "Dota Jungle Mastery Course",
          fee: "$130",
        },
        {
          vidUrl: "https://example.com/csgo-tactics-course",
          name: "CS:GO Advanced Tactics",
          fee: "$180",
        },
      ],
      faqs: [
        {
          header: "What is the Jungle role in Dota?",
          answer: "The Jungle role involves farming neutral creeps in the jungle and ganking lanes to help your team.",
        },
        {
          header: "How do I improve my CS:GO team coordination?",
          answer: "Effective communication, understanding your role, and practicing team strategies are essential.",
        },
      ],
    },
    CoachReviews: [
      {
        name: "Eve",
        gameName: "CS:GO",
        comment: "Mike's advanced tactics sessions are a game changer!",
      },
      {
        name: "Frank",
        gameName: "Dota",
        comment: "Learned so much about the Jungle role, highly recommended!",
      },
    ],
  }
];



// interface ProfileCard {
//   name: string
//   image: string
//   achievement: string[]
//   games: string[]
//   roles: string[]
//   bio: string
// }

// interface Session {
//   header: string
//   hours: string
//   context: string
//   howMuch: string
// }[]

// interface CoachReview {
//   name: string
//   gameName: string
//   comment: string
// }

// interface CoachPageProps {
//   profileCard: ProfileCard
//   coachDashboard: {
//     sessions: Session[]
//   }
//   coachReviews: CoachReview[]
// }
