import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

const Model = () => {
    const gltf = useGLTF("/React_Router_Logo/React_Router.gltf")
    return <primitive object={gltf.scene} scale={[2.2, 2.2, 2.2]} position={[0, 0.4, 0]} />;
};

const React_Router = () => {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center  '>
            <Canvas className='max-h-32 max-w-32' camera={{ position: [5, 0, 0], near: 0.1, far: 100 }}>
                <ambientLight intensity={2} />
                <directionalLight position={[0, 5, 5]} intensity={0} />
                <Model />
                <OrbitControls
                    enableZoom={false}
                    maxDistance={6}
                    minDistance={2}
                    autoRotate
                    autoRotateSpeed={3}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                    target={[0, 1, 0]}
                />
            </Canvas>
            <h2 className='text-white font-semibold text-xl'>React Router</h2>
        </div>
    )
}

export default React_Router
