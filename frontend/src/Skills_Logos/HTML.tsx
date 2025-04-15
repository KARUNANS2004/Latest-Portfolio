import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import htmlLogo from "../assets/html.png"

const Model = () => {
    const gltf = useGLTF("/Html_logo/scene.gltf")

    gltf.scene.position.set(0, 0.5, 0)
    gltf.scene.rotation.set(0, Math.PI, 0)

    return <primitive object={gltf.scene} />
}

const HTML = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2
    })
    const [isHovering, setIsHovering] = useState(false)

    return (
        <div
            ref={ref}
            className='h-full w-full flex flex-col items-center justify-end relative cursor-pointer'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* AnimatePresence allows smooth mount/unmount */}
            <AnimatePresence>
                {inView && !isHovering && (
                    <motion.div
                        className='absolute top-0 flex items-center justify-center'
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <img src={htmlLogo} className='' />
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
                        <Canvas
                            className='max-h-32 max-w-32'
                            camera={{ position: [3, 4, 5], near: 0.1, far: 1000 }}
                        >
                            <ambientLight intensity={3} />
                            <directionalLight position={[2, 5, 2]} intensity={2} />
                            <Suspense fallback={null}>
                                <Model />
                            </Suspense>
                            <OrbitControls
                                enableZoom={false}
                                autoRotate
                                autoRotateSpeed={20}
                                minPolarAngle={Math.PI / 3}
                                maxPolarAngle={Math.PI}
                                target={[0, 3, 0]}
                            />
                        </Canvas>
                    </motion.div>
                )}
            </AnimatePresence>

            <h2 className='text-white font-semibold text-xl cursor-pointer z-10'>
                HTML
            </h2>
        </div>
    )
}

export default HTML
