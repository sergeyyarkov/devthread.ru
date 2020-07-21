require("dotenv").config()

const siteConfig = require("./config")

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/assets`,
        name: "assets",
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
      resolve: "gatsby-plugin-firebase",
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
              name: "assets",
            },
          },
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-autolink-headers`,
                  options: {
                    offsetY: `140`,
                    icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path class="anchor-icon" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
                    className: `anchor-link`,
                    maintainCase: true,
                    removeAccents: true,
                    isIconAfterHeader: true,
                    elements: [`h1`, `h2`, `h3`, `h4`],
                  },
                },
                {
                  resolve: `gatsby-remark-vscode`,
                  options: {
                    extensions: ["material-theme"],
                    theme: {
                      default: "Light+ (default light)",
                      parentSelector: {
                        "body.dark": "One Dark Pro",
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
    },
    "gatsby-plugin-netlify-cms",
  ],
}
