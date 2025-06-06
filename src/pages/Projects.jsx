import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const projects = [
  {
    id: 1,
    name: 'Java Adventure Game',
    image: '/Java game.jpg',
    description:
      'An immersive adventure game developed in Java, featuring rich graphics, interactive gameplay, and a compelling storyline.',
  },
  {
    id: 2,
    name: 'College Management System',
    image: '/c++.JPG',
    description:
      'A comprehensive college management system developed in C++, designed to manage student records, faculty information, and administrative tasks efficiently.',
  },
  {
    id: 3,
    name: 'React Portfolio Website',
    image: '/react.png',
    description:
      'A personal portfolio website created with React.js, showcasing projects, skills, and a blog with a modern, responsive design.',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 transition-all duration-300"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative group rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transform transition-all duration-500 ease-in-out"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover transition-all duration-500 ease-in-out group-hover:opacity-90 group-hover:blur-sm"
            />

            <div className="p-6 relative">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              <Link
                to={`/projects/${project.id}`}
                className="inline-block px-6 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all duration-300"
              >
                View More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;