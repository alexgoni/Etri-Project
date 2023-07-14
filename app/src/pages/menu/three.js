import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import Paprika from "@/components/3Dmodel/Paprika.jsx";

function three() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", overflowX: "scroll" }}>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
      </div>
      <div style={{ display: "flex", overflowX: "scroll" }}>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
      </div>
      <div style={{ display: "flex", overflowX: "scroll" }}>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
        <Canvas style={{ width: "100%" }}>
          <Stage environment="city" intensity={0.6}>
            <Paprika />
          </Stage>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default three;
