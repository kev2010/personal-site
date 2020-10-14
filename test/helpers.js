const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Kevin Jiang',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Kevin Jiang',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Kevin Jiang',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Kevin Jiang',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Kevin Jiang',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
