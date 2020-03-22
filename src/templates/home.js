import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import components, {Layout} from '../components/index';
import {getPages, Link, safePrefix} from '../utils';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class Home extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
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
                  <Row>
                    <div class="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                      <h2 class="mb-4">View the Offers</h2>
                      <p>Discover all these wonderful offers during this time.</p>
                    </div>
                  </Row>
                  <Row>
                      {_.map(display_posts, (post, post_idx) => (
                      <article key={post_idx} className="post post-card" data-tags={_.get(post, 'frontmatter.tags')}>
                        <div className="post-card-inside">
                          {_.get(post, 'frontmatter.thumb_img_path') && 
                          <Link className="post-card-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                            <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                          </Link>
                          }
                          <div className="post-card-content">
                            <header className="post-header">
                              <h2 className="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                              <h3 className="post-subtitle">{_.get(post, 'frontmatter.subtitle')}</h3>
                            </header>
                            <div className="post-excerpt">
                              <p>{_.get(post, 'frontmatter.excerpt')}</p>
                            </div>
                            <div className="read-more">
                                <Link className="button inverse" to={safePrefix(_.get(post, 'url'))}>Read more</Link>
                              </div>
                          </div>
                        </div>
                      </article>
                      ))}
                  </Row>
                </Container>
              </div>
            </Layout>
        );
    }
}