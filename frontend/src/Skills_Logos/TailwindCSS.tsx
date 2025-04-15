import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'


const Model = () => {
    const gltf = useGLTF("/TailwindCSS_Logo/TailwindCSS.gltf")
    return <primitive object={gltf.scene} scale={[2.2, 2.2, 2.2]} position={[0, 0.4, 0]} />;
};

const TailwindCSS = () => {
    const [isHovering, setIsHovering] = useState(false)
    return (
        <div
            className='h-full w-full flex flex-col items-center justify-end relative cursor-pointer  '
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        className='absolute top-0'
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <Canvas className='max-h-32 max-w-32' camera={{ position: [5, 0, 0], near: 0.1, far: 100 }}>
                            <ambientLight intensity={2} />
                            <directionalLight position={[0, 5, 5]} intensity={2} />
                            <Model />
                            <OrbitControls
                                enableZoom={false}
                                maxDistance={6}
                                minDistance={2}
                                autoRotate
                                autoRotateSpeed={20}
                                minPolarAngle={Math.PI / 4}
                                maxPolarAngle={Math.PI / 2}
                                target={[0, 1, 0]}
                            />
                        </Canvas>
                    </motion.div>
                )}
            </AnimatePresence>
            <h2 className='text-white font-semibold text-xl'>TailwindCSS</h2>
        </div>
    )
}

export default TailwindCSS
