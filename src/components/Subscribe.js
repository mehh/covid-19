import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import SubscribeForm from './SubscribeForm';

export default class Subscribe extends React.Component {
    render() {
        return (
            <section className="subscribe">
              <div className="inner">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-5">
                      <h2 className="subscribe-title">{_.get(this.props, 'pageContext.site.data.subscribe.title')}</h2>
                        <p className="subscribe-text">
                          {htmlToReact(_.get(this.props, 'pageContext.site.data.subscribe.content'))}
                        </p>
                      </div>
                      <div class="col-sm-7">
                        <SubscribeForm {...this.props} />
                      </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
