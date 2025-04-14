import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { OrbitControls as OrbitControlsImpl } from "three-stdlib"
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'




const Model = () => {
    const gltf = useGLTF("/CSS_logo/CSS_3D.gltf")
    return <primitive
        object={gltf.scene}
        scale={[0.3, 0.3, 0.3]}
        position={[0, -0.1, 0]}
        rotation={[0, Math.PI / 2, 0]}
    />;
};

const CSS = () => {
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
                {inView && isHovering && (
                    <motion.div
                        className='absolute top-0'
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <Canvas className='max-h-32 max-w-32' camera={{ position: [0, 0.3, 0.5], near: 0.1, far: 100 }}>
                            <ambientLight intensity={2} />
                            <directionalLight position={[0, 5, 5]} intensity={20} />
                            <Suspense fallback={null}>
                                <Model />
                            </Suspense>
                            <OrbitControls
                                enableZoom={false}
                                setScale={[10, 10, 10]}
                                maxDistance={2}
                                minDistance={0.1}
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
            <h2 className='text-white font-semibold text-xl'>CSS</h2>
        </div>
    )
}

export default CSS
