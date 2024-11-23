import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';

export function Box() {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0}
      />
    </mesh>
  );
}