import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/gltf/level16.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_016">
          <mesh
            name="result-5_025"
            castShadow
            receiveShadow
            geometry={nodes["result-5_025"].geometry}
            material={materials.leaf_disease}
            morphTargetDictionary={nodes["result-5_025"].morphTargetDictionary}
            morphTargetInfluences={nodes["result-5_025"].morphTargetInfluences}
          />
          <mesh
            name="result-5_025_1"
            castShadow
            receiveShadow
            geometry={nodes["result-5_025_1"].geometry}
            material={materials.leaf_disease2}
            morphTargetDictionary={
              nodes["result-5_025_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_025_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_025_2"
            castShadow
            receiveShadow
            geometry={nodes["result-5_025_2"].geometry}
            material={materials.leaf_disease3}
            morphTargetDictionary={
              nodes["result-5_025_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_025_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_025_3"
            castShadow
            receiveShadow
            geometry={nodes["result-5_025_3"].geometry}
            material={materials.leaf_disease4}
            morphTargetDictionary={
              nodes["result-5_025_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_025_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_025_4"
            castShadow
            receiveShadow
            geometry={nodes["result-5_025_4"].geometry}
            material={materials.petals}
            morphTargetDictionary={
              nodes["result-5_025_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_025_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_025_5"
            castShadow
            receiveShadow
            geometry={nodes["result-5_025_5"].geometry}
            material={materials.stamens}
            morphTargetDictionary={
              nodes["result-5_025_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_025_5"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_025_6"
            castShadow
            receiveShadow
            geometry={nodes["result-5_025_6"].geometry}
            material={materials.stem}
            morphTargetDictionary={
              nodes["result-5_025_6"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_025_6"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

export const Level16Canvas = () => {
  const { animations } = useGLTF("/gltf/level16.gltf");
  const group = useRef();

  return (
    <Canvas>
      <Model group={group} animations={animations} />
    </Canvas>
  );
};


useGLTF.preload("/gltf/level16.gltf");