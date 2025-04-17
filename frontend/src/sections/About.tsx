import { useState } from 'react';
import { Cursor, Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/profile-pic.jpg';
import { motion } from 'framer-motion';
import byteRunnersImage from "../assets/byterunners.png"
import leetcodeLogo from "../assets/leetcode.svg"

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full bg-[#040417] flex flex-col gap-10 items-center z-[100] px-5'>
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
      <div className='pl-2 text-white flex w-full'>
        <div className='flex gap-5 w-full justify-start p-10'>
          <div id='byterunners' className="shadow-slate-600 bg-[#060621]  w-full  lg:w-[55%]  rounded-3xl hover:-translate-y-2 ease-linear duration-200">
            <img src={byteRunnersImage} className='h-[400px] block rounded-t-3xl' />
            {/* <div className='absolute inset-0 bg-black/40 rounded-3xl' /> */}
            <div className='text-2xl font-semibold w-full text-center p-4'>ByteRunners Hackathon Finalists at IIT Delhi</div>
          </div>
          <div id='leetcode' className='cursor-pointer flex flex-col gap-5 shadow-slate-600 bg-[#060621]  w-full lg:w-[40%]  rounded-3xl hover:translate-x-2 ease-linear duration-200'
            onClick={() => { window.open("https://leetcode.com/u/user7202mP/", '_blank') }}
          >
            <img src={leetcodeLogo} alt="" className='h-[400px] p-10' />
            <h2 className='h-1/2 text-center text-2xl font-semibold'>Solved 200+ Questions on Leetcode with 1500+ Rating</h2>
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;
