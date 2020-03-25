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
                        <li data-key="chow_down" className="filter-button">
                            <div class="emoji">🍔</div>
                            <div class="title">Chow Down</div>
                        </li>
                        <li data-key="learn_up" className="filter-button">
                            <div class="emoji">🤓</div>
                            <div class="title">Learn Up</div>
                        </li>
                        <li data-key="workouts" className="filter-button">
                            <div class="emoji">💪</div>
                            <div class="title">Workouts</div>
                        </li>
                        <li data-key="get_social" className="filter-button">
                            <div class="emoji">📞</div>
                            <div class="title">Get Social</div>
                        </li>
                        <li data-key="be_entertained" className="filter-button">
                            <div class="emoji">🎥</div>
                            <div class="title">Be Entertained</div>
                        </li>
                        <li data-key="game_on" className="filter-button">
                            <div class="emoji">🎮</div>
                            <div class="title">Game On</div>
                        </li>
                        <li data-key="discounts_and_offers" className="filter-button">
                            <div class="emoji">💸</div>
                            <div class="title">Discounts & Offers</div>
                        </li>
                        <li data-key="for_the_kids" className="filter-button">
                            <div class="emoji">👪</div>
                            <div class="title">For the Kids</div>
                        </li>
                        <li data-key="helpful_services" className="filter-button">
                            <div class="emoji">🖥️</div>
                            <div class="title">Helpful Services</div>
                        </li>
                        <li data-key="stay_healthy" className="filter-button">
                            <div class="emoji">👧</div>
                            <div class="title">Stay Healthy</div>
                        </li>
                        <li data-key="get_cooking" className="filter-button">
                            <div class="emoji">🍳</div>
                            <div class="title">Get Cooking</div>
                        </li>
                    </ul>
                </div>
            </Row>
        );
    }
}






