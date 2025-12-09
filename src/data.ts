import { PortfolioData } from './types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: "HARJOT SINGH",
    title: "Full Stack Software Developer",
    email: "harjotsingh538@gmail.com",
    phone: "(519) 729-5323",
    location: "Kitchener, ON",
    summary: "Software Developer with 9+ years of experience building scalable, high-performance web applications using React, Node.js, TypeScript, and Redux. Proven expertise in developing single-page applications (SPAs), RESTful APIs, microservices. Strong background in Agile/Scrum, CI/CD automation, testing, accessibility, and production support. Passionate about building clean, maintainable, and user-centric applications."
  },
  experience: [
    {
      id: 1,
      company: "Citi",
      location: "Mississuaga, ON",
      position: "Software Developer",
      startDate: "Oct 2022",
      endDate: "Present",
      current: true,
      responsibilities: [
        "Designed and developed high-performance SPAs using React, Hooks, Redux, and TypeScript, improving application responsiveness and maintainability.",
        "Built and maintained RESTful APIs and middleware using Node.js and Express, ensuring secure and efficient data flow.",
        "Implemented state management with Redux, reducing state-related bugs and improving scalability.",
        "Developed, documented, and maintained reusable UI components using Storybook and common custom CSS framework, improving consistency across teams.",
        "Developed unit and integration tests using Jest and React Testing Library, increasing test coverage and system reliability.",
        "Built and maintained CI/CD pipelines using Jenkins and GitHub Actions, accelerating deployment cycles.",
        "Delivered production support, troubleshooting live issues, analysing logs in GCP, and working directly with clients.",
        "Actively participated in Agile ceremonies including sprint planning, daily standups, and retrospectives."
      ],
      technologies: ["React", "Redux", "TypeScript", "Node.js", "Express", "GraphQL", "GCP", "Jenkins", "GitHub Actions", "Jest", "Webpack", "Storybook"]
    },
    {
      id: 2,
      company: "S&P Global",
      location: "London, ON",
      position: "Software Developer",
      startDate: "Jan 2022",
      endDate: "Jun 2022",
      current: false,
      responsibilities: [
        "Developed reusable UI components for a financial investment platform using React and Hooks.",
        "Implemented Redux architecture for complex application state management.",
        "Migrated testing framework from Enzyme to React Testing Library, improving test reliability.",
        "Upgraded legacy React applications to newer versions, resolving dependency conflicts.",
        "Followed Agile/Scrum, participating in bi-weekly sprint planning and daily standups."
      ],
      technologies: ["React", "Redux", "TypeScript", "Node.js", "Express", "MongoDB", "Jest", "Postman", "Jenkins", "Webpack", "Bitbucket"]
    },
    {
      id: 3,
      company: "OpenText",
      location: "Waterloo, ON",
      position: "Software Developer",
      startDate: "June 2019",
      endDate: "Dec 2021",
      current: false,
      responsibilities: [
        "Played a key role in developing the Core Share application for secure file upload/download using React and Node.js.",
        "Built modular, accessible UI components using React, HTML5, CSS3, and TypeScript.",
        "Developed and maintained REST APIs and backend services using Express.js.",
        "Designed and executed PostgreSQL migration scripts for schema updates.",
        "Built Node.js microservices interfacing with Cassandra NoSQL database.",
        "Ensured cross-browser compatibility and WCAG compliance.",
        "Collaborated with business analysts and product teams to refine requirements."
      ],
      technologies: ["React", "Angular", "Node.js", "PostgreSQL", "Cassandra", "Docker", "Jenkins", "Webpack", "GitLab", "JIRA", "Postman"]
    },
    {
      id: 4,
      company: "Concept Interactive Inc.",
      location: "Kitchener, ON",
      position: "Web Developer",
      startDate: "Oct 2016",
      endDate: "May 2019",
      current: false,
      responsibilities: [
        "Developed and deployed web applications compliant with AODA/WCAG accessibility standards.",
        "Created custom responsive components using modern JavaScript frameworks.",
        "Integrated frontend UI with backend services using MVC architecture.",
        "Built React-based reusable components and proof-of-concept demos.",
        "Translated wireframes and design mock-ups into functional UI prototypes.",
        "Actively contributed to daily Scrum meetings."
      ],
      technologies: ["React", "ASP.NET", "SQL Server", "Azure", "C#", "JavaScript", "HTML", "CSS", "TFS"]
    },
    {
      id: 5,
      company: "Desire2Learn",
      location: "Kitchener, ON",
      position: "Courseware Developer",
      startDate: "July 2016",
      endDate: "Sept 2016",
      current: false,
      responsibilities: [
        "Developed engaging and interactive e-learning content, including course outlines, instructional procedures, and study materials.",
        "Designed and implemented single-page applications using Angular, utilizing directives, controllers, and services.",
        "Conducted thorough evaluations of course documents for accuracy and adherence to quality standards.",
        "Collaborated in meetings to perform needs analysis and develop effective learning interventions."
      ],
      technologies: ["Angular JS", "HTML5", "CSS3", "JavaScript", "jQuery", "Bitbucket"]
    },
    {
      id: 6,
      company: "BlackBerry Limited",
      location: "Waterloo, ON",
      position: "Web Developer Intern",
      startDate: "Sept 2015",
      endDate: "Dec 2015",
      current: false,
      responsibilities: [
        "Managed site updates to Blackberry.com using Adobe AEM content management system.",
        "Created, maintained and authored content on webpages using AEM.",
        "Worked with JIRA for bug tracking and used Bitbucket for version control.",
        "Worked cooperatively with team members and participated in scrum meetings."
      ],
      technologies: ["Adobe Experience Manager", "HTML5", "CSS3", "JavaScript", "jQuery", "JIRA"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and checkout functionality. Built with modern web technologies for optimal performance and user experience.",
      demoUrl: "https://ecommerce-platform-nine-sigma.vercel.app/products",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "GitHub Actions", "Vercel", "Render"],
      featured: true
    }
  ],
  skills: {
    frontend: ["React", "Redux", "TypeScript", "JavaScript (ES6+)", "HTML", "CSS", "Storybook"],
    backend: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    databases: ["PostgreSQL", "MongoDB", "Cassandra"],
    testing: ["React Testing Library", "Jest"],
    cloudDevOps: ["GCP", "Docker", "GitHub Actions"],
    tools: ["Git", "GitHub", "Bitbucket", "Postman", "Webpack", "NPM", "Figma", "JIRA"],
    methodologies: ["Agile", "Scrum", "CI/CD"]
  },
  education: [
    {
      id: 1,
      school: "Conestoga College",
      location: "Kitchener, Ontario, Canada",
      program: "Mobile Solutions Development",
      year: "2015-2016"
    },
    {
      id: 2,
      school: "Indo Global College of Engineering",
      location: "Mohali, Punjab, India",
      program: "Bachelor of Computer Science Engineering",
      year: "2010-2014"
    }
  ],
  social: {
    github: "https://github.com/harjotsingh3878",
    linkedin: "https://www.linkedin.com/in/harjotsingh3878/",
    email: "harjotsingh538@gmail.com"
  }
};
