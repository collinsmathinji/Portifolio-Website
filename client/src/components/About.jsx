import React from 'react';
import { motion } from 'framer-motion';
import Collins from '../img/WhatsApp Image 2024-06-11 at 11.03.36_e6f9d2d5.jpg'
const About = () => {
  return (
    <motion.section
      id="about"
       className="my-8 flex flex-col  md:flex-row items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
         <div className="md:w-1/2">
        <img src={Collins} alt="Profile" className="w-80 h-auto mb-10 rounded-md shadow-lg" />
      </div>
      <div className="container mx-auto mb-10">
        <p className="text-lg text-gray-700 ">
          Hi, I'm Collins Mathinji, a passionate Fullstack Web Developer with a keen interest in health and well-being.  I have a strong foundation in Next.js, TypeScript, and the MERN stack, and I'm constantly seeking opportunities to deepen my knowledge and skills.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Over the past year, I've had the opportunity to work on various projects, including developing a complex database for the African branch of the Universal Peace Federation, handling over 13,000 individuals with sub-regional restrictions and activity approvals. I've also worked on projects involving WordPress, Django, and Cardano, further honing my skills in web development and blockchain technology.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          I'm currently working at the Universal Peace Federation, where I continue to expand my expertise in web development and contribute to meaningful projects that make a positive impact. I'm excited about the future of technology and its potential to create a more sustainable and interconnected world.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
