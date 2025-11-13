"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ADUStructure() {
  const meshRef = useRef<THREE.Group>(null);
  const progressRef = useRef(0);

  // Create ADU building structure
  const components = useMemo(() => {
    return [
      // Foundation
      { position: [0, 0.1, 0], scale: [4, 0.2, 3], color: "#666", delay: 0 },

      // Floor
      { position: [0, 0.3, 0], scale: [3.8, 0.1, 2.8], color: "#8B7355", delay: 0.2 },

      // Walls
      { position: [-1.9, 1, 0], scale: [0.1, 1.5, 2.8], color: "#E8E8E8", delay: 0.4 }, // Left wall
      { position: [1.9, 1, 0], scale: [0.1, 1.5, 2.8], color: "#E8E8E8", delay: 0.5 }, // Right wall
      { position: [0, 1, -1.4], scale: [3.8, 1.5, 0.1], color: "#E8E8E8", delay: 0.6 }, // Back wall
      { position: [0, 1, 1.4], scale: [3.8, 1.5, 0.1], color: "#E8E8E8", delay: 0.7 }, // Front wall

      // Window
      { position: [0, 1.2, 1.41], scale: [1, 0.8, 0.05], color: "#87CEEB", delay: 0.75 },

      // Door frame
      { position: [1, 0.8, 1.41], scale: [0.6, 1.3, 0.05], color: "#654321", delay: 0.8 },

      // Roof
      { position: [0, 2, 0], scale: [4.2, 0.1, 3.2], color: "#2C3E50", delay: 0.9 },
    ];
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Slowly rotate the entire structure
      meshRef.current.rotation.y += delta * 0.15;

      // Animate construction progress
      progressRef.current = Math.min(progressRef.current + delta * 0.3, 1);
    }
  });

  return (
    <group ref={meshRef} position={[0, -1, 0]}>
      {components.map((component, index) => {
        const progress = Math.max(0, Math.min(1, (progressRef.current - component.delay) * 2));

        return (
          <mesh
            key={index}
            position={component.position as [number, number, number]}
            scale={component.scale.map(s => s * progress) as [number, number, number]}
          >
            <boxGeometry />
            <meshStandardMaterial
              color={component.color}
              roughness={0.7}
              metalness={0.2}
            />
          </mesh>
        );
      })}

      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#175442" opacity={0.15} transparent />
      </mesh>
    </group>
  );
}

export default function ADUAnimation() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 3, 5], fov: 50 }}
        shadows
        className="bg-transparent"
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, 5, -5]} intensity={0.5} />

        <ADUStructure />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
