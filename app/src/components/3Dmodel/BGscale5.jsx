/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 bg-scale5.gltf --transform
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/glb/bg-scale5-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="SCALE5"
          geometry={nodes.SCALE5.geometry}
          material={materials.Material}
        />
        <group name="result_015">
          <mesh
            name="result-5_026"
            geometry={nodes["result-5_026"].geometry}
            material={materials["leaf_disease.006"]}
            morphTargetDictionary={nodes["result-5_026"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_026"].morphTargetInfluences}
          />
          <mesh
            name="result-5_026_1"
            geometry={nodes["result-5_026_1"].geometry}
            material={materials["leaf_disease.006"]}
            morphTargetDictionary={
              nodes["result-5_026_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_026_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_026_2"
            geometry={nodes["result-5_026_2"].geometry}
            material={materials["leaf_disease.006"]}
            morphTargetDictionary={
              nodes["result-5_026_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_026_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_026_3"
            geometry={nodes["result-5_026_3"].geometry}
            material={materials["leaf_disease.006"]}
            morphTargetDictionary={
              nodes["result-5_026_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_026_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_026_4"
            geometry={nodes["result-5_026_4"].geometry}
            material={materials["petals.006"]}
            morphTargetDictionary={
              nodes["result-5_026_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_026_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_026_5"
            geometry={nodes["result-5_026_5"].geometry}
            material={materials["stem.006"]}
            morphTargetDictionary={
              nodes["result-5_026_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_026_5"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/bg-scale5-transformed.glb");
