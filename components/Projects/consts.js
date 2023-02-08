import {
  isometricOutstorePng,
  isometricOngkirPng,
  isometricPortfolioPng,
  isometricExpenseTrackerPng,
  isometricPokedexPng,
} from '../../assets/images'

export const PROJECTS = [
  {
    title: 'E-Commerce',
    background: isometricOutstorePng,
    githubUrl: 'https://github.com/troy213/market',
    appUrl: 'https://market.triteraerlangga.com/',
    description:
      'A fully functioning RESTful e-commerce website project with ReactJS, Express, MySQL, JWT Auth, and BCrypt for storing passwords.',
    tags: ['React', 'Express', 'MySQL'],
  },
  {
    title: 'Raja Ongkir',
    background: isometricOngkirPng,
    githubUrl: 'https://github.com/troy213/ongkir',
    appUrl: 'https://app.triteraerlangga.com',
    description:
      'A simple website using external API to check delivery cost estimation from some courier services.',
    tags: ['React', 'NodeJS', 'Express'],
  },
  {
    title: 'Portfolio v1',
    background: isometricPortfolioPng,
    githubUrl: 'https://github.com/troy213/portfolio',
    appUrl: 'https://github.com/troy213/portfolio',
    description:
      'My very first portfolio website, I like this web personally because I put all my effort to draw all the assets from scratch using Adobe Illustrator.',
    tags: ['React', 'NodeJS', 'Express'],
  },
  {
    title: 'Expense Tracker',
    background: isometricExpenseTrackerPng,
    githubUrl: 'https://github.com/troy213/expense-tracker',
    appUrl: 'https://expense-tracker.triteraerlangga.com',
    description:
      'A simple expense tracker app that public can use. You can login as a guest or register as a user. Authentication using JWT httpOnly Cookies and the password is hashed using BCrypt.',
    tags: ['React', 'NodeJS', 'Express'],
  },
  {
    title: 'Pokedex',
    background: isometricPokedexPng,
    githubUrl: 'https://github.com/troy213/pokeapi',
    appUrl: 'https://troy-pokeapi.netlify.app',
    description:
      'I recently took a technical test from an IT company in Indonesia where I was tasked to create a website that consume pokeapi.',
    tags: ['React'],
  },
]
