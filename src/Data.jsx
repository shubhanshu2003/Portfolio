import Project1 from './assets/project1.jpeg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpeg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.png';
import Project7 from './assets/project7.jpg';
import Project8 from './assets/project8.jpeg';
// import Project9 from './assets/project9.jpg';
import Project10 from './assets/project10.jpg';
import Project11 from './assets/project11.jpeg';

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
      'A backend developer handles the server-side of web apps, focusing on databases, APIs, and performance, using languages like JavaScript, or Node.js, and works with frontend developers to ensure a smooth user experience.',
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
    category: 'Development',
    title: 'ShareTheMeal',
    description:
      'ShareTheMeal is a Website that facilitates the donation of food items by donors as a response to need. Users can post surplus food donations, which our organization collects for distribution to underserved communities. By making the donation process easier, we help reduce food waste so that additional meals can reach families facing food insecurity. Donors connect directly to make an impact, helping local communities and creating a network of caring and generosity. Together we are heading towards a future where no one is hungry. ',
  },
  {
    id: 2,
    img: Project2,
    category: 'Achievement',
    title: 'Design Patient',
    description:
      'This design concept aims to reduce plastic waste in urban and rural areas by converting it into fuel through a pyrolysis process. Powered by solar panels, it heats plastic in an oxygen-free chamber, producing gases that are cooled, collected, and purified into poly fuel. The system includes an induction heater for efficient plastic decomposition using natural energy sources. Designed to minimize household plastic waste, this eco-friendly concept requires minimal external energy, offering a sustainable approach to reducing environmental plastic pollution at the source',
  },
  {
    id: 3,
    img: Project3,
    category: 'Development',
    title: 'ChatAI',
    description:
      'The main aim of ChatAI is to create a highly customizable and intelligent chatbot that offers more than generic responses. Unlike typical chatbots, ChatAI provides in-depth information on topics aligned with user interests, such as study, research, and support. Powered by the Gemini API for advanced interactions and backed by PostgreSQL for storing and recalling context, ChatAI delivers an adaptive, context-aware experience. It enables users to access information efficiently, fostering meaningful conversations tailored to their specific needs and goals. ',
  },
  {
    id: 4,
    img: Project4,
    category: 'Freelancing',
    title: 'UpWork Data Fetcher',
    description:
      'This Chrome extension simplifies gathering and organizing freelancer data from Upwork. It extracts essential details like name, title, description, success rate, hourly rate, and profile likes, saving the data into a downloadable CSV file for easy analysis. The extension can capture information from up to 130 freelancer profiles per session, making it effortless to compare candidates and find the best fit for project requirements. By centralizing this information, users can make faster, more informed hiring decisions.',
  },
  {
    id: 5,
    img: Project5,
    category: 'Certificates',
    title: 'Ethnus MERN FullStack',
    description:
      'The Ethnus MERN FullStack Certificate program provides comprehensive training in MongoDB, Express.js, React, and Node.js (MERN) to equip learners with full-stack development skills. This course covers front-end and back-end technologies, enabling students to build dynamic, data-driven web applications. Through hands-on projects and expert guidance, participants gain proficiency in creating, managing, and deploying scalable web applications. The certification validates expertise in modern web development, making graduates job-ready for roles in software development and enhancing their skills in building efficient, responsive applications.',
  },
  {
    id: 6,
    img: Project6,
    category: 'Development',
    title: 'Portfolio',
    description:
      'I built a personal portfolio using React JS to dynamically showcase my skills, projects, and professional experience. With React.js component-based design, it offers smooth navigation and a responsive layout across devices. The portfolio highlights my coding skills, featuring sections for projects, resume, contact details, and social links. This interactive platform effectively presents my work and enhances my professional visibility, making it easy for potential clients or employers to explore my qualifications and expertise.',
  },
  {
    id: 7,
    img: Project7,
    category: 'Certificates',
    title: 'AWS Cloud Practitioner',
    description:
      'The AWS Cloud Practitioner certification is an entry-level credential designed for individuals looking to gain foundational knowledge of Amazon Web Services (AWS) and cloud computing. It covers core AWS services, security, pricing, and support, equipping candidates with essential cloud concepts. This certification is ideal for those new to cloud technology, including business and technical roles, as it requires no prior cloud experience. Earning the AWS Cloud Practitioner certification demonstrates understanding of AWS principles, enabling individuals to contribute effectively in cloud-based environments.',
  },
  {
    id: 8,
    img: Project8,
    category: 'Development',
    title: 'Electricity Bill Generator',
    description:
      'The Electricity Bill Generator project, developed in Java, streamlines the process of calculating monthly electricity bills. Users simply input the total units consumed and the cost per unit, and the application generates an accurate bill for the month. This tool is designed for efficiency and ease of use, offering a quick way to calculate electricity expenses without complex calculations. It demonstrates Java programming skills through a practical application, helping users manage their electricity costs more effectively while showcasing core problem-solving abilities.',
  },
  {
    id: 9,
    img: Project6,
    category: 'UI UX Design',
    title: 'design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 10,
    img: Project10,
    category: 'Certificates',
    title: 'Applied Machine Learning ',
    description:
      'The Applied Machine Learning Using Python certificate from Coursera provided hands-on training in key machine learning concepts and techniques. Through practical Python applications, the course covered essential areas like data preprocessing, supervised and unsupervised learning, and model evaluation. Topics included regression, classification, clustering, and neural networks, equipping learners with the skills to build, evaluate, and optimize machine learning models. Emphasizing real-world applications, this certification strengthened proficiency in Python libraries like Scikit-Learn, Pandas, and Matplotlib, preparing learners for impactful roles in data science and AI.',
  },
  {
    id: 11,
    img: Project11,
    category: 'Development',
    title: 'SeeCrime',
    description:
      'The SeeCrime project utilizes an ML model with the KNN algorithm to enhance safety by analyzing crime records across various areas and guiding users toward the safest routes. Designed with a focus on women’s safety, this application examines crime data to suggest low-risk paths, helping users avoid high-risk zones during travel. Through machine learning, SeeCrime provides data-driven route recommendations, offering a proactive approach to safer travel. This project demonstrates how technology can play a pivotal role in promoting security and informed decision-making for travelers.',
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
