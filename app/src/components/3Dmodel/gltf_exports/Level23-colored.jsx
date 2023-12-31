/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 level23-colored.gltf --transform
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/glb/level23-colored-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (props.play) {
      actions["Key.001Action.001"].play();
    }
  }, [props.play]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_023">
          <mesh
            name="result-5_031"
            geometry={nodes["result-5_031"].geometry}
            material={materials["stem.001"]}
            morphTargetDictionary={nodes["result-5_031"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_031"].morphTargetInfluences}
          />
          <mesh
            name="result-5_031_1"
            geometry={nodes["result-5_031_1"].geometry}
            material={materials.fruit_green}
            morphTargetDictionary={
              nodes["result-5_031_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_031_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_031_2"
            geometry={nodes["result-5_031_2"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_031_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_031_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_031_3"
            geometry={nodes["result-5_031_3"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_031_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_031_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_031_4"
            geometry={nodes["result-5_031_4"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_031_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_031_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_031_5"
            geometry={nodes["result-5_031_5"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_031_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_031_5"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_031_6"
            geometry={nodes["result-5_031_6"].geometry}
            material={materials["stem.001"]}
            morphTargetDictionary={
              nodes["result-5_031_6"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_031_6"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/level23-colored-transformed.glb");
