import {
  backend,
  coverhunt,
  css,
  dcc,
  docker,
  figma,
  frontend,
  git,
  graphql,
  html,
  javascript,
  kelhel,
  komikult,
  leaderboard,
  math,
  microverse,
  movie,
  nodejs,
  nyeusi,
  postgresql,
  prototyping,
  reactjs,
  redux,
  rubyrails,
  space,
  tailwind,
  typescript,
  ux,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Enterprise Application Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: ux,
  },
  {
    title: 'DevOps',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Insightsoftware',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 2023 - Oct 2024',
  },
  {
    title: 'Software Engineer (Co-op)',
    company_name: 'Tegus',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2022 - Aug 2022',
  },
  {
    title: 'Web Developer (Contract)',
    company_name: 'Invoke',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sep 2020 - Jul 2021',
  },
  {
    title: 'Teaching Assistant',
    company_name: 'University of British Columbia',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2020 - Apr 2020',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Pokemon visualizer',
    description: 'An easy-to-use Pokedex to optimize your teams stats.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'D3.js',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/DanielAu0/visualizing-pokemon',
    demo: 'https://github.com/DanielAu0/visualizing-pokemon',
  },
  {
    id: 'project-2',
    name: 'Price Tracker',
    description:
      'A  price tracker that monitors the latest prices and sends real-time notifications on price drops.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'pandas',
        color: 'green-text-gradient',
      },
      {
        name: 'parsel',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/DanielAu0/Price-Scraper',
    demo: 'https://github.com/DanielAu0/Price-Scraper',
  },
  {
    id: 'project-3',
    name: 'Stock predictor',
    description: 'A simple predictor for the price of the S&P500 stock market index.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/DanielAu0/stock-predictor',
    demo: 'https://github.com/DanielAu0/stock-predictor',
  },
  {
    id: 'project-4',
    name: 'Deals Finder',
    description: `A single-page application that allows users to search for any deals in the area.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/DanielAu0/deals-finder',
    demo: 'https://github.com/DanielAu0/deals-finder',
  },
];

export { services, technologies, experiences, projects };
