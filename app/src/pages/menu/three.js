import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";

function Three() {
  return (
    <>
      <div className="mt-40">
        <Canvas>
          <Stage environment="city" intensity={0.6}></Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
    </>
  );
}

export default Three;

// import React, { useState } from "react";
// import Navbar from "@/components/Navbar";
// import { Canvas } from "@react-three/fiber";
// import { Stage, OrbitControls } from "@react-three/drei";
// import Paprika from "@/components/3Dmodel/Paprika.jsx";
// import Paprika2 from "@/components/3Dmodel/Paprika2.jsx";
// import Paprika3 from "@/components/3Dmodel/Paprika3.jsx";

// function Three() {
//   const numPaprikas = 3; // 파프리카의 개수
//   const [currentPaprikaIndex, setCurrentPaprikaIndex] = useState(0);

//   // 슬라이드 바를 조작할 때 호출되는 함수
//   const handleSliderChange = (event) => {
//     const newIndex = parseInt(event.target.value, 10);
//     setCurrentPaprikaIndex(newIndex);
//   };

//   // Array of different paprika models
//   const paprikaModels = [Paprika, Paprika2, Paprika3];

//   // Get the currently selected model
//   const CurrentPaprikaModel = paprikaModels[currentPaprikaIndex];

//   return (
//     <>
//       <Navbar />
//       <div className="h-80">
//         <Canvas>
//           <Stage environment="city" intensity={0.6}>
//             {/* Render the current paprika model based on the currentPaprikaIndex */}
//             <group>
//               <CurrentPaprikaModel />
//             </group>
//           </Stage>
//           <OrbitControls enableZoom={false} />
//         </Canvas>
//       </div>
//       {/* 슬라이드 바를 사용하여 파프리카 모델 변경 */}
//       <input
//         className="mx-auto block"
//         type="range"
//         min={0}
//         max={numPaprikas - 1}
//         value={currentPaprikaIndex}
//         onChange={handleSliderChange}
//       />
//     </>
//   );
// }

// export default Three;
