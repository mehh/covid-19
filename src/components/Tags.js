import React from 'react';

// function ActiveLink(props) {
//   return (
//     <li className="active">
//       <Link to={props.link}>{props.text}</Link>
//     </li>
//   );
// }

// function Li(props) {
//   return (
//     <li>
//       <Link to={props.link}>{props.text}</Link>
//     </li>
//   );
// }
function Li(props) {
    return (
      <li>
        {props.tag}
      </li>
    );
  }


function ParseTags(props) {
    var string;
    var tag;
    var returnString = '<ul>';
    var tags = props.tags;
    
    tags.forEach(tag => {
        // console.log('here: '+tag);
 
        if(tag && tag !== undefined){
            if(tag === 'chow_down') {
                string = 'Chow Down'
            }
            if(tag === 'learn_up') {
                string = 'Learn Up'
            }
            if(tag === 'workouts') {
                string = 'Workouts'
            }
            if(tag === 'get_social') {
                string = 'Get Social'
            }
            if(tag === 'be_entertained') {
                string = 'Be Entertained'
            }
            if(tag === 'game_on') {
                string = 'Game On'
            }
            if(tag === 'discounts_and_offers') {
                string = 'Discounts & Offers'
            }
            if(tag === 'for_the_kids') {
                string = 'For the Kids'
            }
            if(tag === 'helpful_services') {
                string = 'Helpful Services'
            }
            if(tag === 'stay_healthy') {
                string = 'Stay Healthy'
            }
            if(tag === 'get_cooking') {
                string = 'Get Cooking'
            }
        }
    });

    

    return (
        <ul>
            <li>
                {string}
            </li>
        </ul>
    )
}

export default class Tags extends React.Component {
  render() {
    return (
        <div class="card-tags">
            <ParseTags tags={this.props.tags} />
        </div>
    );
  }
}




