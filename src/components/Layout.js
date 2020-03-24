import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Subscribe from './Subscribe';
import Contribute from './Contribute';
import Footer from './Footer';
import home_happy from '../images/home_happy.jpg';

var home_happy_url = 'https://stayhomestaysane.com'+home_happy;

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i%7CPT+Serif:400,700" rel="stylesheet"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                    {(_.get(this.props, 'pageContext.frontmatter.template') === 'post') &&  
                    _.get(this.props, 'pageContext.frontmatter.canonical_url') && 
                    <link rel="canonical" href={_.get(this.props, 'pageContext.frontmatter.canonical_url')}/>
                    }
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                        crossorigin="anonymous"
                    />      

                    <meta property="og:site_name" content="#StayHomeStaySane" />
                    <meta property="og:url" content="https://stayhomestaysane.com" />
                    <meta property="og:title" content="#StayHomeStaySane" />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content="StayHomeStaySane is a collective of resources meant to encourage you to see the silver lining of spending more time indoors. There’s a whole world to be accessed online and we’re here to help you discover more of it." />              
                    <meta property="og:image" content={home_happy_url} />

                    
                    <meta name="twitter:site" content="https://stayhomestaysane.com" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="#StayHomeStaySane" />
                    <meta name="twitter:description" content="StayHomeStaySane is a collective of resources meant to encourage you to see the silver lining of spending more time indoors. There’s a whole world to be accessed online and we’re here to help you discover more of it." />
                </Helmet>
                  <div id="page" className={'site layout-' + _.get(this.props, 'pageContext.site.siteMetadata.layout_style') + ' palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette')}>
                    <Header {...this.props} />
                    <div id="content" className="site-content">
                      <main id="main" className="site-main inner">
                        {this.props.children}
                      </main>
                    </div>
                    {_.get(this.props, 'pageContext.site.data.subscribe.enabled') && 
                      <Subscribe {...this.props} />
                    }
                    <Contribute />
                    <Footer {...this.props} />
                  </div>
            </React.Fragment>
        );
    }
}
