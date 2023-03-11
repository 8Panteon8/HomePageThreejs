import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cactus-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.44}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.body_body_0.geometry} material={materials.body} scale={100} />
          <mesh geometry={nodes.balloon_Balloon_0.geometry} material={materials.Balloon} position={[-132.89, -0.87, 99.22]} scale={100} />
          <mesh geometry={nodes.shadow_shadow_0.geometry} material={materials.shadow} position={[-44.53, -334.89, -45.07]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[174.08, 174.08, 363.68]} />
          <mesh geometry={nodes.hair_hair_0.geometry} material={materials.hair} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cactus-transformed.glb')
