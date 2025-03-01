import React, { useState } from 'react'
import * as motion from "motion/react-client"
import { spring } from 'motion'
import { animate } from "motion/mini"


interface BallScreenProps {
    setballClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const BallScreen = (props: BallScreenProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-screen h-screen flex items-center justify-center flex-col pt-8 bg-[#87CEEB]'>
            <p className='text-white text-8xl absolute left-[10%] top-0 mt-10'><i className="ri-cloudy-2-fill"></i></p>
            <p className='text-white text-8xl absolute right-[5%] top-0 mt-10'><i className="ri-cloudy-2-fill"></i></p>
            <motion.div className='h-[90%] w-96 bg-slate-900 flex items-center justify-center relative rounded-xl'
                style={{ perspective: "2000px" }}
            >
                {/* Door */}
                <motion.div className='h-full w-full cursor-pointer bg-[#46290c] absolute z-10 origin-left flex items-center justify-end p-2 rounded-xl'
                    initial={{ rotateY: 0 }}
                    animate={{
                        rotateY: isOpen ? 80 : 0,
                        borderBottomLeftRadius: isOpen ? "19px" : "12px",
                        borderTopLeftRadius: isOpen ? "19px" : "12px",
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: "easeInOut"
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <h2 className='text-2xl font-semibold font-mono text-yellow-100 absolute top-0 left-[38%]'>WELCOME! </h2>
                    <div className='flex items-center justify-center bg-gray-400 rounded-full p-1'>
                        <div className='h-10 w-10 rounded-full bg-fuchsia-900 shadow-2xl'></div>
                    </div>

                </motion.div>
                {/* Circular button */}
                <motion.div
                    className='h-52 w-52 border bg-white border-black rounded-full flex items-center justify-center shadow-2xl cursor-pointer  '
                    whileTap={{ scale: 0.8, transition: { duration: 0.3, ease: "easeInOut" } }}
                    whileHover={{ scale: 1.5, transition: { duration: 0.8, ease: "easeInOut" } }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                    }}
                    onTap={() => {
                        setTimeout(() => {
                            props.setballClicked(true);
                        }, 300);
                    }}
                >
                    <motion.button
                        className='text-2xl'
                    >
                        Click Me!
                    </motion.button>
                </motion.div>

                {/* Hanging Light */}
                <div className='h-[20%] w-[1px] bg-[#FFD700] absolute top-0 left-[25%]'></div>
                <div className='rounded-full h-10 w-10 bg-[#FFD700] absolute top-[20%] left-[20%] shadow-2xl shadow-[#FFD700]'></div>
                <div className='h-[10%] w-[1px] bg-[#FFD700] absolute top-0 left-[50%]'></div>
                <div className='rounded-full h-10 w-10 bg-[#FFD700] absolute top-[10%] left-[45%] shadow-2xl shadow-[#FFD700]'></div>
                <div className='h-[20%] w-[1px] bg-[#FFD700] absolute top-0 left-[75%]'></div>
                <div className='rounded-full h-10 w-10 bg-[#FFD700] absolute top-[20%] left-[70%] shadow-2xl shadow-[#FFD700]'></div>
            </motion.div>
            <div className='h-[10%]  w-full bg-[#385819] ' ></div>
        </div >


    )
}

export default BallScreen
