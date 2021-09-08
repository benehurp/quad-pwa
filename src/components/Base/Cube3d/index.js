import React, { Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Html, OrbitControls } from "@react-three/drei"
import * as S from "./styled"

function CuboDaQuad(props) {
  const myMesh = React.useRef()

  useFrame(({ clock }) => {
    const now = clock.getElapsedTime()
    myMesh.current.rotation.y = 150 + now / 10
  })

  return (
    <mesh {...props} ref={myMesh} scale={12}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"#d40009"} />
      <Html
        distanceFactor={1}
        rotation={[0, Math.PI / 2, 0]}
        position={[0.51, 0, 0]}
        transform
        occlude
      >
        <S.CubeFace>
          <S.TitleH3>Ação dos preços:</S.TitleH3>
          <p>
            Analisamos o mercado sobre a ótica inédita do Método M4D, uma
            abordagem de investimentos.
          </p>
        </S.CubeFace>
      </Html>
      <Html
        distanceFactor={1}
        rotation={[0, -Math.PI / 2, 0]}
        position={[-0.51, 0, 0]}
        transform
        occlude
      >
        <S.CubeFace>
          <S.TitleH3>Ação dos preços:</S.TitleH3>
          <p>
            Analisamos o mercado sobre a ótica inédita do Método M4D, uma
            abordagem de investimentos.
          </p>
        </S.CubeFace>
      </Html>
      <Html
        distanceFactor={1}
        rotation={[0, 0, 0]}
        position={[0, 0, 0.51]}
        transform
        occlude
      >
        <S.CubeFace>
          <S.TitleH3>Ação dos preços:</S.TitleH3>
          <p>
            Analisamos o mercado sobre a ótica inédita do Método M4D, uma
            abordagem de investimentos.
          </p>
        </S.CubeFace>
      </Html>
      <Html
        distanceFactor={1}
        rotation={[0, -Math.PI, 0]}
        position={[0, 0, -0.51]}
        transform
        occlude
      >
        <S.CubeFace>
          <S.TitleH3>Ação dos preços:</S.TitleH3>
          <p>
            Analisamos o mercado sobre a ótica inédita do Método M4D, uma
            abordagem de investimentos.
          </p>
        </S.CubeFace>
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
