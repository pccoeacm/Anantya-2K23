import React, { Suspense, useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./ISS.css";

function Model() {
  const { scene } = useGLTF("ISS_stationary.glb");
  return <primitive object={scene} scale={0.003} rotation={[0, 0, 0]} />;
}

export default function ShowDonut(props) {
  window.addEventListener("mousemove", handleMouseMove);
  const [mouseX, setMouseX] = useState(10);
  const [mouseY, setMouseY] = useState(10);
  function handleMouseMove(event) {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  }
  return (
    <div className="threeD">
      <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
        <pointLight position={[mouseX, mouseY, 10]} intensity={1.5} />
        <pointLight position={[mouseX, mouseY, -10]} intensity={1.5} />
        <pointLight position={[-10, 0, 0]} intensity={0.166} />
        <pointLight position={[0, 10, 0]} intensity={0.166} />
        <pointLight position={[0, -10, 0]} intensity={0.166} />
        <pointLight position={[10, 0, 0]} intensity={0.166} />
        <pointLight position={[0, 0, 10]} intensity={0.166} />
        <pointLight position={[0, 0, -10]} intensity={0.166} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
