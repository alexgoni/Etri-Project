import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/gltf/level4.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_004">
          <mesh
            name="result-5_016"
            castShadow
            receiveShadow
            geometry={nodes["result-5_016"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={nodes["result-5_016"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_016"].morphTargetInfluences}
          />
          <mesh
            name="result-5_016_1"
            castShadow
            receiveShadow
            geometry={nodes["result-5_016_1"].geometry}
            material={materials.leaf_disease2}
            morphTargetDictionary={
              nodes["result-5_016_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_016_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_016_2"
            castShadow
            receiveShadow
            geometry={nodes["result-5_016_2"].geometry}
            material={materials.leaf_disease3}
            morphTargetDictionary={
              nodes["result-5_016_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_016_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_016_3"
            castShadow
            receiveShadow
            geometry={nodes["result-5_016_3"].geometry}
            material={materials.leaf_disease4}
            morphTargetDictionary={
              nodes["result-5_016_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_016_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_016_4"
            castShadow
            receiveShadow
            geometry={nodes["result-5_016_4"].geometry}
            material={materials.petals}
            morphTargetDictionary={
              nodes["result-5_016_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_016_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_016_5"
            castShadow
            receiveShadow
            geometry={nodes["result-5_016_5"].geometry}
            material={materials.stamens}
            morphTargetDictionary={
              nodes["result-5_016_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_016_5"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_016_6"
            castShadow
            receiveShadow
            geometry={nodes["result-5_016_6"].geometry}
            material={materials.stem}
            morphTargetDictionary={
              nodes["result-5_016_6"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_016_6"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

export const Level4Canvas = () => {
  const { animations } = useGLTF("/gltf/level4.gltf");
  const group = useRef();

  return (
    <Canvas>
      <Model group={group} animations={animations} />
    </Canvas>
  );
};


useGLTF.preload("/gltf/level4.gltf");