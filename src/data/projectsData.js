// src/data/projectsData.js
import FPJ1 from "../assets/img/FPJ1.png"
import SPJ2 from "../assets/img/SPJ2.png"

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce UI",
    description: "A beautiful storefront.",
    category: "frontend", // 👈 Added this
    image: "...",
    tags: ["React", "Tailwind"],
    live: "...",
    repo: "..."
  },
  {
    id: 2,
    title: "Auth API",
    description: "Secure login system with JWT.",
    category: "backend", // 👈 Added this
    image: "...",
    tags: ["Node.js", "MongoDB"],
    live: "...",
    repo: "..."
  },
  {
    id: 3,
    title: "Meta Front-End Certificate",
    description: "Completed advanced React course.",
    category: "achievement", // 👈 Added this
    image: "...",
    tags: ["Certificate"],
    live: "...", // Link to certificate
    repo: "" 
  },
  {
    id: 4,
    title: "Retal House Management",
    description: "A beautiful storefront.",
    category: "frontend", 
    image: FPJ1,
    tags: ["React", "Tailwind"],
    live: "https://rental-house-beige.vercel.app/",
    repo: "..."
  },
  {
    id: 4,
    title: "Tech Spark E-commerce",
    description: "A beautiful storefront.",
    category: "frontend", 
    image: SPJ2,
    tags: ["React", "Tailwind"],
    live: "https://techspark-ecommerce.vercel.app/",
    repo: "..."
  },
];