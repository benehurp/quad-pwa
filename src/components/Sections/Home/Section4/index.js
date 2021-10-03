import React from "react"
import * as S from "./styled"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import Quotes from "../../../../images/svg/quotes.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import MiniWideButton from "../../../Base/MiniWideButton"
import useWindowSize from "../../../Utils/useWindowSize"
import testimonials from "./testimonials"

const HomeSection4 = () => {
  const { width } = useWindowSize()

  const [characterSlice, setCharacterSlice] = React.useState(360)
  const [slideQty, setSlideQty] = React.useState(2)
  const [hide, setHide] = React.useState(true)
  const [titleWidth, setTitleWidth] = React.useState("70%")
  const data = testimonials

  React.useEffect(() => {
    if (width < 1024) {
      setCharacterSlice(200)
      setTitleWidth("100%")
    } else {
      setCharacterSlice(360)
      setTitleWidth("70%")
    }

    width < 768 ? setSlideQty(1) : setSlideQty(2)

    if (width < 600) {
      setHide(false)
    } else {
      setHide(true)
    }
  }, [width])

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
        <div>
          <S.TitleH3 width={titleWidth} textAlign="left">
            Palavras de quem <span>investe com inteligência</span>
          </S.TitleH3>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={55}
          slidesPerView={slideQty}
          navigation={hide}
          pagination={{ clickable: true }}
        >
          <div className="quotes">
            <img src={Quotes} alt="Símbolo de aspas duplas" className="left" />
            <img src={Quotes} alt="Símbolo de aspas duplas" className="right" />
          </div>
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
                    {people.description.slice(0, characterSlice)}...
                  </S.Paragraph>
                </div>
                <div className="btn-right">
                  <MiniWideButton
                    link="#"
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
