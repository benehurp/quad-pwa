import React, { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Html, OrbitControls } from "@react-three/drei"

// function CuboDaQuad() {
//   const myMesh = React.useRef()

//   useFrame(({ clock }) => {
//     const now = clock.getElapsedTime()
//     myMesh.current.rotation.y = now / 10
//   })

//   return (
//     <mesh ref={myMesh}>
//       <boxBufferGeometry attach="geometry" />
//       <meshPhongMaterial attach="material" color="red" />
//     </mesh>
//   )
// }

// const Cube3d = () => {
//   return (
//     <Canvas camera={{ zoom: 115, position: [10, 45, 105] }}>
//       <Flex size={[300, 300, 300]} flexDirection="row">
//         <Box>
//           <OrbitControls />
//           <CuboDaQuad />
//           <ambientLight intensity={0.3} />
//           <spotLight position={[-45, 20, 5]} angle={0.3} penumbra={1} />
//         </Box>
//       </Flex>
//     </Canvas>
//   )
// }

function CuboDaQuad(props) {
  const myMesh = React.useRef()

  useFrame(({ clock }) => {
    const now = clock.getElapsedTime()
    myMesh.current.rotation.y = 150 + now / -10
  })

  return (
    <mesh {...props} ref={myMesh} scale={12}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"#d40009"} />
      <Html distanceFactor={1.5} position={[0, 0, 0.51]} transform occlude>
        <h1>Ação dos preços</h1>
        <p>
          Analisamos o mercado sobre a ótica inédita do Método M4D, uma
          abordagem de investimentos.
        </p>
      </Html>
    </mesh>
  )
}

const Cube3d = () => {
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ position: [-10, 20, -25], fov: 37 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <CuboDaQuad position={[0, 0, 0]} />
          <spotLight position={[-45, 20, 5]} angle={0.3} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </>
  )
}

export default Cube3d
