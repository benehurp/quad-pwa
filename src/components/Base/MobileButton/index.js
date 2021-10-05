import React from "react"
import * as S from "./styled"
import { UserContext } from "../../../UserContext"

const MobileButton = () => {
  const { openMenu, setOpenMenu } = React.useContext(UserContext)

  return (
    <S.MenuMobileButton
      openMenu={openMenu}
      onClick={() => setOpenMenu(!openMenu)}
    />
  )
}

export default MobileButton
