import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import DiseaseAnimation from "@/components/3Dmodel/Disease-animation";

function Animation() {
  // 애니메이션 재생 여부를 나타내는 상태와 함수 정의
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);

  // 애니메이션을 멈추거나 재생하는 함수
  const toggleAnimation = () => {
    setIsAnimationPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <>
      <Navbar />
      <Canvas style={{ height: "100vh" }}>
        <Stage environment="city" intensity={0.6}>
          <group>
            {/* DiseaseAnimation 컴포넌트에 애니메이션 재생 여부 상태와 함수 전달 */}
            <DiseaseAnimation isPlaying={isAnimationPlaying} />
          </group>
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      {/* 버튼 추가 */}
      <button
        className="block mx-auto bg-blue-500 p-2 rounded-md"
        onClick={toggleAnimation}
      >
        {isAnimationPlaying ? "애니메이션 멈춤" : "애니메이션 재생"}
      </button>
    </>
  );
}

export default Animation;
