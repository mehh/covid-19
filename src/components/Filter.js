import React from 'react';
import Row from 'react-bootstrap/Row';
import classNames from 'classnames';


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
// function Li(props) {
//     return (
//       <li>
//         {props.tag}
//       </li>
//     );
//   }


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

export default class Filters extends React.Component {
    state = {
        isActive: false
    };

    handleClick = () => {
        console.log('Meow');
        console.log(this);
    
        
        if(this.classList.contains('active')){
          this.classList.add('inactive');
          this.classList.remove('active');
        } else {
          this.classList.add('active');
          this.classList.remove('inactive');
        }

        this.setState(state => ({ isActive: !state.isActive }));
    
    
        var elements = document.querySelectorAll('[data-tags]');
        elements.forEach(element => {
          console.log(element);
          // elements.item(0).classList.add('hidden');
        });
        
    };

  render() {
    const menuClass = classNames({
        menu: true,
        active: this.state.isActive
      });
    
    return true;
    
    return (
        <Row>
        <div class="col-md-12 tags" id="tags">
        <ul>
            <li onClick={this.handleClick} data-key="cooking_and_recipes" class="">Cooking & Recipes</li>
            <li onClick={this.handleClick} data-key="food_and_wine" class="">Food & Wine </li>
            <li onClick={this.handleClick} data-key="entertainment" class="">Entertainment</li>
            <li onClick={this.handleClick} data-key="learning" class="">Learning</li>
            <li onClick={this.handleClick} data-key="kids" class="">Kids</li>
            <li onClick={this.handleClick} data-key="discounts_and_offers" class="">Discounts & Offers</li>
            <li onClick={this.handleClick} data-key="health_and_fitness" class="">Health & Fitness</li>
            <li onClick={this.handleClick} data-key="services" class="">Services</li>
        </ul>
        </div>
        </Row>
    );
  }
}






