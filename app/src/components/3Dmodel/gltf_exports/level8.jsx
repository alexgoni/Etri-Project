import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/gltf/level8.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_008">
          <mesh
            name="result-5_006"
            castShadow
            receiveShadow
            geometry={nodes["result-5_006"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={nodes["result-5_006"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_006"].morphTargetInfluences}
          />
          <mesh
            name="result-5_006_1"
            castShadow
            receiveShadow
            geometry={nodes["result-5_006_1"].geometry}
            material={materials.leaf_disease2}
            morphTargetDictionary={
              nodes["result-5_006_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_006_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_006_2"
            castShadow
            receiveShadow
            geometry={nodes["result-5_006_2"].geometry}
            material={materials.leaf_disease3}
            morphTargetDictionary={
              nodes["result-5_006_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_006_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_006_3"
            castShadow
            receiveShadow
            geometry={nodes["result-5_006_3"].geometry}
            material={materials.leaf_disease4}
            morphTargetDictionary={
              nodes["result-5_006_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_006_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_006_4"
            castShadow
            receiveShadow
            geometry={nodes["result-5_006_4"].geometry}
            material={materials.petals}
            morphTargetDictionary={
              nodes["result-5_006_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_006_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_006_5"
            castShadow
            receiveShadow
            geometry={nodes["result-5_006_5"].geometry}
            material={materials.stamens}
            morphTargetDictionary={
              nodes["result-5_006_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_006_5"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_006_6"
            castShadow
            receiveShadow
            geometry={nodes["result-5_006_6"].geometry}
            material={materials.stem}
            morphTargetDictionary={
              nodes["result-5_006_6"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_006_6"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

export const Level8Canvas = () => {
    const { animations } = useGLTF("/gltf/level8.gltf");
    const group = useRef();
  
    return (
      <Canvas>
        <Model group={group} animations={animations} />
      </Canvas>
    );
  };


useGLTF.preload("/gltf/level8.gltf");