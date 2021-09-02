import React from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Flex, Box } from "@react-three/flex"
import { OrbitControls } from "@react-three/drei"

function CuboDaQuad() {
  const myMesh = React.useRef()

  useFrame(({ clock }) => {
    const now = clock.getElapsedTime()
    myMesh.current.rotation.y = now / 10
  })

  return (
    <mesh ref={myMesh}>
      <boxBufferGeometry attach="geometry" />
      <meshPhongMaterial attach="material" color="red" />
    </mesh>
  )
}

const Cube3d = () => {
  return (
    <Canvas camera={{ zoom: 115, position: [10, 45, 105] }}>
      <Flex size={[300, 300, 300]} flexDirection="row">
        <Box>
          <OrbitControls />
          <CuboDaQuad />
          <ambientLight intensity={0.3} />
          <spotLight position={[-45, 20, 5]} angle={0.3} penumbra={1} />
        </Box>
      </Flex>
    </Canvas>
  )
}

export default Cube3d
