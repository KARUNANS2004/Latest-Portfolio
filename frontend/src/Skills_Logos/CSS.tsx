import React, { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { OrbitControls as OrbitControlsImpl } from "three-stdlib"



const Model = () => {
    const gltf = useGLTF("/CSS_logo/CSS_3D.gltf")
    return <primitive
        object={gltf.scene}
        scale={[0.3, 0.3, 0.3]}
        position={[0, -0.2, 0]}
        rotation={[0, Math.PI / 2, 0]}
    />;
};

const CSS = () => {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center  '>
            <Canvas className='max-h-32 max-w-32' camera={{ position: [0, 0.3, 0.5], near: 0.1, far: 100 }}>
                <ambientLight intensity={2} />
                <directionalLight position={[0, 5, 5]} intensity={20} />
                <Model />
                <OrbitControls
                    enableZoom={false}
                    setScale={[10, 10, 10]}
                    maxDistance={2}
                    minDistance={0.1}
                    autoRotate
                    autoRotateSpeed={3}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                    target={[0, 0, 0]}
                />
            </Canvas>
            <h2 className='text-white font-semibold text-xl'>CSS</h2>
        </div>
    )
}

export default CSS
