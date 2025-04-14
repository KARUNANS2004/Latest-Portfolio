import React from 'react'
import ConnectBackground from '../components/ConnectBackground'

const Connect = () => {
  return (
    <div className='relative bg-[#040417] mt-32 backdrop-blur-sm'>
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <ConnectBackground />
      </div>

      {/* Content */}
      <div className='relative z-10 text-white w-full flex flex-col items-center justify-between'>
        <div className='relative w-[800px] flex items-center justify-center connect-page backdrop-blur-sm rounded-[1.5rem] inset-0 z-10 '>
          <div className='w-[calc(100%-2px)] h-[calc(100%-2px)] p-10 bg-[#040417] rounded-[1.5rem]'>
            <h2 className='text-[40px]  font-semibold flex flex-col m-0 p-0 gap-0 items-center '>
              <div className='flex gap-4 m-0 p-0  '>
                <p >Let’s make your online</p>
                <span className='text-[#954FFE] m-0 p-0'>
                  presence
                </span>
              </div>
              <p className='m-0 p-0'>unforgettable</p>
            </h2>
            <p className='w-full text-center text-gray-300 text-xl mt-10'>Tell me about your project <span><i className="ri-test-tube-fill"></i></span>I'll take care of the rest</p>
          </div>
        </div>
        <div className=' 
        rounded-[0.6rem]
        flex items-center justify-center
        bg-gradient-to-r from-[#0a0a23] via-[#14143b]  to-[#57579a] bg-[length:200%_200%] 
        animate-gradient  
        mt-20  
        border
        border-[#15154f]
        w-[300px] h-[70px]
         hover:scale-105 transition-transform duration-300'
          onClick={() => {
            window.location.href = 'mailto:s.karuna0074@gmail.com'
          }}
        >
          <p className=" bg-[#040417] font-semibold text-2xl text-white w-[calc(100%-4px)] cursor-pointer h-[calc(100%-4px)]  animate-gradient  rounded-[0.5rem] flex items-center justify-center"

          >Get in touch →</p>
        </div>
        <div id='lower-section-of-icons' className='w-full p-5 mt-[80px] flex items-center justify-between '>
          <h2>Made With ❤️ By Karuna Nidhan Singh</h2>
          <div id='connection-icons' className='flex gap-5'>
            <div id='github' className='h-[50px] w-[50px] border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/10 hover:scale-110 transition ease-linear cursor-pointer shadow-[0_0_20px_4px_rgba(255,255,255,0.2)]' onClick={() => { window.open("https://github.com/KARUNANS2004", '_blank') }}>
              <p><i className="ri-github-fill text-4xl font-light"></i></p>
            </div>
            <div id='linkedin' className='h-[50px] w-[50px] border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/10 hover:scale-110 transition ease-linear cursor-pointer shadow-[0_0_20px_4px_rgba(255,255,255,0.2)]' onClick={() => { window.open("https://www.linkedin.com/in/karuna-nidhan-singh07/", "_blank") }}>
              <p><i className="ri-linkedin-box-line text-4xl font-light "></i></p>
            </div>
            <div id='leetcode' className='h-[50px] w-[50px] border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/10 hover:scale-110 transition ease-linear cursor-pointer shadow-[0_0_20px_4px_rgba(255,255,255,0.2)]' onClick={() => { window.open("https://leetcode.com/u/user7202mP/", '_blank') }}>
              <p><img src="/src/assets/leetcode.svg" className='h-[35px] w-[35px]' /></p>
            </div>
            <div id='discord' className='h-[50px] w-[50px] border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/10 hover:scale-110 transition ease-linear cursor-pointer shadow-[0_0_20px_4px_rgba(255,255,255,0.2)]' onClick={() => { window.open("https://discord.com/channels/@me", '_blank') }}>
              <p><i className="ri-discord-line text-4xl font-light"></i></p>
            </div>
            <div id='instagram' className='h-[50px] w-[50px] border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/10 hover:scale-110 transition ease-linear cursor-pointer shadow-[0_0_20px_4px_rgba(255,255,255,0.2)]' onClick={() => { window.open("https://www.instagram.com/karuna.nidhan_singh/", '_blank') }}>
              <p><i className="ri-instagram-line text-4xl font-light"></i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Connect
