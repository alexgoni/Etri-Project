import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
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

function VRAR() {
  const modelNum = 10;
  const [currentPepperIndex, setCurrentPepperIndex] = useState(0);

  const handleSliderChange = (event) => {
    const newIndex = parseInt(event.target.value, 10);
    setCurrentPepperIndex(newIndex);
  };

  const pepperModels = [
    Bellpepper_step1,
    Bellpepper_step2,
    Bellpepper_step3,
    Bellpepper_step4,
    Bellpepper_step5,
    Bellpepper_step6,
    Bellpepper_step7,
    Bellpepper_step8,
    Bellpepper_step9,
    Bellpepper_step10,
  ];

  const CurrentModel = pepperModels[currentPepperIndex];

  return (
    <>
      <Navbar />
      <div className="h-80">
        <Canvas>
          <Stage environment="city" intensity={0.6}>
            {/* Render the current paprika model based on the currentPaprikaIndex */}
            <group>
              <CurrentModel />
            </group>
          </Stage>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <input
        className="mx-auto block w-96"
        type="range"
        min={0}
        max={modelNum - 1}
        value={currentPepperIndex}
        onChange={handleSliderChange}
      />
    </>
  );
}

export default VRAR;
