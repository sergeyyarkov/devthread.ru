/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'devthread.ru',
    menuLinks: [
      {
        name: 'Статьи',
        link: '/articles'
      },
      {
        name: 'О сайте',
        link: '/about'
      },
      {
        name: 'Контакты',
        link: '/contacts'
      },
      {
        name: 'Ресурсы',
        link: '/books'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    }
  ],
}
