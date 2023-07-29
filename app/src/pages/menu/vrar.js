import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import Bellpepper_step1 from "@/components/3Dmodel/Bellpepper_step1";
import Bellpepper_step2 from "@/components/3Dmodel/Bellpepper_step2";
import Bellpepper_step3 from "@/components/3Dmodel/Bellpepper_step3";
import Bellpepper_step4 from "@/components/3Dmodel/Bellpepper_step4";
import Bellpepper_step5 from "@/components/3Dmodel/Bellpepper_step5";
import Bellpepper_step6 from "@/components/3Dmodel/Bellpepper_step6";
import Bellpepper_step7 from "@/components/3Dmodel/Bellpepper_step7";
import Bellpepper_step8 from "@/components/3Dmodel/Bellpepper_step8";
import Bellpepper_step9 from "@/components/3Dmodel/Bellpepper_step9";
import Bellpepper_step10 from "@/components/3Dmodel/Bellpepper_step10";

const ModelContainer = ({ model }) => {
  return <group key={Math.random().toString()}>{model}</group>;
};

function CameraControls() {
  const { camera } = useThree();
  camera.position.z = -7;
  return <OrbitControls args={[camera]} enableDamping dampingFactor={0.2} />;
}

function VRAR() {
  const modelNum = 10;
  const [currentPepperIndex, setCurrentPepperIndex] = useState(0);

  const handleSliderChange = (event) => {
    const newIndex = parseInt(event.target.value, 10);
    setCurrentPepperIndex(newIndex);
  };

  // 각 모델을 배열로 생성하여 재사용
  const pepperModels = [
    <Bellpepper_step1 />,
    <Bellpepper_step2 />,
    <Bellpepper_step3 />,
    <Bellpepper_step4 />,
    <Bellpepper_step5 />,
    <Bellpepper_step6 />,
    <Bellpepper_step7 />,
    <Bellpepper_step8 />,
    <Bellpepper_step9 />,
    <Bellpepper_step10 />,
  ];

  const CurrentModel = pepperModels[currentPepperIndex];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div
          style={{ width: "800px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <Canvas
            style={{ width: "100%", height: "500px", borderRadius: "8px" }}
          >
            <CameraControls />
            <ambientLight intensity={1.2} />
            <ModelContainer model={CurrentModel} />
          </Canvas>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>생장 정도:</div>
          <input
            type="range"
            min={0}
            max={modelNum - 1}
            value={currentPepperIndex}
            onChange={handleSliderChange}
            style={{
              width: "300px",
              height: "20px",
              borderRadius: "10px",
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default VRAR;
