import React from "react"
import * as S from "./styled"
import Testimonials from "../../../Base/Testimonials"
import Quotes from "../../../../images/svg/quotes.svg"

const HomeSection4 = ({
  backgroundType,
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  gradientDeg,
  gradientColor1,
  gradientColor2,
  gradientPercent1,
  gradientPercent2,
  height,
}) => {
  return (
    <S.SectionWrapper
      backgroundType="gradient"
      backgroundColor=""
      backgroundImage=""
      backgroundPosition=""
      gradientDeg="160deg"
      gradientColor1=""
      gradientColor2=""
      gradientPercent1="5%"
      gradientPercent2="60%"
      height=""
    >
      <div className="container">
        <S.TitleH3>
          Palavras de quem <br />
          <span>investe com inteligência</span>
        </S.TitleH3>
        <div className="quotes">
          <img src={Quotes} alt="Símbolo de aspas duplas" className="left" />
          <img src={Quotes} alt="Símbolo de aspas duplas" className="right" />
        </div>
        <Testimonials />
      </div>
    </S.SectionWrapper>
  )
}

export default HomeSection4
