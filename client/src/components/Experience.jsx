import React from 'react';
import { motion } from 'framer-motion';
import UPF from '../img/download.png'
import Lembas from '../img/lembas.png'
const experiences = [
  {
    id: 1,
    title: 'Web Developer Intern',
    company: 'Lembas',
    date: 'Sep 2023 - Nov 2023',
    description:
      'For the Lembas project, I collaborated on a website that serves as a platform connecting startups with angel investors. My responsibilities included frontend and backend development using the MERN stack, with a focus on creating a seamless user experience. I implemented features such as user profiles, matchmaking algorithms, and secure messaging, aiming to facilitate meaningful connections between startups and investors to drive innovation and growth.',
    image: Lembas,
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'KWF Foundation',
    date: 'Dec 2023 - March 2024',
    description:
      'At the Kevin Winter Foundation (KWF), I worked on utilizing NFT technology in logins and access, exploring innovative solutions for authentication and security. My role involved developing strategies to enhance user experience and security using blockchain technology. I collaborated with the team to implement NFT-based solutions that align with KWFs mission of supporting education and community development.',
    image: 'https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'UPF Africa',
    date: 'March 2023 - June 2024',
    description:
      'At the Universal Peace Federation, I developed a complex database for the African branch, managing over 13,000 individuals with sub-regional restrictions and activity approvals. I contributed to projects involving WordPress, Django, and Cardano, enhancing my skills in web development and blockchain technology. My work focused on creating a more interconnected world through technology, aligning with the organizations mission of promoting peace and harmony.',
    image: UPF,
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="my-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((experience) => (
            <div key={experience.id} className="bg-gray-300 p-4 shadow-lg rounded-lg">
              <img src={experience.image} alt={experience.title} className="w-full object-center rounded-md h-80 mb-4 bg-black " />
              <h3 className="text-lg font-bold">{experience.title}</h3>
              <p className="text-gray-500">{experience.company}</p>
              <p className="text-gray-500">{experience.date}</p>
              <p className="mt-2">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
