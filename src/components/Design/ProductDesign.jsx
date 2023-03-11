import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Shoe from "../3dmodel/Shoe";
import "./TextDesc.css";

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Shoe />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <div className="prod-desc">
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </div>
    </>
  );
};

export default ProductDesign;
