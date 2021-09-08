import React, { Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Html, OrbitControls } from "@react-three/drei"
import * as S from "./styled"

import Analytics from "../../../images/svg/cube-analytics.svg"
import Search from "../../../images/svg/cube-search.svg"

function CuboDaQuad(props) {
  const myMesh = React.useRef()

  useFrame(({ clock }) => {
    const now = clock.getElapsedTime()
    myMesh.current.rotation.y = 150 + now / 5
  })

  return (
    <mesh ref={myMesh} scale={12}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"#d40009"} />
      <Html
        distanceFactor={1}
        rotation={[0, -Math.PI / 2, 0]}
        position={[-0.51, 0, 0]}
        transform
        occlude
      >
        <S.CubeFace>
          <S.ImgCube src={Search} />
          <S.TitleH3>Valorização:</S.TitleH3>
          <p>
            esta dimensão, com impacto no longo prazo, esclarece o quão caro ou
            barato estão os mercados.
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
          <S.ImgCube src={Analytics} />
          <S.TitleH3>Ação dos preços:</S.TitleH3>
          <p>
            com alcance no curto prazo, esta dimensão fornece o timing para a
            entrada, saída e balanceamento das posições.
          </p>
        </S.CubeFace>
      </Html>
      <Html
        distanceFactor={1}
        rotation={[0, Math.PI / 2, 0]}
        position={[0.51, 0, 0]}
        transform
        occlude
      >
        <S.CubeFace>
          <S.ImgCube src={Search} />
          <S.TitleH3>Outra face:</S.TitleH3>
          <p>
            com alcance no curto prazo, esta dimensão fornece o timing para a
            entrada, saída e balanceamento das posições.
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
          <S.ImgCube src={Analytics} />
          <S.TitleH3>Outra face ainda:</S.TitleH3>
          <p>
            com alcance no curto prazo, esta dimensão fornece o timing para a
            entrada, saída e balanceamento das posições.
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
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.2} />
          <CuboDaQuad position={[0, 0, 0]} />
          <spotLight position={[-45, 20, 5]} angle={0.3} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
        </Suspense>
      </Canvas>
    </>
  )
}

export default Cube3d
