"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function AnimatedSpheres() {
  const pointsRef = useRef<THREE.Points>(null)
  
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.3
      pointsRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.15) * 0.3
    }
  })

  return (
    <>
      <Points
        ref={pointsRef}
        positions={new Float32Array(3000).fill(0).map(() => (Math.random() - 0.5) * 15)}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
      <Points
        positions={new Float32Array(1000).fill(0).map(() => (Math.random() - 0.5) * 10)}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#60a5fa"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </>
  )
}

export default function Background3D() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-blue-50/90 to-white/90" />
    )
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-blue-50/90 to-white/90" />
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <AnimatedSpheres />
        </Canvas>
      </div>
    </>
  )
} 