import React from 'react';
import _ from 'lodash';
import Tags from '../components/Tags';
import {safePrefix} from '../utils';
import { Link } from "gatsby";
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export const query = graphql`
  query PostQuery($url: String!) {
    markdownRemark(fields: { url: { eq: $url } }) {
      html
      frontmatter {
        title
        content_img_path {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default class Card extends React.Component {

    state = {
        isActive: true
    };

    handleClick = (e) => {
        console.log('clicked card');
    }

    

    render() {
        // let featuredImgFluid = this.props.post.frontmatter.content_img_path.childImageSharp.fluid;
        // let post = this.props.post.markdownRemark

        console.log("====================================");
        console.log(`other data: this.props.frontmatter.content_img_path`);
        console.log(this.props.post.frontmatter);
        console.log("====================================");
        // let featuredImgFluid = this.props.post.frontmatter.content_img_path.childImageSharp.fluid
        let featuredImgFluid = this.props.post.frontmatter.content_img_path;

        return (
            <div class="col-md-6 col-xl-3 mb-5" data-tags={_.get(this.props.post, 'frontmatter.tags')} onClick={this.handleClick}>
             {/* <Link className="card post-preview lift h-100" to={safePrefix(_.get(this.props.post, 'url'))}> */}
            <a class="card post-preview lift h-100"  rel="noopener noreferrer" target="_blank" href={safePrefix(_.get(this.props.post, 'frontmatter.link_out'))}>
                <img class="card-img-top" src={safePrefix(_.get(this.props.post, 'frontmatter.content_img_path'))} alt={_.get(this.props.post, 'frontmatter.title')} />
                {/* <Img className="card-img-top" fluid={featuredImgFluid} /> */}

                <div class="card-body">
                <Tags tags={_.get(this.props.post, 'frontmatter.tags')} />
                <h3 class="card-title">{_.get(this.props.post, 'frontmatter.title')}</h3>
                <h4 className="post-subtitle">{_.get(this.props.post, 'frontmatter.subtitle')}</h4>
                <p class="card-text">{_.get(this.props.post, 'frontmatter.excerpt')}</p>
                </div>
                <div class="card-footer">
                <div class="post-preview-meta">
                    <div className="read-more">
                    <a className="button inverse" rel="noopener noreferrer" target="_blank" href={safePrefix(_.get(this.props.post, 'frontmatter.link_out'))}>Learn More</a>
                    </div>
                </div>
                </div>
            </a>
            {/* </Link> */}
            </div>
        )
    }
}