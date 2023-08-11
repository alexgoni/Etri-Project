import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/gltf/level1.gltf");
  return (
    
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_001">
          <mesh
            name="result-5_004"
            castShadow
            receiveShadow
            geometry={nodes["result-5_004"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={nodes["result-5_004"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_004"].morphTargetInfluences}
          />
          <mesh
            name="result-5_004_1"
            castShadow
            receiveShadow
            geometry={nodes["result-5_004_1"].geometry}
            material={materials.leaf_disease2}
            morphTargetDictionary={
              nodes["result-5_004_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_004_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_004_2"
            castShadow
            receiveShadow
            geometry={nodes["result-5_004_2"].geometry}
            material={materials.leaf_disease3}
            morphTargetDictionary={
              nodes["result-5_004_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_004_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_004_3"
            castShadow
            receiveShadow
            geometry={nodes["result-5_004_3"].geometry}
            material={materials.leaf_disease4}
            morphTargetDictionary={
              nodes["result-5_004_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_004_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_004_4"
            castShadow
            receiveShadow
            geometry={nodes["result-5_004_4"].geometry}
            material={materials.petals}
            morphTargetDictionary={
              nodes["result-5_004_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_004_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_004_5"
            castShadow
            receiveShadow
            geometry={nodes["result-5_004_5"].geometry}
            material={materials.stamens}
            morphTargetDictionary={
              nodes["result-5_004_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_004_5"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_004_6"
            castShadow
            receiveShadow
            geometry={nodes["result-5_004_6"].geometry}
            material={materials.stem}
            morphTargetDictionary={
              nodes["result-5_004_6"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_004_6"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

// Canvas 컴포넌트로 감싸서 useAnimations를 Canvas 내부에서 사용하도록 변경
export const Level1Canvas = () => {
    const { animations } = useGLTF("/gltf/level1.gltf");
    const group = useRef();
  
    return (
      <Canvas>
        <Model group={group} animations={animations} />
      </Canvas>
    );
  };

useGLTF.preload("/gltf/level1.gltf");
