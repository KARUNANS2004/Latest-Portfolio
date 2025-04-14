import { useRef, useState } from 'react'
import './index.css'
import HamburgerMenu from './components/HamburgerMenu'
import { motion } from "motion/react"
import BallScreen from './components/BallScreen'
import MainPageOfPortfolio from './components/MainPageOfPortfolio'

function App() {
  const [count, setCount] = useState(0)

  // this usestate will serve as the button which will appear on the screen when the site loads clicking which will take us to the main portfolio
  const [ballClicked, setballClicked] = useState(false)

  const scrollToSection = useRef<(section: string) => void>(() => { })


  return (
    <>
      <div className="h-screen w-[99.999999999%] flex ">
        {!ballClicked ? (
          <BallScreen setballClicked={setballClicked} />
        ) : (
          <motion.div className='h-screen w-full relative flex justify-between bg-[#08081e] bg-blend-overlay '>
            <HamburgerMenu scrollToSection={(section) => scrollToSection.current(section)} />
            <MainPageOfPortfolio scrollToSection={(section) => (scrollToSection.current = section)} />
            {/* model of pc */}
            <div className='absolute top-10 left-0 '>
              {/* <Canvas className='max-h-72 max-w-72' camera={{ position: [5, 0, 0] }}>
                <ambientLight intensity={2} />
                <directionalLight position={[0, 5, 5]} intensity={2} />
                <OrbitControls
                  enableZoom={true}
                  maxDistance={2}
                  minDistance={2}
                  autoRotate
                  autoRotateSpeed={3}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 2}
                />
                <Suspense fallback={null} >
                  <Computer />
                </Suspense>
              </Canvas> */}
            </div>
          </motion.div>
        )
        }
      </div >
    </>
  )
}

export default App
