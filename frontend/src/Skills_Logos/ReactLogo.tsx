import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

const Model = () => {
    const gltf = useGLTF("../public/react logo/scene.gltf")
    return <primitive object={gltf.scene} />;
};

const ReactLogo = () => {
    return (
        <div className='h-full'>
            <Canvas className='max-h-20 max-w-20' camera={{ position: [5, 0, 0] }}>
                <ambientLight intensity={2} />
                <directionalLight position={[0, 5, 5]} intensity={2} />
                <Model />
                <OrbitControls
                    enableZoom={true}
                    maxDistance={4}
                    minDistance={4}
                    autoRotate
                    autoRotateSpeed={3}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
            <h2 className='text-white font-semibold text-xl'>React</h2>
        </div>
    )
}

export default ReactLogo
