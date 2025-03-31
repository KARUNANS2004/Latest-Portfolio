import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import ReactLogo from '../Skills_Logos/ReactLogo'




const Skills = () => {
    return (
        <div className='w-full h-full bg-[#0a0a23] flex flex-col items-center'>
            <div className='text-white font-extralight text-[30px] flex items-center justify-center gap-10 h-20 w-[90%] overflow-hidden'>
                <div className='w-[35%] h-[1px] bg-white'></div>
                <p className='w-[30%] text-center'>Some of my Tech Skills!</p>
                <div className='w-[35%] h-[1px] bg-white'></div>
            </div>
            <div className='flex h-24 w-24'>
                <ReactLogo />
            </div>
        </div>
    )
}

export default Skills
