import React, { Suspense, useState } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { IssCss } from "../styles";

function Model() {
<<<<<<< HEAD
	const [scrolls, setScroll] = useState(0);

	window.addEventListener("scroll", handleScroll);

	function handleScroll() {
		setScroll(window.scrollY);
	}

	const vw = Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	);

	const { scene } = useGLTF("jwst_james_webb_space_telescope.glb");
	return (
		<primitive
			object={scene}
			scale={0.002}
			rotation={[scrolls * -0.005, 0, scrolls * -0.001]}
		/>
	);
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
				<pointLight position={[-220, 0, 0]} intensity={0.166} />
				<pointLight position={[0, 220, 0]} intensity={0.166} />
				<pointLight position={[0, -220, 0]} intensity={0.166} />
				<pointLight position={[220, 0, 0]} intensity={0.166} />
				<pointLight position={[0, 0, 220]} intensity={0.166} />
				<pointLight position={[0, 0, -220]} intensity={0.166} />
				<Suspense fallback={null}>
					<Model />
				</Suspense>
				<OrbitControls />
			</Canvas>
		</div>
	);
=======
  const [scrolls, setScroll] = useState(0);

  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    setScroll(window.scrollY);
  }

  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  const { scene } = useGLTF("ISS_compressed.glb");
  return (
    <primitive
      object={scene}
      scale={0.002}
      rotation={[scrolls * -0.006, 0, scrolls * -0.0015]}
    />
  );
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
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
>>>>>>> main
}
