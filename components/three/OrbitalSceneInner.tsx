"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface OrbitalSceneInnerProps {
  reducedMotion?: boolean;
}

export default function OrbitalSceneInner({ reducedMotion = false }: OrbitalSceneInnerProps) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const ring3Ref = useRef<THREE.Group>(null);
  const ring4Ref = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const pulseBeaconsRef = useRef<THREE.Group>(null);

  // Generate orbital constellation particles
  const particleCount = 280;
  const { positions, colors, scales } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const sca = new Float32Array(particleCount);

    const cyan = new THREE.Color("#35C6DF");
    const electric = new THREE.Color("#3478F6");
    const brightCyan = new THREE.Color("#67DCEB");
    const white = new THREE.Color("#FFFFFF");

    for (let i = 0; i < particleCount; i++) {
      // Create layered orbits around the central equipment focal point
      const orbitTier = i % 4;
      const radius = 2.2 + orbitTier * 0.7 + (Math.random() - 0.5) * 0.35;
      const theta = (i / particleCount) * Math.PI * 2 * 3 + Math.random() * 0.2;
      const inclination = (orbitTier * 0.45) - 0.5;

      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = Math.sin(theta) * radius * Math.sin(inclination) + (Math.random() - 0.5) * 0.3;
      pos[i * 3 + 2] = Math.sin(theta) * radius * Math.cos(inclination);

      const color = orbitTier === 0 ? cyan : orbitTier === 1 ? electric : orbitTier === 2 ? brightCyan : white;
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;

      sca[i] = Math.random() * 0.05 + 0.03;
    }
    return { positions: pos, colors: col, scales: sca };
  }, [particleCount]);

  useFrame((state, delta) => {
    if (reducedMotion) return;

    const t = state.clock.getElapsedTime();

    // Gentle pointer tracking parallax
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        state.pointer.x * 0.35,
        0.06
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -state.pointer.y * 0.25,
        0.06
      );
    }

    // Breathing glowing core
    if (coreRef.current) {
      const scale = 1 + Math.sin(t * 1.8) * 0.06;
      coreRef.current.scale.set(scale, scale, scale);
    }

    // Independent multi-axis orbital rings rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.14;
      ring1Ref.current.rotation.y = t * 0.09;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.11;
      ring2Ref.current.rotation.y = -t * 0.16;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = -t * 0.08;
      ring3Ref.current.rotation.x = t * 0.12;
    }
    if (ring4Ref.current) {
      ring4Ref.current.rotation.y = t * 0.18;
      ring4Ref.current.rotation.z = -t * 0.1;
    }

    // Particles swirl
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.09;
      particlesRef.current.rotation.z = t * 0.03;
    }

    // Pulse beacons orbiting along tracks
    if (pulseBeaconsRef.current) {
      pulseBeaconsRef.current.rotation.y = t * 0.22;
      pulseBeaconsRef.current.rotation.x = Math.sin(t * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Volumetric ambient & colored point lights */}
      <ambientLight intensity={0.8} />
      <pointLight position={[0, 0, 2.5]} intensity={3.0} color="#35C6DF" distance={12} />
      <pointLight position={[3.5, 2, -1]} intensity={2.2} color="#3478F6" distance={10} />
      <pointLight position={[-3, -2, 2]} intensity={1.8} color="#67DCEB" distance={8} />

      {/* Central Blue Glass Sphere (Focal Core) */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.25, 36, 36]} />
        <meshPhysicalMaterial
          color="#081B31"
          emissive="#102B49"
          emissiveIntensity={0.6}
          roughness={0.12}
          metalness={0.15}
          transmission={0.82}
          thickness={0.9}
          transparent
          opacity={0.7}
          reflectivity={0.95}
          clearcoat={1.0}
        />
      </mesh>

      {/* Inner Glowing Core Wireframe */}
      <mesh scale={[0.92, 0.92, 0.92]}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshBasicMaterial color="#35C6DF" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Primary Orbital Ring 1 (Cyan Incline) */}
      <group ref={ring1Ref} rotation={[0.55, 0.2, 0]}>
        <mesh>
          <torusGeometry args={[2.3, 0.022, 16, 120]} />
          <meshStandardMaterial
            color="#35C6DF"
            emissive="#35C6DF"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </group>

      {/* Secondary Orbital Ring 2 (Electric Blue Track) */}
      <group ref={ring2Ref} rotation={[-0.6, 0.9, 0.4]}>
        <mesh>
          <torusGeometry args={[3.0, 0.018, 16, 120]} />
          <meshStandardMaterial
            color="#3478F6"
            emissive="#205FE5"
            emissiveIntensity={0.7}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </group>

      {/* Tertiary Orbital Ring 3 (Outer Wide Horizon) */}
      <group ref={ring3Ref} rotation={[1.1, -0.4, 0.7]}>
        <mesh>
          <torusGeometry args={[3.7, 0.014, 16, 140]} />
          <meshStandardMaterial
            color="#67DCEB"
            emissive="#35C6DF"
            emissiveIntensity={0.6}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>

      {/* Ring 4 (Equatorial Telemetry Gyro) */}
      <group ref={ring4Ref} rotation={[0.1, 0, 0.85]}>
        <mesh>
          <torusGeometry args={[4.2, 0.01, 12, 140]} />
          <meshBasicMaterial color="#3478F6" transparent opacity={0.4} />
        </mesh>
      </group>

      {/* Pulse Beacon Spheres travelling along orbit */}
      <group ref={pulseBeaconsRef}>
        <mesh position={[2.3, 0, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
        <mesh position={[-3.0, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#35C6DF" />
        </mesh>
        <mesh position={[0, 3.7, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#67DCEB" />
        </mesh>
      </group>

      {/* Constellation Particle Cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.075}
          vertexColors
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
