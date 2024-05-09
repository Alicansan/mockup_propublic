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