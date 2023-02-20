import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
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
  const carRef = useRef();
  const [lerpFactor, setLerpFactor] = useState(0);

  useFrame((_, delta) => {
    if (!meshRef.current) {
      return;
    }

    if (!carRef.current) {
      return;
    }

    if (lerpFactor < 1) {
      const currentPosition = meshRef.current.position;
      const targetPosition = new Vector3(0, 2.5, 5.8);

      const targetCarPos = new Vector3(0, 0, 0);

      const distance = currentPosition.distanceTo(targetPosition);

      const maxDistance = 8; // Set the maximum distance between positions here
      const normalizedLerpFactor =
        lerpFactor + delta / 50 / (distance / maxDistance);

      setLerpFactor(Math.min(1, normalizedLerpFactor));
      meshRef.current.position.lerp(targetPosition, normalizedLerpFactor);
      carRef.current.position.lerp(targetCarPos, normalizedLerpFactor);
      // carRef.current.position.z += 0.06;

      if (normalizedLerpFactor === 1) {
        // Animation has ended, do something here
      }
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

      <mesh position={[0, 0, -10]} ref={carRef}>
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
        intensity={15}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={10}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={10}
        position={[0, 5, 10]}
        penumbra={0.5}
        castShadow
      />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={10}
        position={[0, 5, -20]}
        penumbra={0.5}
        castShadow
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
      <Canvas shadows style={{ height: '350px' }} className="car__container">
        <CarModel />
        <Rings />
      </Canvas>
    </Suspense>
  );
}

export default Model3d;
