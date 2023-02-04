import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';

import { Rings } from './Rings';
import { Car } from './Car';
import { Vector3 } from 'three';

function CarModel() {
  const meshRef = useRef();
  const [target, setTarget] = useState(new Vector3(0, 2.5, 5.8));
  const [lerpFactor, setLerpFactor] = useState(0);

  useFrame((_, delta) => {
    if (!meshRef.current) {
      return;
    }

    if (lerpFactor < 1) {
      setLerpFactor(lerpFactor => Math.min(1, lerpFactor + delta / 50));
      meshRef.current.position.lerp(target, lerpFactor);

      setInterval(() => {
        setLerpFactor(1);
      }, 3000);
    }
  });

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera
        ref={meshRef}
        makeDefault
        fov={50}
        position={[7.6, 2.6, 0]}
      />

      <mesh>
        <CubeCamera resolution={256} frames={Infinity}>
          {texture => (
            <>
              <Environment map={texture} />
              <Car />
            </>
          )}
        </CubeCamera>
      </mesh>

      <ambientLight intensity={8} />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={10}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={10}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
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
        <CarModel />
        <Rings />
      </Canvas>
    </Suspense>
  );
}

export default Model3d;
