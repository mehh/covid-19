import React from 'react';
import _ from 'lodash';
import Tags from '../components/Tags';
import {safePrefix} from '../utils';
import { Link } from "gatsby";

export default class Card extends React.Component {
    state = {
        isActive: true
    };

    handleClick = (e) => {
        console.log('clicked card')
    }

    render() {
        return (
            <div class="col-md-6 col-xl-3 mb-5" data-tags={_.get(this.props.post, 'frontmatter.tags')} onClick={this.handleClick}>
             {/* <Link className="card post-preview lift h-100" to={safePrefix(_.get(this.props.post, 'url'))}> */}
            <a class="card post-preview lift h-100"  rel="noopener noreferrer" target="_blank" href={safePrefix(_.get(this.props.post, 'frontmatter.link_out'))}>
                <img class="card-img-top" src={safePrefix(_.get(this.props.post, 'frontmatter.thumb_img_path'))} alt={_.get(this.props.post, 'frontmatter.title')} />
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