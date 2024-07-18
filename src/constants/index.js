import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  webdev,
  viable,
  cornell,
  iris
} from "../assets";

export const navLinks = [
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Team Lead",
    company_name: "Iris",
    icon: iris,
    iconBg: "#E6DEDD",
    date: "April 2024 - May 2024",
    points: [
      "Oversaw 5 developers to create Iris, an application to create personalized scheduling tool for users",
      "Organized weekly meetings for progress reports and for team members to give feedback and receive help",
      "Implemented user friendly interface using SwiftUI, allowing users to input events, setting priorities and deadlines to ensure optimal scheduling"
    ],
  },
  {
    title: "Apprentice",
    company_name: "ViableEdu Fintech Program",
    icon: viable,
    iconBg: "#383E56",
    date: "July 2024",
    points: [
      "Completed multiple virtual programs focused on foundational and applied concepts in capital markets, market structure, personal finance, fintech, and entrepreneurship",
      "Developed skills in critical market concepts and practical applications of financial technology",
      "Gained theoretical knowledge of blockchain technology and cryptocurrency transactions through online modules",
    ],
  },
  {
    title: "Workshop Coordinator",
    company_name: "Cornell Webdev",
    icon: webdev,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      'Spearheaded weekly workshops to teach full stack web development to 50+ beginner developers through project based learning', 
      'Introduced participants to front end tools such as HTML, CSS and JavaScript, as well as popular frameworks and libraries such as React',
      'Guided students to set up developer environments, including installing necessary applications, setting up version control with Git and configuring databases'
      
    ],
  },
 

  {
    title: "Consultant",
    company_name: "CS1110 - Introduction to Computing",
    icon: cornell,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Demonstrated proficiency in Python, assisting 700+ students in mastering syntax and problem-solving techniques ",
      "Developed and delivered engaging lesson plans biweekly, tailored to diverse learning styles and effectively communicating fundamental concepts in computer science",
      "Fostered a supportive and inclusive classroom environment that encouraged student participation and celebrated diversity, promoting a culture of respect and collaboration among peers ",
    ],
  },
];


// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export { technologies, experiences};
