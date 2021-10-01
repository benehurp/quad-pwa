import React from "react"
import * as S from "./styled"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import Quotes from "../../../../images/svg/quotes.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import MiniWideButton from "../../../Base/MiniWideButton"
import Demo from "../../../../images/demo.jpg"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import img01 from "../../../../images/testemunhos/Victor-S.jpg"
import img02 from "../../../../images/testemunhos/Jorge-H-S-M.jpg"
import img03 from "../../../../images/testemunhos/Lucas-S.jpg"
import img04 from "../../../../images/testemunhos/Marcello-P.jpg"
import img05 from "../../../../images/testemunhos/none.png"
import img06 from "../../../../images/testemunhos/Romolo.jpg"
import img07 from "../../../../images/testemunhos/Marcio-Alexandroni.jpg"
import img08 from "../../../../images/testemunhos/none.png"
import img09 from "../../../../images/testemunhos/none.png"
import img10 from "../../../../images/testemunhos/Igor-M-C.jpg"
import img11 from "../../../../images/testemunhos/Rafael-F.jpg"
import img12 from "../../../../images/testemunhos/Cristina-M.jpg"
import img13 from "../../../../images/testemunhos/none.png"
import img14 from "../../../../images/testemunhos/William-M.jpg"

const HomeSection4 = () => {
  const data = [
    {
      id: 1,
      name: "Victor S.",
      description:
        "Sem sombra de dúvidas a casa que assino que mais levo em consideração nas minhas tomadas de decisão. Cada relatório é uma aula. O timing de mercado beira o misticismo, tamanha é a qualidade das entradas e saídas do mercado. O foco é sempre no gerenciamento de risco, o que nos ajuda a ter rendimentos altos nos momentos favoráveis e rendimentos de renda fixa enquanto o mercado sangra, nos ajudando a manter e multiplicar o patrimônio consistentemente. Com certeza irei renovar a assinatura!",
      avatar: img01,
    },
    {
      id: 2,
      name: "Jorge de Melo",
      description:
        "Depois da Quad consegui enxergar a importância de proteger meu capital. Muito mais que retornos explosivos, a calma, paciência, tranquilidade me levou para outro patamar. Para além de qualquer análise de ativos, busca de rentabilidades, o foco em gerenciar o risco é um diferencial sem tamanho. Análises profundas sobre o macro, stockpicking certeiro, entradas e zeragens das posições simplesmente antológicas. Para o investidor que quer mesmo ter rentabilidades consistentes no médio/longo prazo é simplesmente um must have. Obrigado por tudo!",
      avatar: img02,
    },
    {
      id: 3,
      name: "Lucas Scheffer",
      description:
        "Com certeza a QUAD superou todas as minhas expectativas, poder contar com a experiência do mestre Gambogi trás muita tranquilidade, sem dúvida o melhor que já vi no mercado, disparado, além disso as operações com opções, a carteira de criptos e as aulas do Tiago completam o que hoje, pra mim, é a melhor casa de análises que existe no Brasil.",
      avatar: img03,
    },
    {
      id: 4,
      name: "Marcello Pinsdorf",
      description:
        'Na QUAD todos relatórios primam pela qualidade de conteúdo e forma, trazendo extrema qualidade, impressionante leitura de mercado e o melhor "timing" que eu já pude testemunhar. Além disso, o time QUAD está sempre disponível e disposto a ajudar nos grupos no Telegram, nestes grupos os demais membros também são sempre muito respeitosos e atenciosos nas trocas de informação, posso dizer que existe um sentimento verdadeiro de comunidade.',
      avatar: img04,
    },
    {
      id: 5,
      name: "Guilherme Soares",
      description:
        "A QUAD é sensacional, nos traz um conhecimento impressionante de anos de experiência do Gambogi, um dos maiores investidores do Brasil e do mundo. Quando decidi aprofundar os conhecimentos sobre o mercado financeiro, busquei investidores dos quais podiam ser a minha base sólida (mentores) sabendo que eu não acharia estes em youtubers modinhas ou coisas do tipo, e este mentor provavelmente seria um low profile sendo um grande sobrevivente do mercado. Com 16 anos encontrei o Jarbas Gambogi, evidentemente um gênio e que sabia de tudo que estava ocorrendo nos mercados e na economia. Naquele instante percebi que tinha encontrado a pessoa certa. Desde então adquiri conhecimentos que não encontraria em lugar nenhum e concomitantemente na brilhante preservação de meu patrimônio e de minha família. Tenho só agradecimentos à Quad e aos demais membros da comunidade, que compartilham um valioso conhecimento.",
      avatar: img05,
    },
    {
      id: 6,
      name: "Romolo Disconzi",
      description:
        'A Quad é baseada no Método das 4 Dimensões (M4D), desenvolvido rigorosa e sistematicamente por Jarbas Gambogi. Em seu livro, M4D - Uma Abordagem Behaviorista, o autor alia a metodologia científica (aprendida em sua graduação em Engenharia Elétrica pelo ITA e seu mestrado em Inteligência Artificial pela USP) a suas décadas de experiência como trader no mercado nacional e internacional. "King Bull, King Bear", como Gambogi é conhecido pelos mais antigos, é a versão brasileira de quando a academia encontra Wall Street. Tiago Friedrich é co-fundador e aluno exemplar do método. Energético, bem-humorado e com uma ética de trabalho que rivaliza a de monges beneditinos, traz atualizações pontuais, tira toda sorte de dúvidas e elucida os conceitos expostos nos relatórios semanais - tudo através de um chat aberto em que há sentimento de pertença e constantes contribuições da comunidade. Lauro Inada capitaneia a nau que navega pelo metaverso cripto. Além do tradicional, das métricas on-chain e do acompanhamento aos projetos, há insights sobre NFTs e games. O acompanhamento dessa revolução -- entre outras, com jogos do formato play-to-earn -- foi o diferencial que permitiu vultosos retornos enquanto as criptomoedas andavam de lado.',
      avatar: img06,
    },
    {
      id: 7,
      name: "Marcio Alexandroni",
      description:
        "Na busca por leituras do mercado, assinei no passado diversas casas de análise, algumas consideradas de excelente reputação no mercado. Hoje só assino os relatórios da QUAD, pela qualidade da análise, clareza e precisão no conteúdo dos relatórios, e pelo excelente atendimento ao assinante. Além de tudo, cada relatório é praticamente uma aula de leitura do mercado. Estou plenamente satisfeito com o serviço e por isso sempre recomendo a QUAD. Feliz por fazer parte do #TimeQUAD.",
      avatar: img07,
    },
    {
      id: 8,
      name: "Paulo Henrique C.",
      description:
        "Posso dizer com tranquilidade que as explicações do Gambogi nos relatórios são infinitamente superiores a de qualquer concorrente que tenta replicar o método, afinal de contas, foi ele quem criou a abordagem. Não só me tranquiliza para seguir as recomendações, como também me faz aprender muito. A plataforma da Quad inclusive fornece materiais para que possamos aprender a utilizar o método em si enquanto lemos o relatório, diferentemente de outras casas de análise que não ajudam os membros a andarem com as próprias pernas.",
      avatar: img08,
    },
    {
      id: 9,
      name: "Erick",
      description:
        "Gostaria de agradecer e parabenizar pela qualidade dos relatórios da Quad! São muito mais técnicos e explicados com profundidade comparados a relatórios de outras casas de análise. Os gráficos são bem explicados e detalhados com notas de rodapé, provavelmente devido à experiência acadêmica do KB. Os relatórios da Quad me estimulam a estudar e aprofundar os assuntos abordados.",
      avatar: img09,
    },
    {
      id: 10,
      name: "Ígor Mendonça Câmara",
      description:
        "Depois de ler o livro Mercado de Ações em Quatro Dimensões percebi a importância de investir com foco na gestão de risco e da exposição em cada classe de ativos. Ter um analista com 45 anos de mercado como o Gambogi, que consegue extrair os dados dos mercados da forma que ele faz, é um privilégio. Ler os relatórios é excepcional.",
      avatar: img10,
    },
    {
      id: 11,
      name: "Rafael Foltran",
      description:
        "O track record da QUAD confirma o que já sabíamos: o Método das 4 Dimensões do Gambogi é muito eficiente para indicar os momentos mais adequados de exposição na bolsa brasileira e americana. Além disso, a assinatura oferece uma carteira recomendada de exposição multimercado, alocando-se em renda fixa básica, bolsa brasileira e americana, uma parcela de proteção como ouro e derivativos, e por fim bitcoin. O balanceamento da carteira é feito regularmente, nem sempre todos estes ativos estão presentes, e não é feito excessivas rotações de ativos. Enfim, estou muito satisfeito com a propostas da QUAD!",
      avatar: img11,
    },
    {
      id: 12,
      name: "Cristina Magrin",
      description:
        "A Quad entrega muito mais do que promete e com muita transparência, além de muita competência e compromisso das pessoas que compõem o time. Sem estardalhaço, como a maioria, a Quad entrega conhecimento diferenciado que nos proporciona mudar de patamar.",
      avatar: img12,
    },
    {
      id: 13,
      name: "Luiz Carlos Maciel",
      description:
        "Estou bastante satisfeito com o trabalho da QUAD, pois tem cumprido o que se propõe, que é manejar a exposição aos diversos mercados frente ao risco incorrido. Destaco ainda a presença dos autores dos relatórios nos diversos grupos de Telegram e a interação dos mesmos com os assinantes, que tem sido muito boa para o aprendizado. Forte abraço, #TimeQUAD",
      avatar: img13,
    },
    {
      id: 14,
      name: "William Machado",
      description:
        "Sem mentiras, sem auto promover-se, relatórios dinâmicos. Tiago e Gambogi são fora de série. Tenho assinatura de outras casas, mas nada se compara ao trabalho da Quad.",
      avatar: img14,
    },
  ]

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
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={55}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
        >
          {data.map(people => (
            <SwiperSlide key={people.id}>
              <S.Card>
                <div className="avatar-container">
                  <img
                    className="avatar"
                    src={people.avatar}
                    alt="Foto de perfil do usuário"
                  />
                </div>
                <S.TitleH5 textAlign="center">{people.name}</S.TitleH5>
                <div className="testimonial">
                  <S.Paragraph fontSize="xxsmall">
                    {people.description.slice(0, 360)}...
                  </S.Paragraph>
                </div>
                <div className="btn-right">
                  <MiniWideButton
                    $width="10rem"
                    $gradientColor1="red"
                    $gradientColor2="red"
                    $paddingRight="0"
                  >
                    Saiba mais
                  </MiniWideButton>
                </div>
              </S.Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </S.SectionWrapper>
  )
}

export default HomeSection4
