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
