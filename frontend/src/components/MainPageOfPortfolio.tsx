import React, { useEffect, useRef } from 'react'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Connect from '../sections/Connect'
import HTML from '../Skills_Logos/HTML'

type SectionNames = "About" | "Projects" | "Skills" | "Connect" | "Home"; // ✅ Define allowed keys

const MainPageOfPortfolio = ({ scrollToSection }: { scrollToSection: (fn: (section: string) => void) => void }) => {
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const connectRef = useRef<HTMLElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)
  const skillsRef = useRef<HTMLDivElement | null>(null)
  const homeRef = useRef<HTMLDivElement | null>(null)

  const sectionRefs: Record<SectionNames, React.RefObject<HTMLElement | null>> = {
    About: aboutRef,
    Projects: projectsRef,
    Skills: skillsRef,
    Connect: connectRef,
    Home: homeRef
  };

  useEffect(() => {
    scrollToSection((section: string) => {
      const sectionName = section as SectionNames;
      sectionRefs[sectionName]?.current?.scrollIntoView({ behavior: "smooth" });

    });
  }, [scrollToSection]);

  return (
    <div className=' h-full w-full relative bg-[#0a0a23] '>
      {/* Home section */}
      <div className='w-full h-full'>
        <div className=' h-14 w-14 rounded-full blur-3xl bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-64 left-64  '></div>
        <div className=' h-20 w-20 rounded-full blur-3xl bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-[10%] right-[10%]  '></div>
        <div ref={homeRef} className='w-full h-full flex items-center justify-center text-white text-[60px] font-semibold'>
          <div className='text-center'>
            <p className='block'>Building Bridges <span className='text-[#954FFE]'>Between</span></p>
            <p>Vision and Reality</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col py-2 bg-[#0a0a23]'>
        <div ref={aboutRef}><About /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}><Projects /></div>
        <section ref={connectRef}><Connect /></section>
      </div>
    </div>
  )
}

export default MainPageOfPortfolio
