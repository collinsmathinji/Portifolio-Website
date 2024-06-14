import React from 'react';
import { motion } from 'framer-motion';
import Diabetes from '../img/Screenshot (294).png'
import Capital from '../img/Screenshot (295).png'
const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="my-8 flex flex-col md:flex-row items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-5">Personal Projects</h1>
        <div className='bg-gray-300 p-5 rounded-md mb-5 shadow-lg'>
          <h2 className="text-2xl font-semibold mb-2">Diabetes App</h2>
          <div className="my-8 flex flex-col  md:flex-row items-center">
          <img src={Diabetes} alt="Project" className="w-80  h-80 rounded-md shadow-lg" />
          <p className="text-lg text-gray-700 ml-10">
          The Diabetes App is a comprehensive web application meticulously crafted to offer individuals a holistic approach to managing their diabetes. At its core, the app provides a sophisticated yet user-friendly interface for tracking blood sugar levels, ensuring users can easily monitor and analyze their glucose readings over time. Moreover, the inclusion of medication reminders ensures that users never miss a dose, promoting adherence to their treatment plan. The app goes beyond mere tracking, offering features for logging diet and exercise activities. This functionality enables users to maintain a detailed record of their daily routines, helping them understand how lifestyle choices impact their health. Furthermore, the app leverages data visualization techniques to present users with clear and insightful charts and graphs. These visual representations not only make it easier for users to interpret their data but also serve as motivational tools, encouraging them to stay on track with their health goals. Overall, the Diabetes App is a powerful tool that empowers users to take control of their health and improve their overall well-being.
          </p>
          </div>
        </div>
        <div className='bg-gray-300 p-5 rounded-md shadow-lg'>
  <h2 className="text-2xl font-semibold mb-2">Capital Banking Clone</h2>
  <div className="my-8 flex flex-col md:flex-row items-center">
    <img src={Capital} alt="Project" className="w-80 h-80 rounded-md shadow-lg" />
    <div className="text-lg text-gray-700 ml-0 md:ml-4 mt-4 md:mt-0">
      <p>
        The Capital Banking Clone is a web application inspired by the Capital One online banking platform. It provides users with the ability to view their account balances, transaction history, and make transfers between accounts. The clone emphasizes user-friendly design and security features, offering a seamless banking experience for users.
      </p>
      <p>
        Check out the project here: <a href="https://capitalbanking.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-blue-500'>Capital Banking</a>
      </p>
    </div>
  </div>


        </div>
      </div>
      
       
     
    </motion.section>
  );
};

export default Projects;
