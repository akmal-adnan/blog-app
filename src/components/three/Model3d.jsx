import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Car } from './Car';
import { Rings } from './Rings';

function Cube() {
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    // meshRef.current.rotation.z += 0.01;
    // meshRef.current.rotation.x += 0.01;
    // meshRef.current.rotation.y -= 0.01;
  });

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[5, 0, 0]} />

      <mesh ref={meshRef}>
        <CubeCamera resolution={256} frames={Infinity}>
          {texture => (
            <>
              <Environment map={texture} />
              <Car />
            </>
          )}
        </CubeCamera>
      </mesh>

      <ambientLight color={'white'} intensity={1} />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={30}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={30}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
}

function Floor() {
  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[5, 7]} />
      <meshStandardMaterial color="hsl(19, 100%, 96%)" />
    </mesh>
  );
}

function Loading() {
  return (
    <>
      <div className="load__container container section">
        <h3 className="">Loading...</h3>
      </div>
    </>
  );
}

function Model3d() {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas shadows style={{ height: '450px' }} className="car__container">
        <Cube />
        <Rings />
      </Canvas>
    </Suspense>
  );
}

export default Model3d;