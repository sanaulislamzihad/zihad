import project1 from '../assets/hotel-management.png';
import project2 from '../assets/food-sharing.png';
import project3 from '../assets/movie-portal.png';

const projects = [
  {
    id: 1,
    name: 'Java Adventure Game',
    image: project1,
    description: 'An immersive adventure game developed in Java, featuring rich graphics, interactive gameplay, and a compelling storyline.',
    technologies: ['Java', 'LibGDX', 'OpenGL'],
    liveLink: '#',
    githubLink: '#',
    challenges: 'Developing a seamless and engaging gameplay experience with complex graphics rendering and physics simulation was a major challenge. Ensuring cross-platform compatibility and optimizing performance for various devices also posed significant hurdles.',
    improvements: 'Future improvements include adding multiplayer support, expanding the game world with new levels and characters, and integrating a community forum for player interaction and feedback.',
  },
  {
    id: 2,
    name: 'C++ Financial Software',
    image: project2,
    description: 'A robust financial software application built with C++, offering real-time data processing, analytics, and secure transactions.',
    technologies: ['C++', 'Qt', 'SQLite'],
    liveLink: '#',
    githubLink: '#',
    challenges: 'Implementing secure and efficient data processing algorithms while maintaining a user-friendly interface was challenging. Ensuring data integrity and security in financial transactions was also a critical aspect.',
    improvements: 'Future plans include integrating AI-driven analytics for better financial insights, expanding the software to support more financial instruments, and enhancing the user interface for better usability.',
  },
  {
    id: 3,
    name: 'React Portfolio Website',
    image: project3,
    description: 'A personal portfolio website created with React.js, showcasing projects, skills, and a blog with a modern, responsive design.',
    technologies: ['React', 'Gatsby', 'GraphQL'],
    liveLink: '#',
    githubLink: '#',
    challenges: 'Ensuring a seamless and responsive design across all devices was a key challenge. Optimizing the site for fast loading times and integrating dynamic content with GraphQL also required careful planning.',
    improvements: 'Future enhancements include adding a content management system for easier updates, integrating a contact form with email notifications, and expanding the blog section with more interactive features.',
  },
];

export default projects;
