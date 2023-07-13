import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import Paprika from "@/components/3Dmodel/Paprika.jsx";

function three() {
  return (
    <>
      <Navbar />
      <Canvas style={{ height: "100vh" }}>
        <Stage environment="city" intensity={0.6}>
          <Paprika />
        </Stage>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default three;
