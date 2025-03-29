import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Computer from './components/Computer'
import { Environment } from 'drei'
import HamburgerMenu from './components/HamburgerMenu'
import { Light, SpotLight } from 'three'
import { motion } from "motion/react"
import BallScreen from './components/BallScreen'
import MainPageOfPortfolio from './components/MainPageOfPortfolio'

function App() {
  const [count, setCount] = useState(0)

  // this usestate will serve as the button which will appear on the screen when the site loads clicking which will take us to the main portfolio
  const [ballClicked, setballClicked] = useState(false)


  return (
    <>
      <div className="h-screen w-screen flex ">
        {!ballClicked ? (
          <BallScreen setballClicked={setballClicked} />
        ) : (
          <motion.div className='h-screen w-screen relative flex justify-between bg-[#0a0a23] bg-blend-overlay '>
            <HamburgerMenu />
            <MainPageOfPortfolio />
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
