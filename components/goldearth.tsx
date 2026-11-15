
"use client";

import { useEffect, useRef } from "react";
import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";
import * as THREE from "three";

// Responsive camera — desktop framing preserved
function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;

    const isMobile = size.width < 768;

    camera.position.set(0, 0, isMobile ? 4.5 : 4.2);
    camera.fov = 38;
    camera.updateProjectionMatrix();
  }, [camera, size.width]);

  return null;
}

// Original orbital animation
function Orbit({
  radius,
  color,
  tilt,
  speed,
  thickness,
}: {
  radius: number;
  color: string;
  tilt: [number, number, number];
  speed: [number, number, number];
  thickness: number;
}) {
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!orbitRef.current) return;

    orbitRef.current.rotation.x += delta * speed[0];
    orbitRef.current.rotation.y += delta * speed[1];
    orbitRef.current.rotation.z += delta * speed[2];
  });

  return (
    <group rotation={tilt}>
      <group ref={orbitRef}>
        <mesh>
          <torusGeometry args={[radius, thickness, 12, 220]} />
          <meshStandardMaterial
            color={color}
            metalness={0.95}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.12}
          />
        </mesh>
      </group>
    </group>
  );
}

// Ivory-white / silver globe
function Globe() {
  const globeRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!globeRef.current) return;

    globeRef.current.rotation.y += delta * 0.12;

    globeRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.18) * 0.08;

    globeRef.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.12) * 0.035;
  });

  return (
    <>
      {/* Soft atmospheric glow */}
      <mesh scale={1.13}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#e8dfc9"
          transparent
          opacity={0.055}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main silver globe */}
      <group ref={globeRef}>
        <mesh>
          <sphereGeometry args={[1, 128, 128]} />
          <meshStandardMaterial
            color="#e9e6dc"
            metalness={0.32}
            roughness={0.3}
          />
        </mesh>

        {/* Subtle surface mesh */}
        <mesh scale={1.001}>
          <sphereGeometry args={[1, 96, 96]} />
          <meshBasicMaterial
            color="#a9a69d"
            wireframe
            transparent
            opacity={0.045}
          />
        </mesh>

        {/* Subtle outer rim */}
        <mesh scale={1.008}>
          <sphereGeometry args={[1, 96, 96]} />
          <meshBasicMaterial
            color="#e5dfcf"
            wireframe
            transparent
            opacity={0.025}
          />
        </mesh>
      </group>

      {/* Horizontal orbital axis */}
      <Orbit
        radius={1.34}
        color="#d6a84e"
        tilt={[Math.PI / 2, 0, 0]}
        speed={[0.06, 0.16, 0.1]}
        thickness={0.009}
      />

      {/* Vertical orbital axis */}
      <Orbit
        radius={1.39}
        color="#b88938"
        tilt={[0, Math.PI / 2, 0]}
        speed={[0.14, 0.07, 0.12]}
        thickness={0.007}
      />

      {/* Diagonal orbital axis */}
      <Orbit
        radius={1.45}
        color="#e2c27e"
        tilt={[0.85, 0.65, 0.5]}
        speed={[0.11, 0.13, 0.08]}
        thickness={0.005}
      />
    </>
  );
}

export default function GoldEarth() {
  return (
    <div className="h-full w-full min-h-0">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ResponsiveCamera />

        <ambientLight intensity={0.65} />

        <pointLight
          position={[3, 3, 4]}
          intensity={95}
          color="#fff0c5"
        />

        <pointLight
          position={[-3, -1, 2]}
          intensity={45}
          color="#d99a37"
        />

        <pointLight
          position={[0, -3, -3]}
          intensity={25}
          color="#ffb84d"
        />

        <Globe />
      </Canvas>
    </div>
  );
}
