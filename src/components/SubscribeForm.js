import React from 'react';

export default class SubscribeForm extends React.Component {
    render() {
        return (
          <form name="subscribeForm" class="form-inline subscribe" method="POST" netlifyHoneypot="bot-field" data-netlify="true" >
            <div class="form-group mb-2">
              <label for="staticEmail2" class="sr-only">Email</label>
              <input type="email" class="form-control" id="staticEmail2" placeholder="email@example.com" />
            </div>
            <div className="screen-reader-text">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </div>
            <input type="hidden" name="form-name" value="subscribeForm" />
            <button type="submit" class="btn btn-primary mb-2">Subscribe</button>
          </form>



        );
    }
}
