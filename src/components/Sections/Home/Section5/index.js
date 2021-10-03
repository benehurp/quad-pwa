import React from "react"
import * as S from "./styled"
import ImageSection from "../../../../images/home-section5.jpg"

import { UserContext } from "../../../../UserContext"

const HomeSection5 = () => {
  const { useWindowSize } = React.useContext(UserContext)
  const [positionBg, setPositionBg] = React.useState("top left")

  const [width] = useWindowSize()

  React.useEffect(() => {
    width < 1024 ? setPositionBg("top center") : setPositionBg("top right")
  }, [width])

  return (
    <S.SectionWrapper
      backgroundType="image"
      backgroundColor=""
      backgroundImage={ImageSection}
      backgroundPosition={positionBg}
      gradientDeg=""
      gradientColor1=""
      gradientColor2=""
      gradientPercent1=""
      gradientPercent2=""
      height=""
    >
      <div className="container">
        <S.TitleH3>
          <span>Tudo que você precisa saber</span>
          <br />
          sobre nossa empresa e método
          <br /> de investimentos
        </S.TitleH3>
        <ul>
          <S.Card
            as="li"
            gradientDeg="-60deg"
            gradientColor1="red2"
            gradientColor2="gray"
            gradientPercent1="10%"
            gradientPercent2="90%"
          >
            <div className="number">1</div>
            <S.TitleH6 fontWeight="semibold">
              <span>
                Criamos uma abordagem top-down para analisar o risco de
                exposição aos mercados.
              </span>
            </S.TitleH6>
            <S.Paragraph>
              Nossa metodologia proprietária é chamada de “Mercado Em Quatro
              Dimensões” e foi criada há mais de 20 anos por Jarbas Gambogi, um
              dos sócios-fundadores da QUAD Financial.
            </S.Paragraph>
            <S.Paragraph>
              Por meio dela, analisamos os mercados através de diversos
              atributos (que chamamos de dimensões) e assim extraímos sinais que
              identificam a saúde e mensuram o nível do risco de exposição dos
              mercados.
            </S.Paragraph>
          </S.Card>
          <S.Card
            as="li"
            gradientDeg="-60deg"
            gradientColor1="red2"
            gradientColor2="gray"
            gradientPercent1="10%"
            gradientPercent2="90%"
          >
            <div className="number">2</div>
            <S.TitleH6 fontWeight="semibold">
              <span>
                Tiramos maior proveito dos ciclos de alta, e nos protegemos de
                grandes quedas.
              </span>
            </S.TitleH6>
            <S.Paragraph>
              Nossas análises vão além de recomendações de ativos dentro de uma
              determinada classe (ações, renda fixa, etc). Essa é a grande
              virada de chave: recomendamos como a gestão integral do seu
              portfólio deve ser executada. Em outras palavras, procuramos
              identificar momentos de grande oportunidade nos mercados e
              informa-lo sobre o percentual adequado que deve ser destinado para
              renda variável e renda fixa em cada etapa do ciclo. Guiamos nossos
              membros para que compreendam em quais momentos devem adotar uma
              postura agressiva ou conservadora em cada classe de ativo que
              cobrimos.
            </S.Paragraph>
          </S.Card>
          <S.Card
            as="li"
            gradientDeg="-60deg"
            gradientColor1="red2"
            gradientColor2="gray"
            gradientPercent1="10%"
            gradientPercent2="90%"
          >
            <div className="number">3</div>
            <S.TitleH6 fontWeight="semibold">
              <span>
                Miramos no médio prazo para obter retornos consistentes e
                absolutos.
              </span>
            </S.TitleH6>
            <S.Paragraph>
              Não nos identificamos como investidores “ansiosos”. Não gostamos
              de girar a carteira com grande frequência e sem motivo. Não
              abrimos o home broker diariamente para conferir ganhos e posições.
              Em nossa visão, esse não é o caminho para atingir a liberdade
              financeira com tranquilidade e segurança. Mas também estamos longe
              de nos identificarmos como investidores cuja única preocupação
              está em comprar boas empresas para o longo prazo. Nunca
              ignoraremos as oscilações do mercado. Prezamos por investir
              mirando no longo prazo, em ativos que se favorecem do cenário
              macroeconômico e nos momentos em que o Método M4D (Mercado em
              Quatro Dimensões) identifica uma assimetria de risco favorável à
              exposição.
            </S.Paragraph>
          </S.Card>
        </ul>
      </div>
    </S.SectionWrapper>
  )
}

export default HomeSection5
