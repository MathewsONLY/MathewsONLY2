"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Text, Stars, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function RotatingSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.25;
    ref.current.rotation.x += delta * 0.1;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]} castShadow receiveShadow>
      <icosahedronGeometry args={[1.2, 2]} />
      <meshStandardMaterial color="#4f46e5" metalness={0.3} roughness={0.2} />
    </mesh>
  );
}

function FloatingWords() {
  const words = ["Respeito", "Equidade", "Justiça", "Empatia", "Diversidade", "Ação"];
  return (
    <group>
      {words.map((w, i) => (
        <Float key={w} speed={2} rotationIntensity={0.5} floatIntensity={1.2} position={[Math.sin(i) * 3, Math.cos(i * 1.3) * 1.2, -i * 0.05]}>
          <Text fontSize={0.5} color="#eab308" outlineWidth={0.01} outlineColor="#111827">
            {w}
          </Text>
        </Float>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} shadows dpr={[1, 2]}>
      <color attach="background" args={["#0a0a0a"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <Environment preset="city" />

      <group>
        <RotatingSphere />
        <FloatingWords />
      </group>

      <Stars radius={80} depth={50} count={1200} factor={4} fade />

      <EffectComposer>
        <Bloom intensity={0.6} luminanceThreshold={0.2} luminanceSmoothing={0.9} mipmapBlur />
        <Vignette eskil={false} offset={0.1} darkness={0.9} />
      </EffectComposer>

      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  );
}