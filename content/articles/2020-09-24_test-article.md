---
templateKey: article
slug: article-ts
keywords:
  - typescript
  - apollo
  - nodejs
  - graphql
time: "10"
title: ispolzovanie-apollo-server-vmeste-s-typescript
popular: true
image: /assets/typescript-apollo-wallpaper.png
category: Разработка
date: 2020-09-24T15:55:48.534Z
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur.
tags:
  - typescript
  - apollo
  - nodejs
  - graphql
---
## this is second article

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non fermentum ligula. Aenean et ex nec magna faucibus congue eu ac justo. Cras malesuada diam lectus, vitae feugiat nulla condimentum id. Duis interdum sodales eros ornare mattis. Nunc id viverra ante. Maecenas suscipit est sed rhoncus condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vehicula risus nisi, quis hendrerit magna tincidunt eu. Phasellus fringilla accumsan viverra. Mauris a cursus orci.

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

* Nunc non fermentum ligula?
* Nunc non fermentum ligula?
* Nunc non fermentum ligula?
* Nunc non fermentum ligula?
* Nunc non fermentum ligula?

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non fermentum ligula. Aenean et ex nec magna faucibus congue eu ac justo. Cras malesuada diam lectus, vitae feugiat nulla condimentum id. Duis interdum sodales eros ornare mattis. Nunc id viverra ante. Maecenas suscipit est sed rhoncus condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vehicula risus nisi, quis hendrerit magna tincidunt eu. Phasellus fringilla accumsan viverra. Mauris a cursus orci.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non fermentum ligula. Aenean et ex nec magna faucibus congue eu ac justo. Cras malesuada diam lectus, vitae feugiat nulla condimentum id. Duis interdum sodales eros ornare mattis. Nunc id viverra ante. Maecenas suscipit est sed rhoncus condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vehicula risus nisi, quis hendrerit magna tincidunt eu. Phasellus fringilla accumsan viverra. Mauris a cursus orci.

![wallpaper](/assets/reactjs_javascript_typescript_programming_programming_language_react_native_facebook_react-1568827.webp)

![testtt](/assets/background1.png)

```js
const {
  //L1
  siteMetadata: {
    title,
    menuLinks,
    social: { twitter, telegram },
  },
} = useSiteMetadataQuery()
const [isScrolled, setIsScrolled] = React.useState(false)
const [isMobileOpen, setIsMobileOpen] = React.useState(false)
const [isDark, setIsDark] = React.useState(false)

React.useEffect(() => {
  setIsDark(window.__isDarkTheme)
  isMobileOpen
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "")
  document.body.onscroll = () =>
    window.pageYOffset >= 100 ? setIsScrolled(true) : setIsScrolled(false)
}, [setIsDark, isMobileOpen])
```

## List

1. First
2. Second
3. Third