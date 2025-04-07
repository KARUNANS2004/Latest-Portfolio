import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { useInView } from 'react-intersection-observer';

const Model = () => {
    const gltf = useGLTF("/Firebase_Logo/Firebase.gltf")
    return <primitive object={gltf.scene} scale={[1, 1, 1]} position={[0, 0, 0]} />;
};

const Firebase = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2
    })
    return (
        <div ref={ref} className='h-full w-full flex flex-col items-center justify-center  '>
            {inView && (
                <Canvas className='max-h-32 max-w-32' camera={{ position: [0, 0, 0], near: 0.1, far: 100 }}>
                    <ambientLight intensity={2} />
                    <directionalLight position={[0, 5, 5]} intensity={10} />
                    <directionalLight position={[0, -5, -5]} intensity={7} />
                    <directionalLight position={[-5, 0, 0]} intensity={7} />
                    <directionalLight position={[5, 0, 0]} intensity={7} />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                    <OrbitControls
                        enableZoom={false}
                        maxDistance={3}
                        minDistance={2}
                        autoRotate
                        autoRotateSpeed={3}
                        minPolarAngle={Math.PI / 2}
                        maxPolarAngle={Math.PI / 2}
                        target={[0, 0, 0]}
                    />
                </Canvas>
            )}
            <h2 className='text-white font-semibold text-xl'>Firebase</h2>
        </div>
    )
}

export default Firebase
