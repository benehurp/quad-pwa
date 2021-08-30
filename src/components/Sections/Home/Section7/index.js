import React from "react"
import * as S from "./styled"
import MiniWideButton from "../../../Base/MiniWideButton"
import LauroKenichi from "../../../../images/lauro-kenichi.png"
import JarbasGambogi from "../../../../images/jarbas-gambogi.png"
import TiagoBFriedrich from "../../../../images/tiago-b-friedrich.png"
import Stamp from "../../../../images/stamp.png"

const HomeSection7 = () => {
  return (
    <S.SectionWrapper
      backgroundType="gradient"
      backgroundColor=""
      backgroundImage=""
      backgroundPosition=""
      gradientDeg="160deg"
      gradientColor1=""
      gradientColor2=""
      gradientPercent1="0%"
      gradientPercent2="95%"
      height="100vh"
    >
      <div className="container">
        <S.TitleH4>
          Conheça as mentes por trás
          <br /> dos racionais de exposição
        </S.TitleH4>
        <ul>
          <S.Card
            as="li"
            gradientColor1="gray"
            gradientColor2="red"
            gradientDeg="180deg"
            gradientPercent1="5%"
            gradientPercent2="150%"
          >
            <div className="person">
              <img src={LauroKenichi} alt="Lauro Kenichi"></img>
            </div>
            <S.TitleH6 textAlign="center" marginTop="0rem">
              <span>Lauro Kenichi</span>
            </S.TitleH6>
            <S.Paragraph
              fontSize="xxxsmall"
              textTransform="uppercase"
              textAlign="center"
            >
              Fundador / Chefe de Análise
            </S.Paragraph>
            <hr />
            <S.Paragraph fontSize="xsmall" textAlign="center">
              Lorem ipsum posuere fermentum sit iaculis pellentesque fermentum
              faucibus lacus aliquam rhoncus luctus, erat egestas blandit
              vulputate conubia orci imperdiet interdum quisque pretium
              consequat platea, gravida torquent lobortis augue a pretium nisi
              nostra curae tincidunt eu. phasellus aptent nulla et diam
              adipiscing himenaeos quisque, gravida laoreet etiam fames integer
              praesent curae.
            </S.Paragraph>

            <div className="stamp">
              <img src={Stamp} alt="Selo de credenciado"></img>
            </div>
          </S.Card>
          <S.Card
            as="li"
            gradientColor1="gray"
            gradientColor2="red"
            gradientDeg="180deg"
            gradientPercent1="5%"
            gradientPercent2="150%"
          >
            <div className="person">
              <img src={JarbasGambogi} alt="Jarbas Gambogi"></img>
            </div>
            <S.TitleH6 textAlign="center" marginTop="0rem">
              <span>Jarbas Gambogi</span>
            </S.TitleH6>
            <S.Paragraph
              fontSize="xxxsmall"
              textTransform="uppercase"
              textAlign="center"
            >
              Fundador / Chefe de Análise
            </S.Paragraph>
            <hr />
            <S.Paragraph fontSize="xsmall" textAlign="center">
              Com mais de 45 anos de experiência no mercado financeiro, Gambogi
              foi diretor de mercado de capitais em diversos bancos de
              investimento e tem uma formação acadêmica sólida e pluralista em
              engenharia (ITA), finanças (FGV), direito (USP) e inteligência
              artificial (USP). Foi gestor de carteira de investimentos própria
              e de terceiros. Atualmente é o chefe de análise na Quad, sendo
              responsável pela exposição global e macro de nossas carteiras
              recomendadas.
            </S.Paragraph>

            <div className="stamp">
              <img src={Stamp} alt="Selo de credenciado"></img>
            </div>
          </S.Card>
          <S.Card
            as="li"
            gradientColor1="gray"
            gradientColor2="red"
            gradientDeg="180deg"
            gradientPercent1="5%"
            gradientPercent2="150%"
          >
            <div className="person">
              <img src={TiagoBFriedrich} alt="Tiago B. Friedrich "></img>
            </div>
            <S.TitleH6 textAlign="center" marginTop="0rem">
              <span>Tiago B. Friedrich </span>
            </S.TitleH6>
            <S.Paragraph
              fontSize="xxxsmall"
              textTransform="uppercase"
              textAlign="center"
            >
              Fundador / Educador Financeiro
            </S.Paragraph>
            <hr />
            <S.Paragraph fontSize="xsmall" textAlign="center">
              Tiago é investidor macro, trader de opções e o principal educador
              financeiro da Quad, sendo responsável pela produção de nossos
              conteúdos educativos nas mídias sociais e internamente com os
              membros.
            </S.Paragraph>

            <S.Paragraph fontSize="xsmall" textAlign="center">
              Formado em direito e com vasto conhecimento em negócios e
              empreendedorismo, é quem lidera a estratégia empresarial da Quad.
            </S.Paragraph>

            <div className="stamp">
              <img src={Stamp} alt="Selo de credenciado"></img>
            </div>
          </S.Card>
        </ul>
        <MiniWideButton
          link="/"
          width="100%"
          height="5rem"
          padding="1.2rem"
          borderRadius=".8rem"
          fontSize="medium"
          marginTop="2rem"
          gradientDeg="-160deg"
        >
          Conhecer mais sobre o método
        </MiniWideButton>
      </div>
    </S.SectionWrapper>
  )
}

export default HomeSection7
