import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Html, OrbitControls } from "@react-three/drei"
import * as S from "./styled"

import Analytics from "../../../images/svg/cube-analytics.svg"
import Search from "../../../images/svg/cube-search.svg"
import Rotate from "../../../images/svg/cube-rotate.svg"

function Box(props) {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y += 0.0005
  })

  return (
    <mesh position={[0, 0, 0]} ref={ref} scale={12}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"red"} />
      <Html
        distanceFactor={1}
        rotation={[0, -Math.PI / 2, 0]}
        position={[-0.501, 0, 0]}
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
        position={[0, 0, -0.501]}
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
        position={[0.501, 0, 0]}
        transform
        occlude
      >
        <S.CubeFace>
          <S.ImgCube src={Search} />
          <S.TitleH3>Indicadores econômicos:</S.TitleH3>
          <p>
            eles são o alicerce da tendência primária do mercado e indicam se o
            bull ou bear market é sustentável no médio prazo.
          </p>
        </S.CubeFace>
      </Html>
      <Html
        distanceFactor={1}
        rotation={[0, 0, 0]}
        position={[0, 0, 0.501]}
        transform
        occlude
      >
        <S.CubeFace>
          <S.ImgCube src={Analytics} />
          <S.TitleH3>Sentimento:</S.TitleH3>
          <p>
            esta dimensão mensura a propensão ao risco dos investidores. Euforia
            ou pessimismo extremos tendem a coincidir com a inflexão da
            tendência.
          </p>
        </S.CubeFace>
      </Html>
      <Html
        distanceFactor={1}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0.501, 0]}
        transform
        occlude
      >
        <S.CubeFaceTop>
          <S.ImgCubeHead src={Rotate} />
        </S.CubeFaceTop>
      </Html>
    </mesh>
  )
}

export default function Cube3d() {
  return (
    <Canvas
      orthographic
      dpr={[1, 2]}
      camera={{ zoom: 22, position: [-10, 20, -25], fov: 50 }}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
      <ambientLight intensity={0.3} />
      <spotLight position={[-45, 20, 5]} angle={0.3} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box />
    </Canvas>
  )
}
