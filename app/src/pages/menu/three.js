import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Level1 from "@/components/3Dmodel/plant/Level1";
import Level2 from "@/components/3Dmodel/plant/Level2";
import Level3 from "@/components/3Dmodel/plant/Level3";
import Level4 from "@/components/3Dmodel/plant/Level4";
import Level5 from "@/components/3Dmodel/plant/Level5";
import Level6 from "@/components/3Dmodel/plant/Level6";
import Level7 from "@/components/3Dmodel/plant/Level7";
import Level8 from "@/components/3Dmodel/plant/Level8";
import Level9 from "@/components/3Dmodel/plant/Level9";
import Level10 from "@/components/3Dmodel/plant/Level10";
import Level11 from "@/components/3Dmodel/plant/Level11";
import Level12 from "@/components/3Dmodel/plant/Level12";
import Level13 from "@/components/3Dmodel/plant/Level13";
import Level14 from "@/components/3Dmodel/plant/Level14";
import Level15 from "@/components/3Dmodel/plant/Level15";
import Level16 from "@/components/3Dmodel/plant/Level16";
import Level17 from "@/components/3Dmodel/plant/Level17";
import Level18 from "@/components/3Dmodel/plant/Level18";
import Level19 from "@/components/3Dmodel/plant/Level19";
import Level20 from "@/components/3Dmodel/plant/Level20";
import Level21 from "@/components/3Dmodel/plant/Level21";
import Level22 from "@/components/3Dmodel/plant/Level22";
import Level23 from "@/components/3Dmodel/plant/Level23";
import Level24 from "@/components/3Dmodel/plant/Level24";
import Level25 from "@/components/3Dmodel/plant/Level25";
import Level26 from "@/components/3Dmodel/plant/Level26";
import Level27 from "@/components/3Dmodel/plant/Level27";
import Level28 from "@/components/3Dmodel/plant/Level28";
import Level29 from "@/components/3Dmodel/plant/Level29";
import Level30 from "@/components/3Dmodel/plant/Level30";

import Background from "@/components/3Dmodel/Background";

const ModelContainer = ({ model: ModelComponent, play, ...props }) => {
  return (
    <group {...props}>
      <ModelComponent play={play} />
    </group>
  );
};

function CameraControls() {
  const { camera } = useThree();
  camera.position.set(0, 5, 15);
}

const Three = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [chats, setChats] = useState([]);
  const [warning, setWarning] = useState(false);
  const [growthInterval, setGrowthInterval] = useState(10);

  const levels = [
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
    Level6,
    Level7,
    Level8,
    Level9,
    Level10,
    Level11,
    Level12,
    Level13,
    Level14,
    Level15,
    Level16,
    Level17,
    Level18,
    Level19,
    Level20,
    Level21,
    Level22,
    Level23,
    Level24,
    Level25,
    Level26,
    Level27,
    Level28,
    Level29,
    Level30,
  ];

  const modelNum = levels.length;
  const CurrentModel = levels[currentModelIndex];

  const handleIntervalChange = (event) => {
    const newInterval = parseInt(event.target.value);
    setGrowthInterval(newInterval);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!warning) {
        setCurrentModelIndex((prevIndex) => (prevIndex + 1) % modelNum);
      }
    }, growthInterval * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [modelNum, warning, growthInterval]);

  useEffect(() => {
    console.log(currentModelIndex);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/get-data?modelIndex=${currentModelIndex}`
        );
        const data = await response.json();

        if (data.messages.length > 0) {
          const newChat = {
            message: data.messages.join(" "),
            time: data.time,
            warning: data.messages.length >= 3,
          };
          setChats((prevChats) => [...prevChats, newChat]);
          setWarning(newChat.warning);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentModelIndex]);

  return (
    <>
      <Navbar />
      <div className="mt-8 flex flex-wrap gap-4 mx-auto justify-evenly items-center">
        <div className="w-3/5 shadow-2xl border-2 border-teal-500">
          <Canvas style={{ width: "100%", height: "500px" }}>
            <ambientLight intensity={0.5} />
            <directionalLight intensity={2.2} position={[10, 10, 5]} />
            <CameraControls />
            <Background position={[0, -6, -3]} />
            <ModelContainer
              model={CurrentModel}
              position={[0, -5.5, 0]}
              play={warning}
            />
            <OrbitControls autoRotate />
          </Canvas>
        </div>
        <div className="flex flex-col w-1/4 space-y-10">
          <div className="rounded-md border-2 border-gray-700 p-2 space-x-2 flex justify-center items-center">
            <label htmlFor="growthInterval" className="font-bold">
              생장 간격
            </label>
            <input
              type="number"
              id="growthInterval"
              value={growthInterval}
              onChange={handleIntervalChange}
              className="w-1/2 text-right"
              min="1"
            />
            <span className="mt-0.5 text-gray-">초</span>
          </div>

          <div className="rounded-md border-2 border-gray-700 p-2">
            <h1 className="text-center font-bold border-b-2 border-b-gray-500 pb-1">
              Alert
            </h1>
            <div className="mt-2 overflow-y-scroll h-[40vh] space-y-2">
              {chats.length === 0 ? (
                <div className="text-center text-gray-500 text-sm">
                  There is no alert.
                </div>
              ) : (
                <ChatBubble chats={chats} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ChatBubble = ({ chats }) => {
  return chats.map((chat, index) => {
    const formattedDate = new Date(chat.time).toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    const bubbleClassName = chat.warning
      ? "chat-bubble chat-bubble-error"
      : "chat-bubble";

    return (
      <div key={index} className="chat chat-start">
        <div className={bubbleClassName}>{chat.message}</div>
        <div className="chat-footer">
          <time className="text-xs opacity-50">{formattedDate}</time>
        </div>
      </div>
    );
  });
};

export default Three;
