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
        console.log('here: '+tag);
 
        if(tag && tag !== undefined){
            if(tag === 'cooking_and_recipes'){
                string = 'Cooking & Recipes'
            }
            if(tag === 'food_and_wine'){
                string = 'Food & Wine '
            }
            if(tag === 'entertainment'){
                string = 'Entertainment'
            }
            if(tag === 'learning'){
                string = 'Learning'
            }
            if(tag === 'kids'){
                string = 'Kids'
            }
            if(tag === 'discounts_and_offers'){
                string = 'Discounts & Offers'
            }
            if(tag === 'health_and_fitness'){
                string = 'Health & Fitness'
            }
            if(tag === 'services'){
                string = 'Services'
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
            <strong>
                <ParseTags tags={this.props.tags} />
            </strong>
        </div>
    );
  }
}




