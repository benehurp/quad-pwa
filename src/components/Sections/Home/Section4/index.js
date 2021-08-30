import React from "react"
import * as S from "./styled"
import Quotes from "../../../../images/svg/quotes.svg"
import MiniWideButton from "../../../Base/MiniWideButton"
import Avatar from "../../../../images/demo.jpg"

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
    <S.Section4Wrapper
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
        <ul>
          <S.Card as="li">
            <div className="avatar-container">
              <img className="avatar" src={Avatar} alt="Avatar do perfil" />
            </div>
            <S.TitleH5 textAlign="center">Fernando</S.TitleH5>
            <div className="testimonial">
              <S.Paragraph fontSize="xxsmall">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sit. Similique modi necessitatibus facere quam
                quidem neque pariatur. Pariatur ipsum voluptatum beatae voluptas
                laborum rerum ratione est architecto facere odio. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Pariatur ipsum
                voluptatum beatae voluptas laborum rerum ratione est architecto
                facere odio. Pariatur ipsum voluptatum beatae voluptas laborum
                rerum ratione est architecto facere odio.
              </S.Paragraph>
            </div>
            <div className="btn-right">
              <MiniWideButton gradientColor1="red" gradientColor2="red">
                Saiba mais
              </MiniWideButton>
            </div>
          </S.Card>
          <S.Card as="li">
            <div className="avatar-container">
              <img className="avatar" src={Avatar} alt="Avatar do perfil" />
            </div>
            <S.TitleH5 textAlign="center">Fernando</S.TitleH5>
            <div className="testimonial">
              <S.Paragraph fontSize="xxsmall">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, sit. Similique modi necessitatibus facere quam
                quidem neque pariatur. Pariatur ipsum voluptatum beatae voluptas
                laborum rerum ratione est architecto facere odio. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </S.Paragraph>
            </div>
            <div className="btn-right">
              <MiniWideButton gradientColor1="red" gradientColor2="red">
                Saiba mais
              </MiniWideButton>
            </div>
          </S.Card>
        </ul>
      </div>
    </S.Section4Wrapper>
  )
}

export default HomeSection4
