import React from 'react';
import _ from 'lodash';
import AOS from 'aos';
import 'aos/dist/aos.css'


import components, {Layout} from '../components/index';
import {getPages, Link, safePrefix} from '../utils';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class Home extends React.Component {
    componentDidMount() {
      this.aos = AOS;
      console.log('going to init');
      this.aos.init({
      });
      console.log('inittted');
    }
    componentDidUpdate() {
      this.aos.refresh();
      console.log('refresh');
    }

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
                        <div class="col-md-6 col-xl-3 mb-5 aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-delay="0"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="false"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                        >
                          <a class="card post-preview lift h-100" rel="noopener noreferrer" target="_blank" href={safePrefix(_.get(post, 'frontmatter.link_out'))}>
                            <img class="card-img-top" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                            <div class="card-body">
                              <h3 class="card-title">{_.get(post, 'frontmatter.title')}</h3>
                              <h4 className="post-subtitle">{_.get(post, 'frontmatter.subtitle')}</h4>
                              <p class="card-text">{_.get(post, 'frontmatter.excerpt')}</p>
                            </div>
                            <div class="card-footer">
                              <div class="post-preview-meta">
                                {/* <img class="post-preview-meta-img" src="https://source.unsplash.com/vTL_qy03D1I/100x100"> */}
                                {/* <div class="post-preview-meta-details">
                                  <div class="post-preview-meta-details-name">Aariz Fischer</div>
                                  <div class="post-preview-meta-details-date">Feb 4 · 5 min read</div>
                                </div> */}
                                <div className="read-more">
                                  <a className="button inverse" rel="noopener noreferrer" target="_blank" href={safePrefix(_.get(post, 'frontmatter.link_out'))}>Read more</a>
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