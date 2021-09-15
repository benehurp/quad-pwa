import React from "react"
import * as S from "./styled"
import PropTypes from "prop-types"
import MiniWideButton from "../MiniWideButton"
import Quotes from "./Quotes"
import Demo from "../../../images/demo.jpg"

const Testimonials = ({ avatar, name, testimonial }) => {
  //const [current, setCurrent] = React.useState(Quotes)

  console.log(Quotes.Quotes[0])

  return (
    <ul>
      <S.Card as="li">
        <div className="avatar-container">
          <img
            className="avatar"
            src={avatar ? avatar : Demo}
            alt="Foto de perfil do usuário"
          />
        </div>
        <S.TitleH5 textAlign="center">{name}</S.TitleH5>
        <div className="testimonial">
          <S.Paragraph fontSize="xxsmall">{testimonial}</S.Paragraph>
        </div>
        <div className="btn-right">
          <MiniWideButton
            padding="0.6rem"
            width="12rem"
            gradientColor1="red"
            gradientColor2="red"
          >
            Saiba mais
          </MiniWideButton>
        </div>
      </S.Card>
    </ul>
  )
}

Testimonials.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
}

export default Testimonials
