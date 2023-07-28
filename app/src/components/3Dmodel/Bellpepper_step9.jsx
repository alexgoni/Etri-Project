/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 bellpepper_step9.gltf --transform
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/glb/bellpepper_step9-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0, 80]}
        rotation={[Math.PI, -0.88, Math.PI]}
        scale={20}
      >
        <mesh geometry={nodes["result-8"].geometry} material={materials.stem} />
        <mesh
          geometry={nodes["result-8_1"].geometry}
          material={materials.fruit_growing}
        />
        <mesh
          geometry={nodes["result-8_2"].geometry}
          material={materials.VG07brn1}
        />
        <mesh
          geometry={nodes["result-8_3"].geometry}
          material={materials.leaf_disease}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glb/bellpepper_step9-transformed.glb");
