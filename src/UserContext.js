import React from "react"

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [openMenu, setOpenMenu] = React.useState(false)

  function useWindowSize() {
    const [size, setSize] = React.useState([0, 0])

    React.useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight])
      }

      window.addEventListener("resize", updateSize)

      updateSize()

      return () => window.removeEventListener("resize", updateSize)
    }, [])
    return size
  }

  return (
    <UserContext.Provider value={{ openMenu, setOpenMenu, useWindowSize }}>
      {children}
    </UserContext.Provider>
  )
}
