import React from "react"
import * as S from "./styled"
import menuData from "./menuData"

const NavMenu = () => {
  return (
    <S.MenuWrapper>
      <S.MenuListItems>
        {menuData.map(item =>
          item.url.slice(0, 4) === "http" ? (
            <S.MenuItem key={item.id} disable={item.disable}>
              <S.MenuLink disable={item.disable} as="a" href={item.url}>
                {item.title}
              </S.MenuLink>
            </S.MenuItem>
          ) : (
            <S.MenuItem key={item.id} disable={item.disable}>
              <S.MenuLink disable={item.disable} to={item.url}>
                {item.title}
              </S.MenuLink>
            </S.MenuItem>
          )
        )}
      </S.MenuListItems>
    </S.MenuWrapper>
  )
}

export default NavMenu
