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
import Card from '../components/Card';
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
                        <Card post={post} />
                      ))}
                  </Row>
                </Container>
              </div>
            </Layout>
        );
    }
}