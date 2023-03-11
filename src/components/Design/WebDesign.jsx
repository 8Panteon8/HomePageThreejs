import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Mac from "../3dmodel/Mac";
import "./TextDesc.css";

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Mac />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="web-desc">
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </div>
    </>
  );
};

export default WebDesign;
