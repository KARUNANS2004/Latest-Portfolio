import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion'
import gsapLogo from "../assets/gsapLogo.png"

const Model = () => {
    const gltf = useGLTF("/GSAP_Logo/GSAP.gltf")
    return <primitive object={gltf.scene} scale={[0.8, 0.8, 0.8]} position={[0, 0, 0]} />;
};

const GSAP = () => {
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
                        className='absolute top-0 left-0 flex items-start justify-between'
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <img src={gsapLogo} className='scale-[0.65]' />
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
                            <directionalLight position={[0, 5, 5]} intensity={3} />
                            <Suspense fallback={null}>
                                <Model />
                            </Suspense>
                            <OrbitControls
                                enableZoom={false}
                                maxDistance={3}
                                minDistance={2}
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
            <h2 className='text-white font-semibold text-xl'>GSAP</h2>
        </div>
    )
}

export default GSAP
