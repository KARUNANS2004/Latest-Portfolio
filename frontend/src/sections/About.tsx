import React, { useState } from 'react'
import { Cursor, Typewriter } from 'react-simple-typewriter'
import profileImage from '../assets/profile-pic.jpg'
// import * as motion from "motion/react-client"
import { motion } from 'framer-motion';


const About = () => {
  const [isHovered, setIsHovered] = useState(false)

  // const handleMouseEnterProfile = () => {
  //   const ele = document.getElementById('profile');
  //   if (ele) {
  //     ele.style.display = 'block'
  //   }
  // }

  // const handleMouseLeaveProfile = () => {
  //   const ele = document.getElementById('profile');
  //   if (ele) {
  //     ele.style.display = 'none'
  //   }
  // }

  return (
    <div className='w-full bg-[#0a0a23] flex  flex-col items-center'>
      <div className='text-white font-extralight text-[30px] flex items-center justify-center gap-10 overflow-hidden h-20 w-[90%]'>
        <div className='w-[35%] h-[1px] bg-white'></div>
        <p className='w-[30%] text-center'>Wanna Know About Me ?</p>
        <div className='w-[35%] h-[1px] bg-white'></div>
      </div>
      <div className='text-white w-full flex items-center justify-center relative text-2xl mt-8'>
        <div>
          <p>Hi, I'm  Karuna Nidhan Singh a
            <span style={{ color: '#f2b143', fontWeight: 'bold' }} className='mx-2'>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Software Developer', 'MERN Stack Developer', 'Programmer', 'DSA Enthusiast']}
                loop={false}
                cursor
                cursorStyle='|'
                onType={() => {
                  <Cursor
                    cursorBlinking={true}
                  />
                }}
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>
        {/* profile image */}
        <div className='absolute bottom-10 right-40'>
          <motion.div
            id='profile'
            className='h-[200px] w-[200px] absolute -right-20 -top-72 rounded-full overflow-hidden '
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <img src={profileImage} alt="profileIMG" className='h-full w-full' />
          </motion.div>
          <p className='text-white border rounded-full h-10 w-10 text-center cursor-pointer'
            onMouseLeave={() => {
              setIsHovered(false)
            }}
            onMouseEnter={() => {
              setIsHovered(true)
            }}
          >
            <i className="ri-user-fill"></i>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
