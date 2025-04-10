import React from 'react'

const Projects = () => {
  return (
    <div className='bg-[#0a0a23] w-full h-screen flex flex-col items-center'>
      <div className='text-white font-extralight text-[30px] flex items-center justify-center gap-10 h-20 w-[90%]'>
        <div className='w-[35%] h-[1px] bg-white'></div>
        <p className='w-[30%] text-center'>Toppers of the Projects List </p>
        <div className='w-[35%] h-[1px] bg-white'></div>
      </div>
      <div id='showcased-projects'>
        <div className='card'>
          <div className='bg-transparent w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-[0.6rem]'>project</div>
        </div>
      </div>
    </div>
  )
}

export default Projects
