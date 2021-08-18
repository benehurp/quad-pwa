import React from "react"
import * as S from "./styled"

const NavMenu = () => {
  return (
    <S.MenuWrapper>
      <S.MenuItems>
        <S.Items>Home</S.Items>
        <S.Items>Sobre</S.Items>
        <S.Items>Método</S.Items>
        <S.Items>Assinaturas</S.Items>
        <S.Items>Artigos</S.Items>
      </S.MenuItems>
    </S.MenuWrapper>
  )
}

export default NavMenu
