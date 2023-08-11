import React from "react";
import Navbar from "@/components/Navbar";

import Level1 from "@/components/3Dmodel/gltf_exports/level1.jsx";
import Level2 from "@/components/3Dmodel/gltf_exports/level2.jsx";
import Level4 from "@/components/3Dmodel/gltf_exports/level4.jsx";
import Level8 from "@/components/3Dmodel/gltf_exports/level8.jsx";
import Level9 from "@/components/3Dmodel/gltf_exports/level9.jsx";
import Level11 from "@/components/3Dmodel/gltf_exports/level11.jsx";
import Level12 from "@/components/3Dmodel/gltf_exports/level12.jsx";
import Level14 from "@/components/3Dmodel/gltf_exports/level14.jsx";
import Level16 from "@/components/3Dmodel/gltf_exports/level16.jsx";
import Level17 from "@/components/3Dmodel/gltf_exports/level17.jsx";
import Level19 from "@/components/3Dmodel/gltf_exports/level19.jsx";
import Level20 from "@/components/3Dmodel/gltf_exports/level20.jsx";

const levels = [
  Level1,
  Level2,
  Level4,
  Level8,
  Level9,
  Level11,
  Level12,
  Level14,
  Level16,
  Level17,
  Level19,
  Level20,
];

function Three() {
  return (
    <>
      <Navbar />
      <div className="h-80">
        {levels.map((Level, index) => (
          <div key={index} className="h-full">
            <Level />
          </div>
        ))}
      </div>
    </>
  );
}

export default Three;
