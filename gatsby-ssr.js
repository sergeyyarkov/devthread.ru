import "firebase/database"
import React from "react"
import Layout from "./src/components/Layout/Layout"

const OnDark = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function() {
          window.__isDarkTheme = false
          
          window.__setTheme = function(theme) {
            onChangeTheme(theme)
          }
          
          // onRefreshPage
          if (localStorage.getItem('dark') || (new Date().getHours() >= 22 || new Date().getHours() <= 6)) {
            window.__isDarkTheme = true
            document.body.classList.add('dark')
            window.localStorage.setItem('dark', 'true')
          }
          
          function onChangeTheme(theme) {
            if (theme === 'dark') {
              window.__isDarkTheme = true
              localStorage.setItem('dark', 'true')
              document.body.classList.add('dark')
            } else if (theme === 'light') {
              window.__isDarkTheme = false
              localStorage.removeItem('dark')
              document.body.classList.remove('dark')
            }
          }          
        })()
      `,
      }}
    />
  )
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<OnDark key="isDarkTheme" />)
}

export const wrapPageElement = ({ element, props }) => {
  const { location: { pathname } } = props
  pathname.includes('/amp/') ? props.amp = true : props.amp = false

  return <Layout {...props}>{element}</Layout>
}
