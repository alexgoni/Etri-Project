import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/gltf/level20.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_020">
          <mesh
            name="result-5_029"
            castShadow
            receiveShadow
            geometry={nodes["result-5_029"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={nodes["result-5_029"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_029"].morphTargetInfluences}
          />
          <mesh
            name="result-5_029_1"
            castShadow
            receiveShadow
            geometry={nodes["result-5_029_1"].geometry}
            material={materials.leaf_disease2}
            morphTargetDictionary={
              nodes["result-5_029_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_029_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_029_2"
            castShadow
            receiveShadow
            geometry={nodes["result-5_029_2"].geometry}
            material={materials.leaf_disease3}
            morphTargetDictionary={
              nodes["result-5_029_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_029_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_029_3"
            castShadow
            receiveShadow
            geometry={nodes["result-5_029_3"].geometry}
            material={materials.leaf_disease4}
            morphTargetDictionary={
              nodes["result-5_029_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_029_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_029_4"
            castShadow
            receiveShadow
            geometry={nodes["result-5_029_4"].geometry}
            material={materials.petals}
            morphTargetDictionary={
              nodes["result-5_029_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_029_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_029_5"
            castShadow
            receiveShadow
            geometry={nodes["result-5_029_5"].geometry}
            material={materials.stamens}
            morphTargetDictionary={
              nodes["result-5_029_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_029_5"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_029_6"
            castShadow
            receiveShadow
            geometry={nodes["result-5_029_6"].geometry}
            material={materials.stem}
            morphTargetDictionary={
              nodes["result-5_029_6"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_029_6"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

export const Level20Canvas = () => {
  const { animations } = useGLTF("/gltf/level20.gltf");
  const group = useRef();

  return (
    <Canvas>
      <Model group={group} animations={animations} />
    </Canvas>
  );
};


useGLTF.preload("/gltf/level20.gltf");