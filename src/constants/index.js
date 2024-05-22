import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  team,
  bellbird,
  chai,
  myportfolio,
  start_saying,
  mijneetschema,
  giverise,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Front End Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
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
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'Front End Developer',
    company_name: 'Team',
    icon: team,
    iconBg: '#383E56',
    date: 'September 2022 - Continuing',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      // 'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      // 'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  // {
  //   title: 'Front End Developer',
  //   company_name: 'Bellbird Technologies',
  //   icon: bellbird,
  //   iconBg: '#E6DEDD',
  //   date: 'May 2024 - Continuing',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //   ],
  // },
  // {
  //   title: 'Web Developer',
  //   company_name: 'Shopify',
  //   icon: shopify,
  //   iconBg: '#383E56',
  //   date: 'Jan 2022 - Jan 2023',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Mijn Eetschema',
    description:
      'This website offers personalized meal plans. Users can create a free account to receive customized dietary recommendations and meal plans tailored to their preferences and nutritional needs.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux-toolkit',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: mijneetschema,
    source_code_link: 'https://www.mijneetschema.nl/',
  },
  {
    name: 'Start Saying More',
    description:
      'With a lack of Minority providers available, Minority groups are more likely to suffer negative side effects from inadequate treatment or misdiagnosis, and falsely believe they have little access to support',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: start_saying,
    source_code_link: 'https://www.startsayingmore.com/',
  },
  {
    name: 'Giverise',
    description:
      'Giverise combines the power of charitable donations and investing to sustainably support the missions of nonprofit organizations of all types and sizes (e.g. educational, faith-based, foundations etc.)',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      // {
      //   name: 'three.js',
      //   color: 'green-text-gradient',
      // },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: giverise,
    source_code_link: 'https://giverise.com/',
  },
  {
    name: 'My Portfolio',
    description:
      'A place where you can contact me and see my details and my works and my skills',
    tags: [
      {
        name: 'vite.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'three.js',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: myportfolio,
    source_code_link: 'https://github.com/sadequlfakir/myportfolio',
  },
  {
    name: 'Buy Me A Chai',
    description:
      'A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'auth.js',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: chai,
    source_code_link: 'https://bitbucket.org/sadequlfakir/buymeachai',
  },
  {
    name: 'Snap SASS Ai',
    description:
      'A platform where anyone can restore his image, Generative Fill,Object Remove, Object Recolor his photos with ai',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'clerk',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/sadequlfakir/snap-sass',
  },
];

export { services, technologies, experiences, testimonials, projects };
