import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Navbar />
      <div className="container_hero">
        <div className="left">
          <h1 className="title">Think. Make. Solve</h1>
          <div className="whatwedo">
            <img src="./img/line.png" alt="line" />
            <h2>What we Do</h2>
          </div>
          <div className="description">
            We enjoy creating delightful, human-centered digital experiences
          </div>
          <button>Learn more</button>
        </div>
        <div className="rigth">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#220736"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img className="moon" src="./img/moon.png" alt="moon" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
