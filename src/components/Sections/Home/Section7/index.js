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
      gradientColor2="gray"
      gradientPercent1="0%"
      gradientPercent2="95%"
      height=""
    >
      <div className="container">
        <S.TitleH3>
          Conheça as mentes por trás
          <br /> dos racionais de exposição
        </S.TitleH3>
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
              Head de Criptos
            </S.Paragraph>
            <hr />
            <S.Paragraph fontSize="xsmall" textAlign="center">
              Formado pela USP em Ciências da Computação e investidor desde
              2008, Lauro desenvolveu um modelo de análise
              fundamentalista/behaviorista suportada por indicadores onchain de
              criptoativos. Além das criptomoedas tradicionais, Lauro também é
              profundo conhecedor do mercado de NFTs e de BlockChain Games.
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
              Diretor Executivo / Analista
            </S.Paragraph>
            <hr />
            <S.Paragraph fontSize="xsmall" textAlign="center">
              Formado em Direito (UNISC), Tiago é Analista CNPI-T e fundou a
              QUAD Financial ao lado de Gambogi. Tiago se dedica a identificar
              as maiores oportunidades micro no stock picking para identificar
              os ativos com potencial de super performance. Além disso, é ele
              quem produz os conteúdos nas mídias sociais da Quad.
            </S.Paragraph>

            <div className="stamp">
              <img src={Stamp} alt="Selo de credenciado"></img>
            </div>
          </S.Card>
        </ul>
        <MiniWideButton
          link="#"
          $width="100%"
          $height="5rem"
          $borderRadius=".8rem"
          $fontSize="medium"
          $marginTop="2rem"
          $gradientDeg="-160deg"
          $gradientPercent1="-10%"
        >
          Conhecer mais sobre o método
        </MiniWideButton>
      </div>
    </S.SectionWrapper>
  )
}

export default HomeSection7
