// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?
// DATA SCIENCE DATABASES DESIGN FRAMEWORKS JAVASCRIPT LANGUAGES MACHINE LEARNING OTHER PYTHON TOOLS WEB DEVELOPMENT Mobile Development

const skills = [{
  title: 'Javascript',
  competency: 4,
  category: ['Web Development', 'Languages', 'Javascript'],
},
{
  title: 'Node.JS',
  competency: 3,
  category: ['Web Development', 'Javascript', 'Frameworks'],
},
{
  title: 'React',
  competency: 3,
  category: ['Web Development', 'Javascript', 'Frameworks'],
},
{
  title: 'Bash',
  competency: 2,
  category: ['Tools', 'Languages'],
},
{
  title: 'Amazon Web Services',
  competency: 2,
  category: ['Web Development', 'Tools'],
},
{
  title: 'Heroku',
  competency: 2,
  category: ['Web Development', 'Tools'],
},
{
  title: 'MongoDB',
  competency: 3,
  category: ['Web Development', 'Databases'],
},
{
  title: 'Firebase',
  competency: 4,
  category: ['Web Development', 'Mobile Development', 'Databases'],
},
{
  title: 'SQL',
  competency: 4,
  category: ['Web Development', 'Databases', 'Languages'],
},
{
  title: 'Express.JS',
  competency: 2,
  category: ['Web Development', 'Javascript', 'Frameworks'],
},
{
  title: 'Flask',
  competency: 2,
  category: ['Web Development', 'Python', 'Frameworks'],
},
{
  title: 'Git',
  competency: 4,
  category: ['Tools'],
},
{
  title: 'Numpy',
  competency: 4,
  category: ['Data Science', 'Machine Learning', 'Python'],
},
{
  title: 'Tensorflow',
  competency: 2,
  category: ['Data Science', 'Machine Learning', 'Python'],
},
{
  title: 'Keras',
  competency: 2,
  category: ['Data Science', 'Machine Learning', 'Python'],
},
{
  title: 'Jupyter',
  competency: 5,
  category: ['Data Science', 'Python'],
},
{
  title: 'HTML',
  competency: 4,
  category: ['Web Development', 'Languages'],
},
{
  title: 'CSS',
  competency: 3,
  category: ['Web Development', 'Languages'],
},
{
  title: 'Python',
  competency: 5,
  category: ['Languages', 'Python'],
},
{
  title: 'C++',
  competency: 3,
  category: ['Languages'],
},
{
  title: 'MATLAB',
  competency: 3,
  category: ['Languages'],
},
{
  title: 'Pandas',
  competency: 2,
  category: ['Data Science', 'Python'],
},
{
  title: 'Matplotlib',
  competency: 4,
  category: ['Data Science', 'Machine Learning', 'Python'],
},
{
  title: 'Scikit-Learn',
  competency: 4,
  category: ['Machine Learning', 'Data Science', 'Python'],
},
{
  title: 'PyTorch',
  competency: 4,
  category: ['Machine Learning', 'Data Science', 'Python', 'Framework'],
},
{
  title: 'Pygame',
  competency: 3,
  category: ['Python'],
},
{
  title: 'Java',
  competency: 5,
  category: ['Languages'],
},
{
  title: 'Swift',
  competency: 4,
  category: ['Mobile Development', 'Languages'],
},
{
  title: 'MapBox',
  competency: 3,
  category: ['Mobile Development'],
},
{
  title: 'Photoshop',
  competency: 2,
  category: ['Design'],
},
{
  title: 'Wireframing',
  competency: 3,
  category: ['Design'],
},
{
  title: 'Figma',
  competency: 3,
  category: ['Design'],
},
{
  title: 'Rhino',
  competency: 2,
  category: ['Design'],
},
{
  title: 'Docker',
  competency: 2,
  category: ['Tools'],
},
{
  title: 'Product Development',
  competency: 2,
  category: ['Other'],
},
{
  title: 'Negotiation',
  competency: 2,
  category: ['Other'],
},
{
  title: 'Entrepreneurship',
  competency: 4,
  category: ['Other'],
},
{
  title: 'Primary Market Research',
  competency: 3,
  category: ['Other'],
},
{
  title: 'Business Model Design',
  competency: 2,
  category: ['Other'],
},
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
