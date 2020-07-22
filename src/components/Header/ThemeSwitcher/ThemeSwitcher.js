import React from "react"
import PropTypes from "prop-types"

import MoonIcon from "../../../images/moon-icon.svg"
import SunIcon from "../../../images/sun-icon.svg"

const ThemeSwitcher = ({ ready, isDark, setIsDark }) => {
  return (
    <div className={ready ? "theme-switcher ready" : "theme-switcher"}>
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

ThemeSwitcher.propTypes = {
  ready: PropTypes.bool,
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
}
