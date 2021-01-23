---
templateKey: article
slug: upravlenie-kontentom-dlya-sajta-gatsbyjs-s-pomoshchyu-netlifycms
keywords:
  - javascript
  - netlifycms
  - gatsbyjs
  - cms
time: "20"
title: Управление контентом для сайта GatsbyJS с помощью NetlifyCMS
popular: true
image: /assets/gatsby-netlifycms.jpg
category: CMS
date: 2021-01-23T16:54:35.645Z
description: В этой статье речь пойдет об очень удобном инструменте для
  управления контентом для вашего веб-сайта. Netlify CMS содержит в себе
  редактирование текста, предварительный просмотр в реальном времени и загрузку
  медиафайлов с помощью перетаскивания файла мышью.
tags:
  - gatsbyjs
  - jamstack
  - javascript
  - netlify
---
В конце этой статьи мы получим простой сайт-блог который будет сделан вместе с генератором статических страниц **GatsbyJS** и непосредственно с **NetlifyCMS**, с помощью которого мы будем добавлять или изменять содержимое сайта (конкретно статьи). Так же мы разместим этот сайт на бесплатном хостинге [Netlify](https://www.netlify.com/) проделав всего пару простых действий.

🌐 [Посмотреть результат можно здесь.](https://admiring-khorana-36e467.netlify.app)

🔗 [Ссылка на репозиторий](https://github.com/sergeyyarkov/gatsby-test-blog)

**Содержание**

* [Основные преимущества использования Netlify CMS](#Основные-преимущества-использования-Netlify-CMS)
* [Создание сайт-блога на основе GatsbyJS](#Создание-сайт-блога-на-основе-GatsbyJS)
  * [Заготовка проекта](#Заготовка-проекта)
  * [Добавление страниц](#Добавление-страниц)
  * [О файле gatsby-config.js](#О-файле-gatsby-config.js)
  * [Добавление поддержки sass для стилей](#Добавление-поддержки-sass-для-стилей)
  * [Подключение шрифтов](#Подключение-шрифтов)
  * [Компонент Header для навигации](#Компонент-Header-для-навигации)
  * [Использование React Hooks для выполнения запроса GraphQL](#Использование-React-Hooks-для-выполнения-запроса-GraphQL)
  * [Добавление SEO компонента](#Добавление-SEO-компонента)
* [Установка и настройка Netlify CMS на веб-сайт](#Установка-и-настройка-Netlify-CMS-на-веб-сайт)
* [Деплой сайта на хостинг Netlify](#Деплой-сайта-на-хостинг-Netlify)
* [Настройка OAuth на Github](#Настройка-OAuth-на-Github)
* [Вывод статей на главную страницу](#Вывод-статей-на-главную-страницу)
* [Создание динамической страницы](#Создание-динамической-страницы)
* [Аутентефикация через Nelify Identity](#Аутентефикация-через-Nelify-Identity)
* [Заключение и полезные ссылки](#Заключение-и-полезные-ссылки)

## Основные преимущества использования Netlify CMS

NetlifyCMS является полностью бесплатным и находится в открытом доступе на [GitHub](https://github.com/netlify/netlify-cms). Вы можете использовать данную CMS вместе с любым генератором статиеских сайтов для создания быстрых сайтов. Стоит отметить, что контент хранится в репозитории Git вместе с исходным кодом вашего сайта для упрощения управления версиями и возможностью обновлять контент непосредственно в Git.

Отмечу еще несколько преимуществ, которые содержит в себе CMS:

* **Удобный веб-интерфейс** - как говорилось ранее вы с легкостью сможете изменять контент вашего сайта, добавлять или удалять медиафайлы и т.д. Познакомиться с UI интерфейсом можно на [демо-сайте](https://cms-demo.netlify.com/). Вход в систему не требуется, достаточно нажать на кнопку **Login**.
* **Простая установка** - достаточно добавить несколько файлов **index.html** и **config.yml** в папке **/admin**, и установить npm пакет, но об этом позже.
* **Аутентефикация** - аутентефикация в систему происходит с помощью веб-токенов GitHub, GitLab, или Bitbucket и JSON. Также можно использовать [Netlify Identity](https://docs.netlify.com/visitor-access/identity/) что даст возможность производить вход например через Google.
* **Настраиваемые типы контента** - вы сможете указать неограниченное количество типов контента с помощью настраиваемых полей.
* **Полностью расширяемый** - есть возможность расширить CMS под свои нужды, написать собственный плагин для редактора или создать виджет.

## Создание сайт-блога на основе GatsbyJS

GatsbyJS - это генератор статических сайтов, который представляет из себя React фрэймворк для создания быстрых веб-сайтов и приложений. Мы создадим небольшой веб-сайт который будет предствлять из себя сайт-блог. На нем будет всего 3 страницы:

* Главная - здесь будем показывать список статей
* О блоге - небольшая страница, где будет отображаться какой то текст
* Динамическая старница статьи, которая будет показывать содержание статьи

Отмечу, что можно использовать [шаблон сайта](https://www.netlifycms.org/docs/start-with-a-template/) с нужным вам генератором, где уже становлена CMS и достаточно сделать пару кликов и сайт будет уже готов (нужно только переделать под себя), но мы не будем использовать это, так как мы хотим разобраться как связать конкретно GatsbyJS и NetlifyCMS.

## Заготовка проекта

На этом этапе мы сделаем небольшую заготовку проекта. То есть добавим верстку для наших страниц и компонентов, подключим шрифты и стили. Также коснемся немного graphql запросов.

Итак, клонируем [hello-world-starter](https://github.com/gatsbyjs/gatsby-starter-hello-world) репозиторий в созданную вами папку с любым названием. Он представляет из себя GatsbyJS сайт которое содержит в себе одну страницу, где выведено сообщение **Hello world!**.

```bash
mkdir gatsby-blog
git clone https://github.com/gatsbyjs/gatsby-starter-hello-world .
```

Сразу же удаляем папку **.git** чтобы убрать все коммиты.

Описание каждого файла вы сможете посмотреть на странице этого репозитория в **README.md** файле. Отдельные файлы такие как **gatsby-node.js** или **gatsby-browser.js** будут объяснены по ходу создания этого сайта. Перейдем в **package.json** файл и рассмотрим скрипты запуска.

* **build** - сборка приложения
* **develop** - запуск сервера для разработки
* **format** - форматирование всех файлов через prettier
* **start** - запускает `npm run develop`
* **serve** - запуск скомпилированного сайта
* **clean** - очищает папку `.cache`

Более подробно о gatsby cli можно узнать [здесь](https://www.gatsbyjs.com/docs/reference/gatsby-cli/).

После клонирования репозитория, устанавливаем необходимые npm пакеты и запускаем сайт в dev режиме

```bash
npm install
npm run develop
```

После переходим по адресу **http://localhost:8000/** где мы должны увидеть надпись **Hello world!**.

## Добавление страниц

Теперь добавим нужные нам страницы. Для начала создадим специальный компонет-шаблон где будут показываться наши основные страницы. Переходим в **./src** и создаем папки с файлом таким образом: **./src/components/Layout/Layout.jsx**

Создадим этот компонент:

```jsx
// ./src/components/Layout/Layout.jsx

import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
```

Теперь создадим страницы **Index** и **About**:

```jsx
// ./src/pages/index.jsx

import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Articles (6):</h1>
      <div className="main-posts">
        <div className='post'>
            <h2>
              <Link to={'/'}>{'Article 1'}</Link>
            </h2>
            <small>{'2021-01-01'}</small>
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage
```

```jsx
// ./src/pages/about.jsx

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <div className="about-content">
        <p>About content...</p>
        <Link to='/'>Return to index page.</Link>
      </div>
    </Layout>
  )
}

export default AboutPage
```

Как видим, получилась довольно простая разметка. Для перехода между страницами мы используем компонент **Link** от gatsby. Перейдите по адресу **http://localhost:8000** и вы увидите эту разметку. Пока что это выглядит не совсем хорошо, поэтому дальше мы добавим несколько стилей и еще один компонент Header.

## О файле gatsby-config.js

Файл **gatsby-config.js** который находится в корне проекта, является очень важным и полезным файлом. Он определяет метаданные сайта, плагины и другую общую конфигурацию. При редактировании этого файла всегда необходимо перезапускать dev сервер для того чтобы применились новые настройки.

Например мы можем определить поле **siteMetadata** в объекте конфигурации. Это позволит использовать вам повторяющиеся данные. Наример название сайта, список навигации по сайту, url сайта. Добавим поле **title** и **description** в **siteMetadata**:

```js
// ./gatsby-config.js

module.exports = {
  siteMetadata: {
    title: 'myblog.com',
    description: 'GatsbyJS blog site.'
  }
}
```

Для доставки данных Gatsby использует graphql, вы можете перейти по адресу http://localhost:8000/___graphql и выполнить к примеру запрос:

```graphql
{
  site {
    siteMetadata {
      title
      description
    }
  }
}
```

Тогда вы получите объект, где увидите поля **title** и **description** со значениями. Как использовать graphql запросы в компонентах я покажу позже.

## Добавление поддержки sass для стилей.

**Sass** - это довольно удобный инструмент, который позволяет писать css код быстрее за счет нового синтаксиса. В данном сайте Sass будет даже излишним, и можно было бы обойтись обычным css, но мы все равно для примера добавим его, так как это очень просто сделать с Gatsby.

Установим несколько пакетов: **gatsby-plugin-sass** и **sass**. **gatsby-plugin-sass** позволит использовать нам **sass/scss** файлы на нашем сайте, а пакет **sass** - это сама реализация Sass.

```bash
npm install sass gatsby-plugin-sass
```

Это еще не всё, необходимо добавить этот плагин добавить в конфигурационный файл **gatsby-config.js** в массив с **plugins**:

```js
// ./gatsby-config.js

module.exports = {
  plugins: ['gatsby-plugin-sass'],
}
```

Теперь попробуем добавить несколько стилей на страницу. Создаем папку **styles** в папке **src** и файл **global.scss** где будут лежать наши глобальные стили:

```scss
// ./src/styles/global.scss

* {
  box-sizing: border-box;
  outline: none;
}

body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

h1,h2,h3,h4,h5,h6,p {
  padding: 0;
  margin: 15px 0;
}

ul {
  margin: 0;
}

main {
  margin-top: 40px;
  h1 {
    margin-bottom: 40px;
  }
}

.container {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.blog-post {
  &__title {
    & h1 {
      margin-bottom: 0;
    }
  }
  &__description p {
    margin-bottom: 2rem;
  }
  &__img img {
    width: 100%;
    border-radius: 3px;
  }
  &__content {
    margin-top: 25px;
    font-size: 17px;
    line-height: 26px;
    & img {
      width: 100%;
      border-radius: 3px;
    }
    & p {
      margin: 0 0 15px;
    }
  }
}

.main-posts {
  & .post {
    margin-bottom: 20px;
    & h2 {
      margin-bottom: 5px;
      & a {
        color: #000;
        text-decoration: none;
      }
    }
    & p {
      text-align: justify;
    }
    border-bottom: 1px solid #e9e9e9;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
}
```

Теперь нужно подключить этот файл к сайту. Сделать это можно изменив файл **gatsby-browser.js**. Создаем его в корне проекта и просто импортируем туда эти стили. После этого стили должны примениться к сайту.

```js
import './src/styles/global.scss'
```

Файл **gatsby-browser.js** позволяет реагировать на действия в браузере и если нужно, оборачивать страницы другими компонентами. Как раз этот файл и может быть использован для определения глобальных стилей. Более подробно о том как использовать этот файл можно узнать в [документации](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/).

## Подключение шрифтов

Для того чтобы подключить шрифты к сайту, их необходимо для начала скачать. Возьмем бесплатный шрифт **Inter**. Прейдем на [этот](https://google-webfonts-helper.herokuapp.com/fonts/inter?subsets=latin) сайт и отметим галочкой шрифт 500, 600 и 700. Снизу добавим префикс к папке со значением **../../static/fonts/**. Копируем сгенерированный код для подключения, скачиваем шрифты по кнопке снизу и перекидываем шрифты в папку **./static/fonts**. Папку **fonts** нужно создать соответственно.

Далее создадим файл **fonts.scss** в папке **styles** и кинем туда наш сгенерированный код для подключения шрифтов.

```scss
/* ./src/styles/fonts.scss */

/* inter-500 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src: url('../../static/fonts/inter-v2-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../../static/fonts/inter-v2-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../../static/fonts/inter-v2-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../../static/fonts/inter-v2-latin-500.woff') format('woff'), /* Modern Browsers */
       url('../../static/fonts/inter-v2-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../../static/fonts/inter-v2-latin-500.svg#Inter') format('svg'); /* Legacy iOS */
}
/* inter-600 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  src: url('../../static/fonts/inter-v2-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../../static/fonts/inter-v2-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../../static/fonts/inter-v2-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('../../static/fonts/inter-v2-latin-600.woff') format('woff'), /* Modern Browsers */
       url('../../static/fonts/inter-v2-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../../static/fonts/inter-v2-latin-600.svg#Inter') format('svg'); /* Legacy iOS */
}
/* inter-700 - latin */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src: url('../../static/fonts/inter-v2-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../../static/fonts/inter-v2-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../../static/fonts/inter-v2-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../../static/fonts/inter-v2-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../../static/fonts/inter-v2-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../../static/fonts/inter-v2-latin-700.svg#Inter') format('svg'); /* Legacy iOS */
}
```

Теперь переходим в файл **global.scss**, подключаем файл **fonts.scss** и меняем **font-family** в **body** на **Inter**.

Чтобы подключить файл **fonts.scss** в **global.scss** нужно использовать **@import** в самом начале файла:

```scss
@import './fonts.scss';
```

Теперь шрифт **Inter** подключен и должен быть виден на сайте.

## Компонент Header для навигации

Далее для разнообразия добавим компонент **Header** для навигации. Создаем путь **./src/components/Header/Header.jsx** и напишем сам компонент:

```jsx
// ./src/components/Header/Header.jsx

import React from 'react';
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div>
          <Link to='/'>
            <p>test</p>
          </Link>
        </div>
        <div className='header-container__nav'>
          <nav>
            <ul>
              <li>
                <Link to='/about'>About</Link> 
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
```

Создадим стили этого компонента в файле **Header.scss**

```scss
// ./src/components/Header/Header.scss

.header {
  height: 65px;
  display: flex;
  align-items: center;
  box-shadow: 1px 2px 18px rgba(0,0,0,.1);
  & a {
    text-decoration: none;
    color: #000;
    & p {
      font-weight: bold;
      margin: 0;
    }
  }
  &-container {
    max-width: 800px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    &__nav {
      & ul li {
        list-style: none;
      }
    }
  }
}
```

Подключаем стили в глобальный файл **global.scss** через импорт:

```scss
@import '../components/Header/Header.scss';
```

Не забываем еще включить этот компонент в файл **Layout.jsx**:

```jsx
// ./src/components/Layout/Layout.jsx

import React from 'react';
import Header from '../Header/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
```

## Использование React Hooks для выполнения запроса GraphQL

Попробуем в комоненте Header в тэге параграфа вывести название нашего сайта, которое было написано в конфигурационном файле. Для этого создадим папку **hooks** в папке **src** и файл **useSiteMetadataQuery.js**. Мы будем использовать функцию **useStaticQuery** от Gatsby которая позволяет использовать React Hook для выполнения запросов graphql во время сборки сайта.

```js
// ./src/hooks/useSiteMetadataQuery.js

import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadataQuery = () => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return { siteMetadata }
}

export { useSiteMetadataQuery }
```

Как видно, для того чтобы выполнить запрос и вытащить данные из graphql, мо должны импользовать [тэг-функцию](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) graphql. Gatsby обрабатывает этот тэг своим способом. Подробнее можно узнать в [документации](https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/).

Теперь мы можем легко использовать этот **hook**. Перейдем в Header компонент и изменим его вот так:

```jsx
// ./src/components/Header/Header.jsx

import React from 'react';
import { Link } from 'gatsby'
import { useSiteMetadataQuery } from '../../hooks/useSiteMetadataQuery'

const Header = () => {
  const { siteMetadata: { title } } = useSiteMetadataQuery()

  return (
    <header className='header'>
      <div className='header-container'>
        <div>
          <Link to='/'>
            <p>{title}</p>
          </Link>
        </div>
        <div className='header-container__nav'>
          <nav>
            <ul>
              <li>
                <Link to='/about'>About</Link> 
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
```

Используя ES6 [деструктуризацию объекта](https://learn.javascript.ru/destructuring) мы вытаскиваем данные и подставляем их куда хотим. В нашем случае мы вытащили поле **title** и подставили значение между тэгами параграфа.

## Добавление SEO компонента

Рассмотрим как добавлять различные seo мета-тэги в заголовок html документа. Для этого установим пакет **react-helmet** который позволит управлять нам этим.

```bash
npm install react-helmet
```

Теперь создадим компонент с названием **SEO** где будет хранится наш шаблон для станиц:

```jsx
// ./src/components/SEO/SEO.jsx

import React from 'react';
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useSiteMetadataQuery } from '../../hooks/useSiteMetadataQuery'

const SEO = ({ title, description }) => {
  const { siteMetadata } = useSiteMetadataQuery()

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description
  }

  return (
    <Helmet title={seo.title} titleTemplate={`${seo.title} - ${siteMetadata.title}`} >
      <html lang="ru" />
      <meta name="description" content={seo.description} />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}
```

Теперь компонент SEO содержит несколько мета-тэгов, по необходимости вы можете добавить и свои в будущем. Пакет **prop-types** используется для получения нужных типов когда мы передаем значение в **props**. Его тоже нужно установить: **npm install prop-types**

Далее осталось вставить этот компонент на все страницы вот таким образом:

```js
// ./src/pages/index.jsx

import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'

const IndexPage = () => {
  return (
    <>
      <SEO title='Index page' />
      <Layout>
        <h1>Articles (6):</h1>
        <div className="main-posts">
          <div className='post'>
              <h2>
                <Link to={'/'}>{'Article 1'}</Link>
              </h2>
              <small>{'2021-01-01'}</small>
            </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
```

Аналогично со страницей About.

На этом заготовка проекта завершена. Теперь нам осталось подключить NetlifyCMS и настроить его, создать шаблон для динамической страницы статьи и вывести нужные данные

## Установка и настройка Netlify CMS на веб-сайт

Для того чтобы связать GatsbyJS и NetlifyCMS для начала установим необходимые npm пакеты:

```bash
npm install gatsby-plugin-netlify-cms netlify-cms-app
```

После добавляем плагин **gatsby-plugin-netlify-cms** в конфигурационный файл **gatsby-config.js** в массив **plugins**. Этот плагин автоматически гененирует файл **admin/index.html** для NetlifyCMS.

Также еще создаем файл с папкой **./static/admin/config.yml** и прописываем конфигурацию для CMS. Конфигурация создается в YML синтаксисе.

```yml
backend:
  name: github
  repo: username/repo-name
  branch: main
locale: 'ru'
media_folder: static/assets
public_folder: /assets

collections:
  - name: articles
    label: Article
    folder: content/articles
    slug: "{{year}}-{{month}}-{{day}}_{{slug}}"
    create: true
    fields:
      - { label: "Template Key", name: "templateKey", widget: "hidden", default: "article" }
      - { label: "Имя URL", name: "slug", widget: "string" }
      - { label: "Заголовок", name: "title", widget: "string" }
      - { label: "Дата публикации", name: "date", widget: "datetime" }
      - { label: "Обложка", name: "image", widget: "image" }
      - { label: "Описание", name: "description", widget: "text"}
      - { label: "Содержание", name: "body", widget: "markdown" }
```

Рассмотрим важные опции для конфигурации:

* **backend** - эта опция определяет, где будет храниться ваш контент. В нашем случае сайт с контентом хранить будем на GitHub указав **name**,  **repo** и **branch** предварительно создав репозиторий. [Подробнее](https://www.netlifycms.org/docs/backends-overview/)
* **media_folder** - этот параметр указывает путь к папке, в которой должны быть сохранены загруженные файлы, относительно репозитория.
* **public_folder** - параметр указывает путь к папке, в которой будут доступны файлы, загруженные медиатекой, относительно созданного сайта. Для полей с виджетами **файл** или **изображение**, значение поля создается путем добавления этого пути к выбранному файлу.
* **collections** - данный параметр определяет какие типы контента и поля редактора в UI генерируют файлы и контент в вашем репозитории. [Подробнее об этом параметре](https://www.netlifycms.org/docs/configuration-options/#collections)

Как видим, в нашей конфигурации ничего сложного нет, мы создали только одну коллекцию **articles** и определили несколько полей со встроенными виджетами. Виджеты **widget** определяют тип данных и интерфейс для полей ввода. 

Так же мы указали опцию **folder**, где будут хранится наши статьи в формате **.md**. Поле **Template key** понадобится нам для того, чтобы в будущем получить эти статьи через GraphQL запрос.

## Деплой сайта на хостинг Netlify

**Netlify** - это платформа, которая предлагает облачный хостинг. Вы можете публиковать свои сайты прямо из репозиториев git. Многие функции полностью бесплатны на этой платформы, вы можете не беспокоится и цене.

Для того чтобы развернуть сайт на Netlify, для начала необходимо загрузить в этот репозиторий наш сайт с CMS:

```bash
git init
git add .
git commit -m "site"
git branch -M main
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

Далее переходим на сам сайт [Netlify](https://www.netlify.com/) и регистрируемся. После нажимаем на кнопку **New site from Gi**`, выбираем Git провайдера (GitHub) и далее выбираем наш репозиторий с сайтом. Вконце нажимем **Deploy site**. Далее ждем когда Netlify установит все необходимые пакеты и соберет сайт. После сборки вы должны увидеть свой сайт.

## Настройка OAuth на Github

Чтобы убедиться, что Netlify CMS имеет доступ к вашему репозиторию GitHub, вам необходимо настроить приложение OAuth на GitHub.

* Переходим [сюда](https://github.com/settings/developers) и создаем новое приложение нажав на кнопку **New OAuth App**
* Далее заполняем поля:

  * **Application name** - вводим имя приложения. 
  * **Homepage URL** - вводим ссылку на наш сайт **.netlify.app**
  * **Authorization callback URL** - вводим ссылку: **https://api.netlify.com/auth/done**

После создания приложения у вас должны появится два ключа: **Client ID** и **Client Secre**. **Client secret** вы должны сгенерировать нажав на кнопку **Generate new client secret**. Эти ключи нужно добавить на ваш сайт Netlify.

* На сайте Netlify переходим по пути **Site settings > Access control > OAuth**
* В разделе **Authentication Providers** выбираем **Install Provider**.
* Выбираем GitHub в качестве провайдера и вставляем наши ключи.

Теперь когда всё это сделано, у вас есть возможность перейти в CMS. Достаточно в конце URL дописать **/admin/**. После перехода в CMS создадим три статьи. В качестве описания и содержания вставим любой текст, для обложки найдем любую картинку.

![демонстрация-админ-панели](/assets/ueqolge.png)

## Вывод статей на главную страницу

Выведем список стайтей на нашу главную страницу. Переходим в редактор кода и в териминал прописываем **git pull origin main**. После этого вы должны были получить созданные нами ранее статьи, конкретно **.md** файлы в папке **content** и картинки в папке **static/assets**.

Устанавливаем следующие пакеты:

```bash
npm install gatsby-transformer-remark gatsby-source-filesystem
```

* **gatsby-source-filesystem** - данный пакет нужен, для того чтобы получить данные из локальной файловой системы.
* **gatsby-transformer-remark** - этот пакет парсит файлы markdown.

Изменим конфигурационный файл добавив туда эти плагины:

```js
// gatsby-config.js

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify-cms',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
  siteMetadata: {
    title: 'myblog.com',
    description: 'GatsbyJS blog site.'
  }
}
```

И если мы перезапустим dev севрер и выполним вот такой запрос:

```graphql
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
          description
          slug
          image
          templateKey
        }
        rawMarkdownBody
      }
    }
  }
}
```

То мы получим всё, что находится в папке **content**.

Изменим **index.jsx** таким образом:

```jsx
// ./src/pages/index.jsx

import React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'

const IndexPage = ({ data: { articles: { edges } } }) => {
  return (
    <>
      <SEO title='Index page' />
      <Layout>
        <h1>Articles ({ edges.length }):</h1>
        <div className="main-posts">
          {edges.map(({ node }, i) => (
             <div className='post' key={i}>
                <h2>
                  <Link to={`/article/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                </h2>
                <small>{node.frontmatter.date}</small>
                <p>{node.frontmatter.description}</p>
              </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
{
    articles: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "D MMMM YYYY", locale: "ru-RU")
            description
          }
        }
      }
    }
  }
`

export default IndexPage
```

С помощью тэга graphql мы делаем запрос для получения статей. Также указываем еще и **templateKey** в качестве параметра чтобы получить именно статьи. Далее мы просто получаем эти статьи в аргументе страницы **IndexPage** и поставляем нужные значения.

![Вывод-всех-статей-на-страницу](/assets/yvvs281.png)

## Создание динамической страницы

Теперь наша задача заключается в том, чтобы взять **md** файлы из папки **content** и на каждый файл создать отдельную страницу, разумеется в этом нам поможет Gatsby. Создадим шаблон для динамической страницы создав файл **./src/templates/article.jsx**:

```jsx
// ./src/templates/article.jsx

import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'

const articleTemplate = ({ data: { article: { frontmatter, html } } }) => {
  return (
    <>
      <SEO title={frontmatter.title} />
      <Layout>
        <div className="blog-post">
          <div className="blog-post__title">
            <h1>{frontmatter.title}</h1>
          </div>
          <div className="blog-post__date">
            <small>{frontmatter.date}</small>
          </div>
          <div className="blog-post__description">
            <p>{frontmatter.description}</p>
          </div>
          <div className="blog-post__img">
            <img src={frontmatter.image} alt={frontmatter.title}/>
          </div>
          <div className="blog-post__content">
           <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query Article($slug: String!) {
    article: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        title
        description
        date(formatString: "D MMMM YYYY", locale: "ru-RU")
        image
      }
    }
  }
`

export default articleTemplate
```

Здесь мы делаем похожий принцип. Но чтобы получить нужную статью по которой мы кликнули, мы должны в качестве переменной в graphql запрос передать значение **$slug**. Далее просто подставляем значения.

Далее создаем файл в корне проекта с названием **gatsby-node.js**. Код в этом файле будет запускаться только один раз в процессе создания сайта. Как раз он нам и пригодится чтобы создать страницы. [Подробнее о Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/).

```js
// ./gatsby-node.js

const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve('src/templates/article.jsx')

  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                templateKey
                slug
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const all = result.data.allMarkdownRemark.edges
  const articles = all.filter(article => article.node.frontmatter.templateKey === "article")

  articles.forEach(({ node }) => {
    createPage({
      path: `article/${node.frontmatter.slug}/`,
      component: articleTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
```

Здесь тоже всё просто. Сначала получаем абсолютный путь до нашего шаблона **src/templates/article.jsx**. Далее выполняем запрос на получение всех существующих "узлов". Отфилтровываем массив для получения только статей и далее через функцию forEach создаем страницу с помощью [createPage](https://www.gatsbyjs.com/docs/reference/config-files/actions/#createPage) где:

* **path** - валидный URL.
* **component** - абсолютный путь к компоненту для этой страницы
* **context** - данные контекста для этой страницы. Передается как реквизит в компонент **this.props.pageContext**, а также в запрос graphql как аргументы graphql.

Теперь осталось перезапустить сервер и протестировать сайт. Если по какой то причине контент не обновляется или возникают другие проблемы, попробуйте прописать команду **gatsby clean** в терминал.

Для того чтобы запустить сайт в финальной сборке, достаточно написать:

```bash
gatsby build
gatsby serve
```

![динамическая-страница-статьи](/assets/ekwhwhj.png)

После проверки осталось только сделать push на github. Netlify сам поймет изменения и заново соберет сайт.

```bash
git add .
git commit -m "article template"
git push origin main
```

## Аутентефикация через Nelify Identity

Сервис Netlify Identity позволяет вам управлять и аутентифицировать пользователей на вашем сайте или в приложении, не требуя, чтобы они были пользователями Netlify или любой другой службы. Вы можете использовать это для закрытого контента, администрирования сайта и многого другого. Чтобы включить службу Netlify Identity на сайте достаточно выбрать вкладку **Identity** и нажать на кнопку **Enable Identity**.

![netlify-identity](/assets/wyoedkj.png)

Затем перейти по пути **Site settings > Identity > Services > Git Gateway** и выбираем **Enable Git Gateway**. Далее в файле **config.yml** меняем поле **backend** с **github** на **git-gateway**. И делаем push в репозиторий.
После очередной сборки сайта, вы можете перейди в админ-панель и нажать на кнопку **Login with Netlify Identity**. Далее вы сможете создать нового пользователя и войти в админ-панель.

![netlify-identity-signup](/assets/td2wlx2.png)

В данный момент каждый сможет создать нового пользователя, поэтому нам нужно отключить эту функцию. Переходим в **Site Settings** > **Identity** > **Registration preferences** и нажимаем на **Edit settings** и ставим галочку **Invite only**.

![netlify-identity-registration](/assets/n4kwm2v.png)

Чтобы сделать вход через Google или Github, просто добавьте провайдера в разделе **External providers**

![providers](/assets/p5meca8.png)

На этом установка и настройка NetlifyCMS завершена.

## Заключение и полезные ссылки

Создание GatsbyJS сайта вместе с NetlifyCMS оказалась не очень сложной задачей. NetlifyCMS отлично подойдет в роли не сложной админки для управления контентом на сайте. В статье не затронута такая вещь как [Publish mode](https://www.netlifycms.org/docs/configuration-options/#publish-mode), которая позволяет контролировать этапы публикации контента. Вы можете прочитать о ней самостоятельно.

🔗 Ниже распологаются полезные ссылки:

* [Документция GatsbyJS](https://www.gatsbyjs.com/docs/)
* [Документация NetlifyCMS](https://www.netlifycms.org/docs/intro/)
* [Топ 10 полезных плагинов  для сайта GatsbyJS](https://blog.bitsrc.io/10-top-gatsbyjs-plugins-for-2020-2a8a6fdbff5a)
* [Список сайтов-шаблонов GatsbyJS](https://www.gatsbyjs.com/starters/?)
* [Краткое руководство по GraphQL](https://coderlessons.com/tutorials/veb-razrabotka/izuchite-graphql/graphql-kratkoe-rukovodstvo)
* [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/)