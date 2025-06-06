import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/study.json";

const About = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section
            id="about"
            className={`py-20 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 transition-all duration-500 
                ${darkMode ? "bg-black bg-opacity-90 text-white" : "bg-gray-100 text-gray-900"}`}
        >
            {/* Content Section */}
            <motion.div 
                className="container mx-auto lg:w-1/2 text-center md:text-left"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Title */}
                <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-purple-400" : "text-purple-700"}`}>
                    About Me
                </h1>

                {/* Description */}
                <p className="text-lg leading-relaxed mb-6">
                    Hi there! I'm <span className="font-semibold text-purple-600">Sanaul Islam Zihad</span>, currently pursuing my degree in Computer Science and Engineering at North South University. I have a keen interest in competitive programming, especially using <span className="font-semibold text-purple-600">C++</span> on platforms like Codeforces. As a <span className="font-semibold text-purple-600">Front-End Developer</span>, I enjoy creating intuitive and engaging web applications. I'm always eager to learn new technologies and improve my skills through various projects.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    Outside of programming, I am passionate about exploring the latest advancements in technology. I love experimenting with new tools and frameworks to stay ahead in the tech world. My goal is to continuously grow and contribute to innovative projects that make a difference.
                </p>

                {/* Fun Facts */}
                <div className="mt-8">
                    <h2 className={`text-3xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Fun Facts</h2>
                    <ul className="list-disc pl-5 space-y-3">
                        <li>I enjoy tackling challenging problems on competitive programming platforms.</li>
                        <li>Exploring new technologies and frameworks is my favorite pastime.</li>
                        <li>In my free time, I love playing strategy games to sharpen my problem-solving skills.</li>
                    </ul>
                </div>
            </motion.div>

            {/* Lottie Animation */}
            <motion.div 
                className="lg:w-1/2 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Lottie 
                    animationData={animationData} 
                    loop 
                    autoplay 
                    className="w-3/4 sm:w-1/2"
                />
            </motion.div>
        </section>
    );
};

export default About;
