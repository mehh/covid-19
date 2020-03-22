module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations
                
                // Advanced Options
                selector: '[data-sal]', // Selector of the elements to be animated
                animateClassName: 'sal-animate', // Class name which triggers animation
                disabledClassName: 'sal-disabled', // Class name which defines the disabled state
                rootMargin: '0% 50%', // Corresponds to root's bounding box margin
                enterEventName: 'sal:in', // Enter event name
                exitEventName: 'sal:out', // Exit event name
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                `gatsby-remark-relative-images`,
                /* {
                  resolve: `gatsby-plugin-netlify-cms-paths`,
                  options: {
                    cmsConfig: `/static/admin/config.yml`,
                  },
                }, */
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 1500,
                    backgroundColor: 'transparent', // required to display blurred image first
                  },
                },
              ]}
        },
        `gatsby-transformer-sharp`,
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
