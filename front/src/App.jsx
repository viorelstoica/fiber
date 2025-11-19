import * as THREE from 'three'
import { memo, useRef, forwardRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Grid, Center, AccumulativeShadows, RandomizedLight, Environment, useGLTF, CameraControls } from '@react-three/drei'
import Box from './Box'
import Gates from './Gates'
import { Outlet, Route, Routes } from 'react-router'
import { BrowserRouter } from "react-router";


export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={Math.PI / 2} />
      <Scene />
    </Canvas>
  )
}

function Scene() {
  const meshRef = useRef()
  const cameraControlsRef = useRef()

  const { camera } = useThree()


  return (
    <>
      <group>
        <Center top>
          <Gates />
          <Box position={[0, 0, 0]} />
        </Center>
        <CameraControls
          ref={cameraControlsRef}
          minDistance="0"
          enabled="true"
        />
      </group>
    </>
  )
}

/*
          <BrowserRouter>
            <Routes>
              <Route path="/tracks/:track" element={<Gates />} />
            </Routes>
          </BrowserRouter>
          <Outlet />
          <Gates />

          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />        

*/


function Ground() {
  const gridConfig = {
    cellSize: 0.5,
    cellThickness: 0.5,
    cellColor: '#6f6f6f',
    sectionSize: 3,
    sectionThickness: 1,
    sectionColor: '#9d4b4b',
    fadeDistance: 30,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true
  }
  return <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
}

const Shadows = memo(() => (
  <AccumulativeShadows temporal frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
    <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
  </AccumulativeShadows>
))

