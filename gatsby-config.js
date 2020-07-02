/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'devthread.ru',
    titleTemplate: '%s · статьи и руководства по веб-разработке',
    description: 'сборник статей и руководств по тематике веб-разработки и IT для того чтобы помочь вам',
    url: 'https://devthread.ru',
    email: 'support@devthread.ru',
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
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    }
  ],
}
