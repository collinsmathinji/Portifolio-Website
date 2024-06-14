import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="my-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 p-12 items-center">
        <div className="mt-4 md:mt-0 bg-gray-300 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">DirectEd Bootcamp</h3>
            <div className="my-8 flex flex-col md:flex-row items-center">
    <img src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project" className="w-full h-80 rounded-md shadow-lg" />
    <div className="text-lg text-gray-700 ml-0 md:ml-4 mt-4 md:mt-0">
            <p className="text-lg text-gray-700">
            DirectEd bootcamp was a transformative experience that accelerated my journey into web development. The bootcamp's curriculum was comprehensive, covering a wide range of topics including frontend technologies like HTML, CSS, and JavaScript, as well as backend frameworks like Node.js and Express. Through hands-on projects and assignments, I gained practical experience in building web applications from scratch, learning industry best practices and modern development workflows. Additionally, I had the opportunity to learn the MERN stack and develop soft skills from leading world experts, further enhancing my abilities as a developer.
            </p>
          </div>
          </div>
          </div>
          <div className="mt-4 md:mt-0 bg-gray-300 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Apprenticeship at Companies under Experience</h3>
            <div className="my-8 flex flex-col md:flex-row items-center">
    <img src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project" className="w-full h-80 rounded-md shadow-lg" />
    <div className="text-lg text-gray-700 ml-0 md:ml-4 mt-4 md:mt-0">
            <p className="text-lg text-gray-700">
            My time at companies under experience served as a transformative apprenticeship, providing me with invaluable insights and hands-on experience in new technologies beyond the MERN stack. Collaborating with seasoned developers, I delved into a diverse range of tech stacks, including [List of technologies], expanding my technical repertoire and honing my problem-solving skills.  By working on real-world projects and navigating complex challenges, I gained a comprehensive understanding of the software development lifecycle, from conception to deployment, setting a strong foundation for my career in web development.
            </p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
