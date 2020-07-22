import React from "react"

import MoonIcon from "../../../images/moon-icon.svg"
import SunIcon from "../../../images/sun-icon.svg"

const ThemeSwitcher = () => {
  const [ready, setReady] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    setIsDark(window.__isDarkTheme)
    setReady(true)
  }, [setIsDark, setReady])

  return (
    <div className={ready ? "header-nav__theme ready" : "header-nav__theme"}>
      {isDark ? (
        <SunIcon
          onClick={() => {
            window.__setTheme("light")
            setIsDark(!isDark)
          }}
        />
      ) : (
        <MoonIcon
          onClick={() => {
            window.__setTheme("dark")
            setIsDark(!isDark)
          }}
        />
      )}
    </div>
  )
}

export default ThemeSwitcher
