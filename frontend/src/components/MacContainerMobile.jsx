import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useMemo, useEffect, useState, useRef } from 'react'
import * as THREE from 'three'

function MacContainerMobile() {
  const model = useGLTF("./mac.glb")
  const image = useTexture('./image3.webp')
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef(null)

  // Memoize meshes to avoid recreating on every render
  const meshes = useMemo(() => {
    const meshMap = {}
    if (model?.scene) {
      model.scene.traverse((e) => {
        if (e.name) {
          meshMap[e.name] = e
        }
      })
    }
    return meshMap
  }, [model])

  // Initialize mesh properties once
  useEffect(() => {
    if (meshes.screen) {
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(180)
    }
    
    if (meshes.matte && meshes.matte.material) {
      meshes.matte.material.map = image
      meshes.matte.material.emissiveIntensity = 0
      meshes.matte.material.needsUpdate = true
    }
  }, [meshes, image])

  const targetRotationRef = useRef(110)
  const currentRotationRef = useRef(150)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      // Open smoothly within the first 300px
      const threshold = 300 
      const progress = Math.min(scrollTop / threshold, 1)
      
      // Start 70% open (180 - 0.7 * 85 ~= 120), animate to 100% open (95)
      const baseProgress = 0.7
      const effectiveProgress = baseProgress + (progress * (1 - baseProgress))
      targetRotationRef.current = 180 - effectiveProgress * 85
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame((state, delta) => {
    if (meshes.screen) {
      // Smoothly lerp towards the target rotation for a premium feel
      currentRotationRef.current = THREE.MathUtils.lerp(
        currentRotationRef.current,
        targetRotationRef.current,
        0.1
      )
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(currentRotationRef.current)
    }
  })

  // Lowered the Mac model even further for a centered vertical look
  const position = [0, -7, 15] 
  const scale = 0.65 

  return (
    <group position={position} scale={scale}>
      <primitive object={model.scene}></primitive>
    </group>
  )
} 

export default MacContainerMobile

