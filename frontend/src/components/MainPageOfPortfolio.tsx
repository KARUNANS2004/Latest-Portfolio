import React from 'react'

const MainPageOfPortfolio = () => {
  return (
    <div className=' h-screen w-screen relative '>
      {/* Home section */}
      <div className='w-screen h-screen'>
        <div className=' h-14 w-14 rounded-full blur-3xl bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-10 left-10  '></div>
        <div className=' h-20 w-20 rounded-full blur-3xl bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-[10%] right-[10%]  '></div>
        <div className='w-full h-full flex items-center justify-center text-white text-[60px] font-semibold'>
          <div className='text-center'>
            <p className='block'>Building Bridges <span className='text-[#954FFE]'>Between</span></p>
            <p>Vision and Reality</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default MainPageOfPortfolio
