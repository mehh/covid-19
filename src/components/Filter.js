import React from 'react';
import Row from 'react-bootstrap/Row';
import classNames from 'classnames';

function ParseTags(props) {
    var string;
    var tag;
    var returnString = '<ul>';
    var tags = props.tags;

    tags.forEach(tag => {
        if (tag && tag !== undefined) {
            if (tag === 'cooking_and_recipes') {
                string = 'Cooking & Recipes'
            }
            if (tag === 'food_and_wine') {
                string = 'Food & Wine '
            }
            if (tag === 'entertainment') {
                string = 'Entertainment'
            }
            if (tag === 'learning') {
                string = 'Learning'
            }
            if (tag === 'kids') {
                string = 'Kids'
            }
            if (tag === 'discounts_and_offers') {
                string = 'Discounts & Offers'
            }
            if (tag === 'health_and_fitness') {
                string = 'Health & Fitness'
            }
            if (tag === 'services') {
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

    handleClick = (e) => {
        if (!e.target.classList.contains('filter-button')) return false;
        const key = e.target.dataset.key;

        this.setState(state => ({ isActive: !state.isActive }));

        const filterButtons = document.querySelectorAll('.filter-button');

        Array.from(filterButtons).forEach(button => {
            (button.dataset.key === key) ?
                button.classList.add('active') :
                button.classList.remove('active');
        });

        const cardWrappers = document.querySelectorAll('[data-tags]');

        Array.from(cardWrappers).forEach(wrapper => {
            (wrapper.dataset.tags === key) ?
                wrapper.classList.remove('hidden') :
                wrapper.classList.add('hidden');
        });
    };

    render() {
        const menuClass = classNames({
            menu: true,
            active: this.state.isActive
        });

        return (
            <Row>
                <div class="col-md-12 tags" id="tags">
                    <ul onClick={this.handleClick}>
                        <li data-key="cooking_and_recipes" className="filter-button">Cooking & Recipes</li>
                        <li data-key="chow_down" className="filter-button">Food & Wine </li>
                        <li data-key="be_entertained" className="filter-button">Entertainment</li>
                        <li data-key="learning" className="filter-button">Learning</li>
                        <li data-key="for_the_kids" className="filter-button">Kids</li>
                        <li data-key="discounts_and_offers" className="filter-button">Discounts & Offers</li>
                        <li data-key="stay_healthy" className="filter-button">Health & Fitness</li>
                        <li data-key="services" className="filter-button">Services</li>
                    </ul>
                </div>
            </Row>
        );
    }
}






