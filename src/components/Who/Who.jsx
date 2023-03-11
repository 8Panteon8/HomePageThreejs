import React from "react";
import "./Who.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../Cube/Cube";

const Who = () => {
  return (
    <section className="who">
      <div className="container_who">
        <div className="left">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </div>
        <div className="rigth">
          <h1 className="title">Think outside the square space</h1>
          <div className="whatwedo">
            <img src="./img/line.png" alt="line" />
            <h2>What we Are</h2>
          </div>
          <div className="description">
            A creative group of designers and developers with a passion for the
            arts.
          </div>
          <button>See our works</button>
        </div>
      </div>
    </section>
  );
};
export default Who;
