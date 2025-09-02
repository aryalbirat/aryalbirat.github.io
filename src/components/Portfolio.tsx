import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Maximize2, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cricksy – A Smart Cricksal Booking System",
    description:
      "Cloud-native cricket court booking system with role-based dashboards, real-time bookings, secure authentication, and cloud deployment.",
    category: "Web Development",
    image: "/Cricksy.png",
    technologies: [
      "MongoDB",
      "Express",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Redux",
      "Docker",
      "AWS",
    ],
    githubUrl: "https://github.com/aryalbirat/Cricksy",
  },
  {
    id: 2,
    title: "ClassCam – Real-time student attentiveness monitoring system",
    description:
      "AI-powered web application for real-time classroom attentiveness monitoring with video feed, analytics, and secure authentication.",
    category: "Web Development",
    image: "/ClassCam.png",
    technologies: [
      "MongoDB",
      "Express",
      "React.js",
      "Node.js",
      "Flask",
      "YOLOv5",
      "Tailwind CSS",
    ],
    // liveUrl: "https://example.com",
    githubUrl: "https://github.com/aryalbirat/ClassCam",
  },

  {
    id: 3,
    title: " BlissSalon - Beauty Salon Booking System",
    description:
      "A full-stack web application for managing beauty salon appointments and services",
    category: "Web Development",
    image: "/BlissSalon.png",
    technologies: [
      "MongoDB",
      "Express",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Typescript",
    ],
    githubUrl: "https://github.com/aryalbirat/BlissSalon/",
  },

  // {
  //   id: 4,
  //   title: "TextUtils - Smart Text Management Application",
  //   description:
  //     "A full-stack web application for transforming and storing text with secure user authentication.",
  //   category: "Web Development",
  //   image:
  //     "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80",
  //   technologies: ["MongoDB", "Express", "React.js", "Node.js", "Tailwind CSS"],
  //   githubUrl: "https://github.com/aryalbirat/Text-Utils",
  // },
  // {
  //   id: 5,
  //   title: "Linkly – Privacy-First URL Shortener with Built-in Analytics",
  //   description:
  //     "Secure and modern URL shortening service with link management, analytics, JWT authentication, and a responsive, privacy-focused design.",
  //   category: "Web Development",
  //   image:
  //     "https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&q=80",
  //   technologies: [
  //     "MongoDB",
  //     "Express",
  //     "React.js",
  //     "Node.js",
  //     "Tailwind CSS",
  //     "Python",
  //     "JWT",
  //   ],
  //   githubUrl: "https://github.com/aryalbirat/Linkly",
  // },
  // {
  //   id: 6,
  //   title: "Carelink Hospital Portal – Full-Stack Hospital Management System",
  //   description:
  //     "Comprehensive hospital management portal with role-based authentication, CRUD operations, appointment scheduling, and responsive design built with Next.js and MongoDB.",
  //   category: "Web Development",
  //   image:
  //     "https://images.unsplash.com/photo-1588776814546-5b0b35f3a1e0?auto=format&fit=crop&q=80",
  //   technologies: [
  //     "Next.js",
  //     "React.js",
  //     "Tailwind CSS",
  //     "MongoDB",
  //     "Mongoose",
  //     "JWT",
  //     "Vercel",
  //   ],
  //   githubUrl: "https://github.com/aryalbirat/hospital-portal",
  //   liveUrl: "https://hospital-portal-seven.vercel.app/",
  // },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["all", "Web Development", "Web Design", "Graphic Design"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);
  return (
    <section id="portfolio" className="py-10 sm:py-16 bg-secondary-950">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Work</h2>
          <p className="section-subtitle mb-8">
            Explore my latest projects and creative endeavors
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                  filter === category
                    ? "bg-gradient-to-r from-primary-600 to-primary-400 text-white"
                    : "bg-secondary-800 text-secondary-100 hover:bg-secondary-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                className="card group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary-100 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-secondary-700 text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {/* {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-primary-500/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500/30 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )} */}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-primary-500/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500/30 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-primary-500/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500/30 transition-colors duration-300"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-secondary-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="card max-w-4xl w-full max-h-[90vh] overflow-y-auto border-primary-500/30"
              >
                <div className="relative h-96 -mx-6 -mt-6 mb-6 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/40 to-transparent" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary-800/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500/30 transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-secondary-100 mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary-700 text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {/* {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center gap-2">
                        <ExternalLink className="w-5 h-5" />
                        View Live
                      </span>
                    </motion.a>
                  )} */}
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="outline-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center gap-2">
                        <Github className="w-5 h-5" />
                        View Code
                      </span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
