import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function NeuronHead({ isSpeaking }) {
  const headRef = useRef();
  const lipsRef = useRef();
  const coreRef = useRef();

  // Create random points for the "neurons"
  const [positions] = useMemo(() => {
    const points = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2.2 + Math.random() * 0.3; // Distribute between 2.2 and 2.5
      points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      points[i * 3 + 2] = r * Math.cos(phi);
    }
    return [points];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Slow rotation of the head to make it feel alive
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
      headRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }
    
    // Pulse the core
    if (coreRef.current) {
      const scale = 1.6 + Math.sin(time * 3) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }

    // Animate lips (audio visualizer effect) when speaking
    if (lipsRef.current) {
      lipsRef.current.children.forEach((child, i) => {
        if (isSpeaking) {
          // Rapid random movements to simulate speech
          const randomScale = 0.2 + Math.abs(Math.sin(time * 20 + i * 2.5)) * 1.5;
          child.scale.y = THREE.MathUtils.lerp(child.scale.y, randomScale, 0.3);
        } else {
          // Smoothly return to rest state
          child.scale.y = THREE.MathUtils.lerp(child.scale.y, 0.2, 0.1);
        }
      });
    }
  });

  return (
    <group ref={headRef}>
      {/* Outer Shell (Wireframe to look like a neural mesh) */}
      <Sphere args={[2.5, 32, 32]}>
        <meshStandardMaterial color="#00f3ff" wireframe transparent opacity={0.15} />
      </Sphere>

      {/* Neuron Particles */}
      <Points positions={positions} stride={3}>
        <PointMaterial transparent color="#00f3ff" size={0.06} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
      </Points>

      {/* Inner Core (The "Brain") */}
      <Sphere ref={coreRef} args={[1, 32, 32]}>
        <meshStandardMaterial color="#a200ff" emissive="#a200ff" emissiveIntensity={2} toneMapped={false} />
      </Sphere>

      {/* Lips / Equalizer */}
      <group ref={lipsRef} position={[0, -1.2, 2.3]}>
        {[-0.6, -0.3, 0, 0.3, 0.6].map((x, i) => (
          <Box key={i} args={[0.18, 0.5, 0.1]} position={[x, 0, 0]} radius={0.05}>
            <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={isSpeaking ? 2 : 0.5} toneMapped={false} />
          </Box>
        ))}
      </group>
    </group>
  );
}
