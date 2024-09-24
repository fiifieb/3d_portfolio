import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  // nodejs,
  // mongodb,
  git,
  figma,
  threejs,
  python,
  java,
  typescript,
  swift,
  webdev,
  viable,
  cornell,
  img2048,
  iris,
  build
} from "../assets";

export const navLinks = [
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
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
{
  name:"python",
  icon:python
},
{
  name:'java',
  icon:java
},
{
  name:"typescript",
  icon: typescript
},
{
  name:"swift",
  icon:swift
}
];

const experiences = [
  {
    title: "Consultant",
    company_name: "CS1110 - Introduction to Computing",
    icon: cornell,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Demonstrated proficiency in Python, assisting 700+ students in mastering syntax and problem-solving techniques ",
      "Developed and delivered engaging lesson plans biweekly, tailored to diverse learning styles and effectively communicating fundamental concepts in computer science",
      "Fostered a supportive and inclusive classroom environment that encouraged student participation and celebrated diversity, promoting a culture of respect and collaboration among peers ",
    ],
  },

  {
    title: "Apprentice",
    company_name: "ViableEdu Fintech Program",
    icon: viable,
    iconBg: "#FFFFFF",
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
    title: "Team Lead",
    company_name: "Iris",
    icon: iris,
    iconBg: "#FFFFFF",
    date: "April 2024 - May 2024",
    points: [
      "Oversaw 5 developers to create Iris, an application to create personalized scheduling tool for users",
      "Organized weekly meetings for progress reports and for team members to give feedback and receive help",
      "Implemented user friendly interface using SwiftUI, allowing users to input events, setting priorities and deadlines to ensure optimal scheduling"
    ],
  },

];


const projects = [
  {
    name: "Timetable",
    description:
      "[IN PROGRESS]Application to allow Cornell students to automatically add exam information to calendar when available.",
    tags: [
      {
        name: "SQLite3",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "SQLAlchemy",
        color: "pink-text-gradient",
      },
      {
        name: "BeautifulSoup",
        color: "pink-text-gradient",
      },      
      {
        name: "SwiftUI",
        color: "pink-text-gradient",
      },
    ],
    image: build,
    source_code_link: "https://github.com/",
  },
    {
    name: "2048",
    description:
      "2048 game created entirely using PyGame.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: img2048,
    source_code_link: "https://github.com/fiifieb/2048",
  },
  {
    name: "SwishVision",
    description:
      "Basketball shot predictor created with cvzone library.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: img2048,
    source_code_link: "https://github.com/fiifieb/SwishVision",
  },
  {
    name: "Iris",
    description:
      "Personal scheduling tool made with Swift and Python.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Swift",
        color: "blue-text-gradient",
      },

    ],
    image: iris,
    source_code_link: "https://github.com/fiifieb/Iris",
  },
];

export { technologies, experiences,projects};
