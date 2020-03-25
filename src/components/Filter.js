import React from 'react';
import Row from 'react-bootstrap/Row';
import classNames from 'classnames';

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
                        <li>
                            <div data-key="chow_down" className="filter-button"></div>
                            <div class="emoji">🍔</div>
                            <div class="title">Chow Down</div>
                        </li>
                        <li>
                            <div data-key="learn_up" className="filter-button"></div>
                            <div class="emoji">🤓</div>
                            <div class="title">Learn Up</div>
                        </li>
                        <li>
                            <div data-key="workouts" className="filter-button"></div>
                            <div class="emoji">💪</div>
                            <div class="title">Workouts</div>
                        </li>
                        <li>
                            <div data-key="get_social" className="filter-button"></div>
                            <div class="emoji">📞</div>
                            <div class="title">Get Social</div>
                        </li>
                        <li>
                            <div data-key="be_entertained" className="filter-button"></div>
                            <div class="emoji">🎥</div>
                            <div class="title">Be Entertained</div>
                        </li>
                        <li>
                            <div data-key="game_on" className="filter-button"></div>
                            <div class="emoji">🎮</div>
                            <div class="title">Game On</div>
                        </li>
                        <li>
                            <div data-key="discounts_and_offers" className="filter-button"></div>
                            <div class="emoji">💸</div>
                            <div class="title">Discounts & Offers</div>
                        </li>
                        <li>
                            <div data-key="for_the_kids" className="filter-button"></div>
                            <div class="emoji">👪</div>
                            <div class="title">For the Kids</div>
                        </li>
                        <li>
                            <div data-key="helpful_services" className="filter-button"></div>
                            <div class="emoji">🖥️</div>
                            <div class="title">Helpful Services</div>
                        </li>
                        <li>
                            <div data-key="stay_healthy" className="filter-button"></div>
                            <div class="emoji">👧</div>
                            <div class="title">Stay Healthy</div>
                        </li>
                        <li>
                            <div data-key="get_cooking" className="filter-button"></div>
                            <div class="emoji">🍳</div>
                            <div class="title">Get Cooking</div>
                        </li>
                    </ul>
                </div>
            </Row>
        );
    }
}






