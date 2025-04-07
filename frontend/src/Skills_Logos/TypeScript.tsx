import React, { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { useInView } from 'react-intersection-observer';

const Model = () => {
    const gltf = useGLTF("/TS_Logo/TypeScript_clear_Icon_0405061020_texture.gltf")
    return <primitive object={gltf.scene} scale={[1, 1, 1]} position={[0, 0.8, 0]} />;
};

const TypeScript = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2
    })
    return (
        <div>
            <div ref={ref} className='h-full w-full flex flex-col items-center justify-center  '>
                {inView && (
                    <Canvas className='max-h-32 max-w-32' camera={{ position: [0, 0, 0], near: 0.1, far: 100 }}>
                        <ambientLight intensity={2} />
                        <directionalLight position={[0, 5, 5]} intensity={2} />
                        <Suspense fallback={null}>
                            {/* fallback me ek component daal do bana kr loading vaala */}
                            <Model />
                        </Suspense>
                        <OrbitControls
                            enableZoom={false}
                            maxDistance={8}
                            minDistance={3.5}
                            autoRotate
                            autoRotateSpeed={3}
                            minPolarAngle={Math.PI / 4}
                            maxPolarAngle={Math.PI / 2}
                            target={[0, 1, 0]}
                        />
                    </Canvas>
                )}
                <h2 className='text-white font-semibold text-xl'>TypeScript</h2>
            </div>
        </div>
    )
}

export default TypeScript
