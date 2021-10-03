import React from "react"
import * as S from "./styled"
import MiniWideButton from "../../../Base/MiniWideButton"
import Rotate3d from "../../../../images/rotate3d.png"
import Cube3d from "../../../Base/Cube3d"
import { UserContext } from "../../../../UserContext"

const HomeSection3 = () => {
  const { useWindowSize } = React.useContext(UserContext)
  const [widthTitle, setWidthTitle] = React.useState("")
  const [widthParagraph, setWidthParagraph] = React.useState("")
  const [positionText, setPositionText] = React.useState("")
  const [hide, setHide] = React.useState(null)

  const [width] = useWindowSize()

  React.useEffect(() => {
    if (width < 1024) {
      setWidthTitle("100%")
      setWidthParagraph("100%")
      setPositionText("left")
      setHide(false)
    } else {
      setWidthTitle("80%")
      setWidthParagraph("90%")
      setPositionText("right")
      setHide(true)
    }
  }, [width])

  return (
    <S.SectionWrapper
      backgroundType="color"
      backgroundColor="gray3"
      backgroundImage=""
      backgroundPosition=""
      gradientDeg=""
      gradientColor1=""
      gradientColor2=""
      gradientPercent1=""
      gradientPercent2=""
      height=""
    >
      <div className="container">
        <div className="left">
          {hide && (
            <img
              className="rotate3d"
              src={Rotate3d}
              alt="Clique no cubo para rotacionar"
            ></img>
          )}
          <S.TitleH2 width={widthTitle} textAlign={positionText}>
            Mercado em quatro dimensões
          </S.TitleH2>
          <S.Paragraph width={widthParagraph} textAlign={positionText}>
            Analisamos o mercado sobre a ótica inédita do Método M4D, uma
            abordagem de investimentos desenvolvida por Jarbas Gambogi há mais
            de 20 anos, e que compõe nossa própria forma de identificar os
            sinais e filtrar os ruídos nos mercados globais.
          </S.Paragraph>
          {!hide && (
            <img
              className="rotate3d"
              src={Rotate3d}
              alt="Clique no cubo para rotacionar"
            ></img>
          )}
          {hide && (
            <MiniWideButton
              link="#"
              $width="85%"
              $height="5rem"
              $borderRadius=".8rem"
              $fontSize="medium"
              $marginTop="2rem"
            >
              Conhecer mais sobre o método
            </MiniWideButton>
          )}
        </div>
        <div className="right">
          <Cube3d />
        </div>

        {!hide && (
          <MiniWideButton
            link="#"
            $width="100%"
            $height="5rem"
            $borderRadius=".8rem"
            $fontSize="medium"
            $marginTop="2rem"
          >
            Conhecer mais sobre o método
          </MiniWideButton>
        )}
      </div>
    </S.SectionWrapper>
  )
}

export default HomeSection3
