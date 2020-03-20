import React from 'react';
import _ from 'lodash';

import hero_image from "../images/undraw_social_distancing_2g0u.svg";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import {markdownify, Link, safePrefix} from '../utils';

export default class Intro extends React.Component {
    render() {
        return (
            <header class="page-header page-header-dark bg-gradient-primary-to-secondary">
                <div class="page-header-content pt-10">
                  <Container>
                    <Row>
                            <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up">
                                <h1 class="page-header-title">#UnitedApart</h1>
                                <p class="page-header-text mb-5">Join the #UnitedApart movement with us</p>
                                

                                <div class="et_pb_button_module_wrapper et_pb_button_0_wrapper  et_pb_module ">
                                  <a class="et_pb_button et_pb_button_0 et_pb_bg_layout_light" href="/register">Schedule a Free Call</a>
                                </div>
                            </div>
                            <div class="col-lg-6 d-lg-block aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
                              <img 
                              alt="" 
                              title="" 
                              srcSet={hero_image} 
                            />
                            </div>
                    </Row>
                  </Container>
                </div>
            </header>


          // <Container>
          //   <Row>
          //       <Col xs={12} sm={6}>
          //           <div class="et_pb_text_inner">
          //               <h1>We’re Here To Help You.</h1>
          //               <p>Join the #loveandclaritymovement with us.&nbsp;</p>
          //           </div>
          //           <div class="et_pb_button_module_wrapper et_pb_button_0_wrapper  et_pb_module ">
          //               <a class="et_pb_button et_pb_button_0 et_pb_bg_layout_light" href="/register">Schedule a Free Call</a>
          //           </div>
          //       </Col>
          //       <Col xs={12} sm={6}>
          //           <div class="">
          //               <span class=" ">
          //                 <img 
          //                   alt="" 
          //                   title="" 
          //                   srcSet={hero_image} 
          //                 />
          //               </span>
          //           </div>
          //       </Col>
          //   </Row>
          // </Container>

            // <div id={_.get(this.props, 'section.section_id')} className="intro">
            //   <div className="intro-text">
            //     {markdownify(_.get(this.props, 'section.content'))}
            //   </div>
            //   {_.get(this.props, 'section.actions') && 
            //   <p className="intro-cta">
            //     {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
            //     <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button">{_.get(action, 'label')}</Link>
            //     ))}
            //   </p>
            //   }
            // </div>
        );
    }
}
