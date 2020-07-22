module.exports = {
  title: "devthread.ru",
  keywords:
    "веб разработка, javascript, seo, программирование, reactjs, graphql",
  siteName: "Cборник статей и руководств - devthread.ru",
  titleTemplate: "%s · devthread.ru",
  description:
    "Cборник статей и руководств по тематике веб-разработки и IT для того чтобы помочь вам",
  url: "https://devthread.netlify.app",
  menuLinks: [
    {
      name: "Статьи",
      link: "/articles",
    },
    {
      name: "О сайте",
      link: "/about",
    },
    {
      name: "Контакты",
      link: "/contacts",
    },
    {
      name: "Сниппеты",
      link: "/snippets",
    },
  ],
  social: {
    email: "support@devthread.ru",
    telegram: "https://t.me/devthread",
    twitter: "https://twitter.com/devthread",
    yadzen: "https://zen.yandex.ru/",
  },
  options: {
    articles: {
      onPage: 6,
      onLoadMore: 2,
    },
  },
}
