import React from "react"

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [openMenu, setOpenMenu] = React.useState(false)

  return (
    <UserContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </UserContext.Provider>
  )
}
