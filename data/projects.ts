import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "job-tracker",
    title: "JobTracker Pro",
    tagline: "A full-stack application to organize the job search process.",
    description:
      "A comprehensive web application that helps job seekers track applications, manage interview notes, and prepare with an interview question bank. Features a React frontend and a Node.js REST API.",
    problem:
      "Job seekers often lose track of where they applied, miss follow-up dates, and struggle to organize interview preparation across multiple companies.",
    solution:
      "Built a secure, full-stack platform with JWT authentication. Engineered a Kanban board with drag-and-drop functionality, integrated Recharts for visual data analytics, and connected a MongoDB Atlas database to a custom Express API.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    imageUrl: "/images/job-tracker.png",
    liveUrl: "https://job-tracker-pro-xi.vercel.app/",
    githubUrl: "https://github.com/Hyrummorales23/JobTracker-Pro",
    featured: true,
  },
  {
    id: "artisan-marketplace",
    title: "Artisan Marketplace",
    tagline: "A collaborative Next.js e-commerce platform for local creators.",
    description:
      "A team-built online marketplace connecting artisans with customers. Features product listings, artisan profiles, responsive design, and a scalable component architecture.",
    problem:
      "Local artisans need an accessible platform to sell handcrafted goods without paying high fees to massive e-commerce corporations.",
    solution:
      "Collaborated in an Agile team to build the frontend using Next.js App Router and TypeScript. Designed a reusable component library, implemented CSS Modules for styling, and utilized Git feature branches for seamless team collaboration.",
    techStack: ["Next.js", "TypeScript", "CSS Modules", "Git"],
    imageUrl: "/images/artisan-marketplace.png",
    liveUrl: "https://handcrafted-heaven.vercel.app/",
    githubUrl: "https://github.com/Hyrummorales23/team-activity-week-2",
    featured: true,
  },
  {
    id: "trackstar-api",
    title: "TrackStar API",
    tagline: "A robust RESTful API for a personal task and habit tracker.",
    description:
      "A backend-only project focused on building secure, scalable web services. Includes full CRUD operations for tasks and habits, session management, and complete Swagger documentation.",
    problem:
      "Frontend applications need a reliable, well-documented backend to handle user data securely and validate incoming requests.",
    solution:
      "Developed a Node.js and Express API connected to MongoDB. Implemented custom middleware for error handling and validation, wrote comprehensive API documentation using Swagger, and secured endpoints using OAuth.",
    techStack: ["Node.js", "Express", "MongoDB", "Swagger", "OAuth"],
    imageUrl: "/images/trackstar-api.png",
    githubUrl: "https://github.com/Hyrummorales23/trackstar-api",
    featured: true,
  },
  {
    id: "cpp-task-manager",
    title: "C++ Task Manager",
    tagline:
      "A console-based application demonstrating core software engineering.",
    description:
      "A robust To-Do List Manager built entirely in C++. This project steps away from web development to showcase deep understanding of object-oriented design, data structures, and memory management.",
    problem:
      "Web applications abstract away low-level memory management and data structures. Proving proficiency in a compiled language demonstrates a strong foundation in computer science fundamentals.",
    solution:
      "Utilized C++11 standards, Standard Template Library (STL) containers, and File I/O for persistent storage. Built a fully functional CRUD application with a clean separation of concerns between the data models and the user interface.",
    techStack: ["C++", "OOP", "STL", "File I/O"],
    imageUrl: "/images/cpp-task.png",
    // No live URL for a console app
    githubUrl: "https://github.com/Hyrummorales23/CPP_Task_Manager",
  },
];
