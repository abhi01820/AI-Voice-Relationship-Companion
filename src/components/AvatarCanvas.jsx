import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { NeuronHead } from './NeuronHead';

export function AvatarCanvas({ isSpeaking }) {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <color attach="background" args={['#020617']} />
        
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f3ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a200ff" />
        
        <Suspense fallback={null}>
          <NeuronHead isSpeaking={isSpeaking} />
          <Environment preset="city" />
          <ContactShadows position={[0, -3.5, 0]} opacity={0.6} scale={15} blur={2.5} far={4} color="#000000" />
        </Suspense>
        
        {/* Restrict camera movement so the user can't break the view */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI/2 - 0.3} 
          maxPolarAngle={Math.PI/2 + 0.3}
          minAzimuthAngle={-0.5}
          maxAzimuthAngle={0.5}
        />
      </Canvas>
    </div>
  );
}
