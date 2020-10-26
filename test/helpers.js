const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/personal-site/',
    title: 'Kevin Jiang',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/personal-site/about',
    title: 'About | Kevin Jiang',
    heading: 'ABOUT ME',
  },
  {
    route: '/personal-site/projects',
    title: 'Projects | Kevin Jiang',
    heading: 'PROJECTS',
  },
  {
    route: '/personal-site/stats',
    title: 'Stats | Kevin Jiang',
    heading: 'STATS',
  },
  {
    route: '/personal-site/contact',
    title: 'Contact | Kevin Jiang',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
