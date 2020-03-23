import React from 'react';

export default class ContributeForm extends React.Component {
    render() {
        return (
          <form className="subscribe-form" name="Contributions" method="POST" data-netlify="true">
            <p>
                <label>
                  <span className="screen-reader-text">Your Name:</span>
                  <input className="subscribe-email" type="text" name="email" placeholder="Enter Your Name"/>
                </label>               
            </p>
            <p>
                <label>
                  <span className="screen-reader-text">Your Email:</span>
                  <input className="subscribe-email" type="email" name="email" placeholder="Enter Email Address"/>
                </label>              
            </p>
            <p>
                <label>
                  <span className="screen-reader-text">Message: </span>
                  <textarea rows="4" cols="50" placeholder="Your Message" name="message"></textarea>
                </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        );
    }
}
