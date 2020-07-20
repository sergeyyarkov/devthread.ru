const path = require('path');

require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'devthread.ru',
    keywords: 'веб разработка, javascript, seo, программирование, reactjs, graphql',
    siteName: 'Cборник статей и руководств - devthread.ru',
    titleTemplate: '%s · статьи и руководства по веб-разработке',
    description: 'Cборник статей и руководств по тематике веб-разработки и IT для того чтобы помочь вам',
    url: 'https://devthread.netlify.app',
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
        name: 'Сниппеты',
        link: '/snippets'
      }
    ],
    social: {
      email: 'support@devthread.ru',
      telegram: 'https://t.me/devthread',
      twitter: 'https://twitter.com/devthread',
      yadzen: 'https://zen.yandex.ru/'
    },
    options: {
      articles: {
        onPage: 6,
        onLoadMore: 2
      }
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devthread`,
        short_name: `devthread`,
        start_url: `/`,
        background_color: `#ffffff`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL: process.env.DATABASE_URL,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#5183F5`,
        showSpinner: false,
      },
    },
    "gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "assets"
            }
          },
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [{
                resolve: `gatsby-remark-vscode`,
                options: {
                  extensions: ['material-theme'],
                  theme: {
                    default: 'Light+ (default light)',
                    parentSelector: {
                      'body.dark': 'One Dark Pro'
                    }
                  }
                }
              }]
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    'gatsby-plugin-netlify-cms',
  ],
}
