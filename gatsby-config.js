module.exports = {
  siteMetadata: {
    title: 'Mark Chavez',
    author: 'Mark Chavez',
    description: 'My personal thoughts on web',
    siteUrl: 'http://markonsoftware.com',
    twitterUrl: 'https://twitter.com/MarkFChavez',
    githubUrl: 'https://github.com/MarkFChavez',
    projects: {
      github_client: 'https://github.com/MarkFChavez/github_client-ruby',
      crypto_contributors: 'https://crypto-contributors.netlify.com',
      bitcoin_index: 'https://bitcoinpriceindex.netlify.com',
      yamda: 'http://yamda.netlify.com',
      yt_downloader: 'https://yt-downloader.netlify.com',
    }
  },
  // pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
