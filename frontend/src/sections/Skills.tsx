import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import ReactLogo from '../Skills_Logos/ReactLogo'
import HTML from '../Skills_Logos/HTML'
import CSS from '../Skills_Logos/CSS'
import JavaScript from '../Skills_Logos/JavaScript'
import TypeScript from '../Skills_Logos/TypeScript'
import TailwindCSS from '../Skills_Logos/TailwindCSS'
import React_Router from '../Skills_Logos/React_Router'
import CPP from '../Skills_Logos/CPP'
import Three from '../Skills_Logos/Three'
import Motion from '../Skills_Logos/Motion'
import GSAP from '../Skills_Logos/GSAP'
import NODE from '../Skills_Logos/NODE'
import Express from '../Skills_Logos/Express'
import MongoDB from '../Skills_Logos/MongoDB'
import Firebase from '../Skills_Logos/Firebase'
import Git from '../Skills_Logos/Git'

const Skills = () => {
    return (
        <div className='w-full h-full bg-[#08081e] flex flex-col items-center pt-10'>
            <div className='text-white font-extralight text-[30px] flex items-center justify-center gap-10 h-20 w-[90%] overflow-hidden'>
                <div className='w-[35%] h-[1px] bg-white'></div>
                <p className='w-[30%] text-center'>Some of my Tech Skills!</p>
                <div className='w-[35%] h-[1px] bg-white'></div>
            </div>
            <div className='flex flex-col gap-14 h-full w-full justify-center items-center p-10'>
                <div id='Languages' className='w-full h-full flex gap-2 border-[2px] border-dashed border-[#1a1a5a] p-6' >
                    <div className='flex h-full w-[10%] justify-start items-start mt-14 '>
                        <p className='text-white font-semibold p-5 bg-[#4d1d1d] rounded-full w-fit'>Languages</p>
                    </div>
                    <div className='flex h-full w-[90%] flex-wrap gap-10 justify-center items-center'>
                        <div className='h-40 w-40'>
                            <HTML />
                        </div>
                        <div className='h-40 w-40'>
                            <CSS />
                        </div>
                        <div className='h-40 w-40'>
                            <JavaScript />
                        </div>
                        <div className='h-40 w-40'>
                            <TypeScript />
                        </div>
                        <div className='h-40 w-40'>
                            <CPP />
                        </div>
                    </div>
                </div>
                <div id='tools' className='w-full h-full flex gap-2 border-[2px] border-dashed border-[#1a1a5a] p-6' >
                    <div className='flex h-full w-[10%] justify-start items-start mt-14 '>
                        <p className='text-white text-center font-semibold p-5 bg-[#4d1d1d] rounded-full w-fit'>Tools & Frameworks</p>
                    </div>
                    <div className='flex h-full w-[90%] flex-wrap gap-10 justify-center items-center'>
                        <div className='h-40 w-40'>
                            <TailwindCSS />
                        </div>
                        <div className='h-40 w-40'>
                            <ReactLogo />
                        </div>
                        <div className='h-40 w-40'>
                            <React_Router />
                        </div>
                        <div className='h-40 w-40'>
                            <Three />
                        </div>
                        <div className='h-40 w-40'>
                            <Motion />
                        </div>
                        <div className='h-40 w-40'>
                            <GSAP />
                        </div>
                        <div className='h-40 w-40'>
                            <NODE />
                        </div>
                        <div className='h-40 w-40'>
                            <Express />
                        </div>
                        <div className='h-40 w-40'>
                            <MongoDB />
                        </div>
                        <div className='h-40 w-40'>
                            <Firebase />
                        </div>
                        <div className='h-40 w-40'>
                            <Git />
                        </div>
                    </div>
                </div>
                <div id='other-tools' className='w-full h-full flex gap-20 border-[2px] border-dashed border-[#1a1a5a] p-6' >
                    <div className='flex h-full w-[10%] justify-start items-start my-10  '>
                        <p className='text-white text-center font-semibold p-5 bg-[#4d1d1d] rounded-full w-fit'>Other Tools</p>
                    </div>
                    <div className='flex h-full w-[90%] flex-wrap gap-10 justify-start items-center'>
                        <ul className='text-white  gap-5 list-disc'>
                            <li>JWT</li>
                            <li>Axios</li>
                            <li>Vite</li>
                            <li>VSCode</li>
                            <li>npm</li>
                            <li>OSM (Open Street Maps)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
