import Project1 from './assets/project1.jpeg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpeg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.jpg';

import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  // {
  //   name: 'Testimonials',
  //   path: 'testimonial',
  // },
  // {
  //   name: 'Pricing',
  //   path: 'pricing',
  // },
  // {
  //   name: 'Blog',
  //   path: 'blog',
  // },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'FrontEnd Development',
    title: 'Web Design ',
    description:
      'A frontend developer creates and manages the visual aspects of websites and applications, ensuring a smooth and engaging user experience across different devices.',
  },
  {
    id: 2,
    name: ' BackEnd Development ',
    title: ' Functionality & Security ',
    description:
      'A backend developer handles the server-side of web apps, focusing on databases, APIs, and performance, using languages like Java, or Node.js, and works with frontend developers to ensure a smooth user experience.',
  },
  {
    id: 3,
    name: ' Amazon Web Services ',
    title: ' Foundation in Cloud Computing ',
    description:
      ' An AWS Cloud Practitioner is a foundational certification that verifies basic knowledge of AWS cloud concepts, services, security, and pricing, serving as a stepping stone for deeper cloud expertise. ',
  },
  {
    id: 4,
    name: ' UI/UX ',
    title: ' User-Friendly Designs ',
    description:
      ' UI/UX design aims to create user-friendly and engaging digital experiences. UI focuses on visual design and layout, while UX ensures a seamless and enjoyable overall experience. Together, they enhance usability and satisfaction. ',
  },
  {
    id: 5,
    name: ' Extension Development ',
    title: ' Custom Solutions ',
    description:
      'An extension developer creates add-ons to enhance software or browsers, building custom features and integrations to improve functionality and user experience.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'JAVA',
    percentage: 100,
    description:
      'Java is a versatile, object-oriented language known for building cross-platform applications, widely used in web, mobile, and enterprise software.',
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 100,
    description:
      'JavaScript is a versatile language for creating dynamic, interactive web pages, essential for front-end development.',
  },

  {
    id: 3,
    name: 'Html',
    percentage: 100,
    description:
      'HTML is the core language for building web pages. It structures content with elements like text, images, and links. ',
  },

  {
    id: 4,
    name: 'Css',
    percentage: 100,
    description:
      'CSS is a styling language that controls the appearance of web pages, defining layout, colors, and design.',
  },

  {
    id: 5,
    name: 'React.js',
    percentage: 100,
    description:
      'React is a JavaScript library for building user interfaces, allowing for reusable components and faster development of single-page applications.',
  },

  {
    id: 6,
    name: 'Node.js',
    percentage: 100,
    description:
      'Node.js lets you run JavaScript on the server side, using an event-driven, non-blocking model for high-performance applications.',
  },
  {
    id: 7,
    name: 'Express.js',
    percentage: 100,
    description:
      'Express.js is a Node.js framework for building server-side applications. It offers a  flexible design. It simplifies creating robust and scalable apps.',
  },
  {
    id: 8,
    name: 'AWS',
    percentage: 100,
    description:
      'The AWS Cloud Practitioner certification covers basic AWS cloud services, architecture, and pricing for beginners.',
  },
  {
    id: 9,
    name: 'SQL',
    percentage: 100,
    description:
      'SQL is used for managing and querying relational databases. It allows for data manipulation, retrieval, and schema management.',
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Branding',
    title: 'Zorro',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 2,
    img: Project2,
    category: 'UI UX Design',
    title: 'Gooir',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 3,
    img: Project3,
    category: 'Development',
    title: 'Explore',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 4,
    img: Project4,
    category: 'Photography',
    title: 'Mozar',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 5,
    img: Project5,
    category: 'Development',
    title: 'Stay Fit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 6,
    img: Project6,
    category: 'Branding',
    title: 'Kana',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

export const cv = [
  {
    id: 1,
    title: 'Vellore Institute of Technology Bhopal',
    subtitle: 'Computer Science and Engineering',
    date: '2021 - 2025',
    description:
      'I am currently pursuing my B.Tech in Computer Science and Technology at Vellore Institute of Technology, one of the leading technical universities in India. Throughout my academic journey, I have acquired a strong foundation in software engineering principles, algorithms, and data structures. I have honed my skills through various practical projects, particularly in web development, where I have gained hands-on experience in building responsive, user-centric websites and applications.',
    category: 'education',
  },

  {
    id: 2,
    title: 'St Johns School(ICSE)',
    subtitle: 'PCM + Computer Student',
    date: '2021',
    description:
      ' I have studied PCM (Physics, Chemistry, Mathematics) alongside Computer Science at St. Johns School, I achieved 73% during that year—a solid performance reflecting my capability in both analytical and technical subjects. This foundational knowledge in core scientific and computational fields has paved the way for my continued growth and expertise, especially as I now pursue a career in Computer Science and Technology.',
    category: 'education',
  },

  {
    id: 3,
    title: 'St Johns School(ICSE)',
    subtitle: 'High School',
    date: '2019',
    description:
      'I completed my high school education at St. Johns School, achieving a score of 72%. This period laid the groundwork for my academic journey, as I balanced core subjects like Physics, Chemistry, Mathematics, and Computer Science and many more . St. Johns School provided a strong foundation, fostering my interest in technology and science, which I have continued to build upon in your current pursuits.',
    category: 'education',
  },

  {
    id: 4,
    title: 'Software Engineer - Intern',
    subtitle: 'Amatres Technologies Private Limited',
    date: 'June 2024 - August 2024',
    description:
      'At Amatres Technologies Private Limited, I worked as a web developer on a new project, where I gained valuable hands-on experience in web development. This role allowed me to collaborate with a dynamic team, honing my technical skills and contributing to a project that enhanced my understanding of web technologies and teamwork in a professional environment.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Freelancer',
    subtitle: 'Fiverr.com',
    date: 'June 2024',
    description:
      'With freelancing experience on the Fiverr platform, I have worked on a variety of projects, including Chrome extension development, web development, and debugging code. This hands-on experience has provided me  with real-world insight into working with clients, understanding their needs, and delivering solutions that meet their requirements. Managing these projects independently has sharpened my problem-solving abilities and enhanced my  communication skills, making me more adaptable to client expectations in a professional way.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Project Developement',
    subtitle: 'Personal Projects',
    date: '2022-ongoing',
    description:
      'I have developed multiple projects as part of my learning journey, which has significantly expanded my knowledge in web development and related technologies. Each project has provided me with valuable hands-on experience, refining my skills and deepening my understanding of complex concepts. This accumulated expertise will undoubtedly prove beneficial in future endeavors, enabling me to approach new challenges with confidence and continue evolving as a developer.',
    category: 'experience',
  },
];

// export const testimonials = [
//   {
//     id: 1,
//     img: Testimonial1,
//     name: 'Barbara Wilson',
//     author: 'CEO Company',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 2,
//     img: Testimonial2,
//     name: 'Charlie Smith',
//     author: 'Designer',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 3,
//     img: Testimonial3,
//     name: 'Roy Wang',
//     author: 'Manager GYM',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 4,
//     img: Testimonial4,
//     name: 'Jennifer Smith',
//     author: 'CEO & Founder',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: 5,
//     img: Testimonial5,
//     name: 'Paul Freeman',
//     author: 'Photographer',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
// ];
