import React from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';

export const HealixPro = ({ onClick }) => {
  const meshRef = React.useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]} onClick={onClick}>
      <torusGeometry args={[1, 0.4, 32, 100]} />
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0}
      />
    </mesh>
  );
};

export const HealixMini = ({ onClick }) => {
  const meshRef = React.useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]} onClick={onClick}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color="#3B82F6"
        attach="material"
        distort={0.2}
        speed={1.5}
        roughness={0}
      />
    </mesh>
  );
};

export const EssentialOils = ({ onClick }) => {
  const meshRef = React.useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={[1.5, 2, 1.5]} onClick={onClick}>
      <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
      <MeshDistortMaterial
        color="#EC4899"
        attach="material"
        distort={0.2}
        speed={1.5}
        roughness={0}
      />
    </mesh>
  );
};