import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion'
import threeLogo from "../assets/threeJsLogo.png"

const Model = () => {
    const gltf = useGLTF("/Three_JS_Logo/scene.gltf")
    return <primitive object={gltf.scene} scale={[0.09, 0.09, 0.09]} position={[0, 0, 0]} />;
};

const Three = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2
    })
    const [isHovering, setIsHovering] = useState(false)
    return (
        <div ref={ref}
            className='h-full w-full flex flex-col items-center justify-end relative cursor-pointer'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <AnimatePresence>
                {inView && !isHovering && (
                    <motion.div
                        className='absolute -top-6 flex items-center justify-center'
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <img src={threeLogo} className='scale-[0.6]' />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {inView && isHovering && (
                    <motion.div
                        className='absolute top-0'
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <Canvas className='max-h-32 max-w-32' camera={{ position: [0, 0, 0], near: 0.1, far: 100 }}>
                            <ambientLight intensity={2} />
                            <directionalLight position={[0, 5, 5]} intensity={10} />
                            <Suspense fallback={null}>
                                <Model />
                            </Suspense>
                            <OrbitControls
                                enableZoom={false}
                                maxDistance={10}
                                minDistance={10}
                                autoRotate
                                autoRotateSpeed={20}
                                minPolarAngle={Math.PI / 2}
                                maxPolarAngle={Math.PI / 2}
                                target={[0, 0, 0]}
                            />
                        </Canvas>
                    </motion.div>
                )}
            </AnimatePresence>
            <h2 className='text-white font-semibold text-xl'>Three.js</h2>
        </div >
    )
}

export default Three
