import React from "react"
import './src/styles/global.scss'
import './src/components/Articles/ArticleCard/ArticleCard.scss'
import './src/components/Newsletter/Newsletter.scss'

import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import { ThemeProvider } from "./src/context/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)