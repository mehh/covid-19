module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
              fonts: [
                {
                  family: `Poppins`,
                  variants: [`300`, `400`, `500`, `600`, `700`, `800`, `900`]
                },
              ],
            }
          },
        `gatsby-source-data`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        // {
        //     resolve: `gatsby-plugin-stackbit-static-sass`,
        //     options: {
        //         inputFile: `${__dirname}/src/sass/main.scss`,
        //         outputFile: `${__dirname}/public/assets/css/main.css`
        //     },
        // },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {
                
            }
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
                menus: require('./src/data/menus.json'),
            }
        }
    ]
};
