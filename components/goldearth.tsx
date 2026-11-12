
"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function createGoldEarthTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;

  const ctx = canvas.getContext("2d")!;

  // Deep golden-brown ocean
  const ocean = ctx.createLinearGradient(0, 0, 2048, 1024);
  ocean.addColorStop(0, "#4b2608");
  ocean.addColorStop(0.45, "#b77b26");
  ocean.addColorStop(1, "#321504");

  ctx.fillStyle = ocean;
  ctx.fillRect(0, 0, 2048, 1024);

  // Latitude lines
  ctx.strokeStyle = "rgba(255,220,140,0.28)";
  ctx.lineWidth = 3;

  for (let i = 1; i < 8; i++) {
    const y = (1024 / 8) * i;
    ctx.beginPath();
    ctx.ellipse(1024, y, 1000, 65, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Longitude lines
  for (let i = 0; i < 12; i++) {
    const x = (2048 / 12) * i;
    ctx.beginPath();
    ctx.ellipse(x, 512, 75, 510, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Recognizable simplified continental silhouettes
  const continents = [
    [[0.12,0.20],[0.18,0.12],[0.24,0.16],[0.27,0.24],[0.24,0.32],[0.21,0.36],[0.20,0.45],[0.17,0.49],[0.15,0.39],[0.11,0.33]],
    [[0.23,0.48],[0.28,0.51],[0.30,0.60],[0.28,0.72],[0.25,0.84],[0.22,0.76],[0.21,0.63]],
    [[0.42,0.18],[0.48,0.13],[0.54,0.17],[0.57,0.25],[0.53,0.31],[0.50,0.38],[0.47,0.33],[0.44,0.29]],
    [[0.49,0.37],[0.55,0.35],[0.59,0.43],[0.57,0.54],[0.53,0.66],[0.49,0.59],[0.46,0.47]],
    [[0.62,0.20],[0.69,0.15],[0.77,0.18],[0.82,0.25],[0.78,0.32],[0.73,0.34],[0.70,0.41],[0.66,0.34],[0.61,0.31]],
    [[0.70,0.49],[0.76,0.47],[0.80,0.53],[0.77,0.60],[0.72,0.58]],
    [[0.84,0.64],[0.89,0.62],[0.92,0.68],[0.88,0.73],[0.84,0.70]]
  ];

  const gold = ctx.createLinearGradient(0, 100, 2048, 900);
  gold.addColorStop(0, "#fff0b0");
  gold.addColorStop(0.45, "#e8b84f");
  gold.addColorStop(1, "#9d6018");

  continents.forEach((points) => {
    ctx.beginPath();
    points.forEach(([x, y], index) => {
      const px = x * 2048;
      const py = y * 1024;
      if (index === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.fillStyle = gold;
    ctx.fill();
    ctx.strokeStyle = "rgba(255,235,175,0.65)";
    ctx.lineWidth = 4;
    ctx.stroke();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

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

function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  const [texture, setTexture] =
    useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    const map = createGoldEarthTexture();
    setTexture(map);

    return () => map.dispose();
  }, []);

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
      {/* Atmospheric golden glow */}
      <mesh scale={1.13}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#c9943c"
          transparent
          opacity={0.055}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Rotating Earth */}
      <group ref={globeRef}>
        <mesh>
          <sphereGeometry args={[1, 128, 128]} />
          <meshStandardMaterial
            map={texture ?? undefined}
            color={texture ? "#ffffff" : "#bd8734"}
            metalness={0.72}
            roughness={0.29}
            emissive="#542900"
            emissiveIntensity={0.12}
          />
        </mesh>

        {/* Subtle outer rim */}
        <mesh scale={1.008}>
          <sphereGeometry args={[1, 96, 96]} />
          <meshBasicMaterial
            color="#e5b75d"
            wireframe
            transparent
            opacity={0.035}
          />
        </mesh>
      </group>

      {/* Horizontal / equatorial axis */}
      <Orbit
        radius={1.34}
        color="#f1d18b"
        tilt={[Math.PI / 2, 0, 0]}
        speed={[0.06, 0.16, 0.1]}
        thickness={0.009}
      />

      {/* Vertical axis */}
      <Orbit
        radius={1.39}
        color="#c69a4d"
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
    <div className="w-full h-full min-h-[420px]">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
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
