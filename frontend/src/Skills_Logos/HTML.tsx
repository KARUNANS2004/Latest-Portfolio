import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

const Model = () => {
    const gltf = useGLTF("/Html_logo/scene.gltf")

    // Center the model properly
    gltf.scene.position.set(0, -0.5, 0);
    gltf.scene.rotation.set(0, Math.PI, 0); // Optional: Adjust rotation if needed

    return <primitive object={gltf.scene} />;
};

const HTML = () => {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center'>
            <Canvas className='max-h-32 max-w-32' camera={{ position: [3, 4, 5], near: 0.1, far: 100 }}>
                <ambientLight intensity={3} />
                <directionalLight position={[2, 5, 2]} intensity={2} />
                <Model />
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={3}  // Smoother rotation
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI}
                    target={[0, 3, 0]} // Focus on center
                />
            </Canvas>
            <h2 className='text-white font-semibold text-xl'>HTML</h2>
        </div>
    )
}

export default HTML
