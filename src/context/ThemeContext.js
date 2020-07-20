import React from "react"

const ThemeContext = React.createContext({ isDark: false })

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = React.useState(true)

  const toggleDarkTheme = () => {
    setIsDark(true)
    document.body.classList.add('dark')
    window.localStorage.setItem('dark', 'true')
  }

  const toggleLightTheme = () => {
    setIsDark(false)
    document.body.classList.remove('dark')
    window.localStorage.removeItem('dark')
  }

  // React.useEffect(() => {
  //   if (localStorage.getItem('dark')) {
  //     setIsDark(true)
  //   }
  // }, [setIsDark])

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        setIsDark,
        toggleDarkTheme,
        toggleLightTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext

export { ThemeProvider }