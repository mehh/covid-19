import React from 'react';
import _ from 'lodash';
import AOS from 'aos';
import 'aos/dist/aos.css'

import Tags from '../components/Tags'
import Filter from '../components/Filter'
import components, {Layout} from '../components/index';
import {getPages, Link, safePrefix} from '../utils';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export default class Home extends React.Component {
    componentDidMount() {
      this.aos = AOS;
      this.aos.init({
      });
    }
    componentDidUpdate() {
      this.aos.refresh();
    }

    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        // document.getElementById('tags').addEventListener('click', tagCheck, false);

        return (
            <Layout {...this.props}>
              {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                  let GetSectionComponent = components[_.get(section, 'component')];
                  return (
                    <GetSectionComponent key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                  )
              })}
              <div className="post-feed">
                <Container>
                  <Filter />
                  <Row>
                      {_.map(display_posts, (post, post_idx) => (
                        <div class="col-md-6 col-xl-3 mb-5" 
                        data-tags={_.get(post, 'frontmatter.tags')}
                        >
                          <a class="card post-preview lift h-100"  rel="noopener noreferrer" target="_blank" href={safePrefix(_.get(post, 'frontmatter.link_out'))}>
                            <img class="card-img-top" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                            <div class="card-body">
                              <Tags tags={_.get(post, 'frontmatter.tags')} />
                              <h3 class="card-title">{_.get(post, 'frontmatter.title')}</h3>
                              <h4 className="post-subtitle">{_.get(post, 'frontmatter.subtitle')}</h4>
                              <p class="card-text">{_.get(post, 'frontmatter.excerpt')}</p>
                            </div>
                            <div class="card-footer">
                              <div class="post-preview-meta">
                                <div className="read-more">
                                  <a className="button inverse" rel="noopener noreferrer" target="_blank" href={safePrefix(_.get(post, 'frontmatter.link_out'))}>Learn More</a>
                                </div>                                
                              </div>
                            </div>
                          </a>
                        </div>

                      ))}
                  </Row>
                </Container>
              </div>
            </Layout>
        );
    }
}