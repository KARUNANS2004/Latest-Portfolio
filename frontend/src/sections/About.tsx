import React, { useState } from 'react';
import { Cursor, Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/profile-pic.jpg';
import { motion } from 'framer-motion';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full bg-[#040417] flex flex-col items-center z-[100] px-5'>
      <div className='text-white font-extralight text-md lg:text-[30px] flex items-center justify-center gap-10 h-20 w-full'>
        <div className='w-[35%] h-[1px] bg-white'></div>
        <p className='w-[30%] text-center border-t-2 border-b-2 py-4 rounded-t-2xl rounded-b-2xl'>
          Wanna Know About Me ?
        </p>
        <div className='w-[35%] h-[1px] bg-white'></div>
      </div>

      <div className='text-white w-full flex flex-col items-center justify-center relative text-2xl mt-8 z-[100]'>
        <div className='text-center'>
          <p>
            Hi, I'm Karuna Nidhan Singh, a
            <span
              style={{ color: '#f2b143', fontWeight: 'bold' }}
              className='mx-2'>
              <Typewriter
                words={['Software Developer', 'MERN Stack Developer', 'Programmer', 'DSA Enthusiast']}
                loop={false}
                cursor
                cursorStyle='|'
                onType={() => {
                  <Cursor cursorBlinking={true} />;
                }}
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>

        {/* Profile Image */}
        <div className='relative w-full flex justify-center'>
          <motion.div
            id='profile'
            className='h-[200px] w-[200px] rounded-full overflow-hidden absolute sm:bottom-10 top-10 sm:top-auto sm:left-auto sm:right-0 z-[100]'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}>
            <img
              src={profileImage}
              alt='profileIMG'
              className='h-full w-full object-cover z-[100]'
            />
          </motion.div>

          {/* Profile Image Hover Button */}
          <p
            className='hidden sm:flex items-center justify-center text-white border rounded-full h-10 w-10 cursor-pointer absolute sm:bottom-[-10px] sm:right-[40px]'
            onMouseLeave={() => setIsHovered(false)}
            onMouseEnter={() => setIsHovered(true)}>
            <i className='ri-user-fill'></i>
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;
