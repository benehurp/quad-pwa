import React from "react"
import * as S from "./styled"
import usedButtons from "./usedButtons"

const ButtonsWrapper = ({ showButtons }) => {
  const { telegram, membros, menu } = usedButtons

  switch (showButtons) {
    case "0":
      return <S.ButtonWrapperStyled>{menu()}</S.ButtonWrapperStyled>
    case "1":
      return (
        <S.ButtonWrapperStyled>
          {membros()}
          {menu()}
        </S.ButtonWrapperStyled>
      )
    case "2":
      return (
        <S.ButtonWrapperStyled>
          {telegram()}
          {membros()}
          {menu()}
        </S.ButtonWrapperStyled>
      )
    default:
      return (
        <S.ButtonWrapperStyled>
          {telegram()}
          {membros()}
        </S.ButtonWrapperStyled>
      )
  }
}

export default ButtonsWrapper
