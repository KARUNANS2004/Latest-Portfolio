import React from 'react'
import ConnectBackground from '../components/ConnectBackground'

const Connect = () => {
  return (
    <div className='relative bg-[#08081e] mt-32 h-[500px] overflow-hidden backdrop-blur-sm'>
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <ConnectBackground />
      </div>

      {/* Content */}
      <div className='relative z-10 text-white w-full h-full flex flex-col items-center justify-center'>
        <h2 className='text-[40px] font-semibold flex flex-col m-0 p-0 gap-0 items-center'>
          <div className='flex gap-4 m-0 p-0'>
            Let’s make your online
            <span className='text-[#954FFE] m-0 p-0'>
              presence
            </span>
          </div>
          <p className='m-0 p-0'>unforgettable.</p>
        </h2>
        <p className='w-full text-center text-xl mt-20'>Tell me about your project—I'll take care of the rest.</p>
        <div className=' 
        rounded-[0.6rem]
        flex items-center justify-center
        bg-gradient-to-r from-[#0a0a23] via-[#14143b]  to-[#57579a] bg-[length:200%_200%] 
        animate-gradient  
        mt-10  
        border
        border-[#15154f]
        w-[200px] h-[40px]'
        >
          <p className=" bg-[#08081e] text-white w-[calc(100%-4px)] h-[calc(100%-4px)]  animate-gradient  rounded-[0.5rem] flex items-center justify-center">Get in touch →</p>
        </div>
      </div>
    </div>
  );
};


export default Connect
