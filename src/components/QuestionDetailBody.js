import React, { Component } from 'react';
import { Icon } from 'react-icons-kit'
import {list} from 'react-icons-kit/iconic/list'
import {ic_star_border} from 'react-icons-kit/md/ic_star_border'


export class QuestionDetailBody extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <main role="main" className="layout__body details-main-wrapper">
            <div className="details-content-block-wrapper">
                <section className="details-content-block" data-functional-selector="details-content-block">
                    <div data-functional-selector="details-kahoot-image" aria-label="Cover image" role="img" className="details-kahoot-image" style={{backgroundImage: `url(https://images-cdn.kahoot.it/d884f403-e7c5-4540-a01a-b2a0bdff52c6?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=500)`, height:'305.1px'}}></div>
                    <div className="details-content-block__kahoot-title-and-details-wrapper">
                        <div className="kahoot-title" data-functional-selector="kahoot-title">
                        <h1 data-functional-selector="kahoot-title__heading" className="kahoot-title__heading">United Nations Day</h1>
                        </div>
                        <div className="details-action-buttons">
                        <div className="details-action-buttons__wrapper" data-functional-selector="details-action-buttons">
                            <div className="details-action-buttons__group">
                                <button type="button" role="button" data-functional-selector="play-button" className="button button button--spacer details-action-buttons__play-button">
                                Play
                                </button>
                                <button type="button" role="button" data-functional-selector="challenge-button" className="button button button--spacer details-action-buttons__challenge-button">
                                    Challenge
                                </button>
                            </div>
                            <div className="details-action-buttons__group">
                                <button type="button" role="button" data-functional-selector="button" className="icon-button favorite-button details-favourite-button favorite-button--desktop" aria-label="Toggle favorite Kahoot">
                                    <span className="icon-button__wrap">
                                        <span className="icon icon-button__icon icon" title="Favorite Kahoot">
                                        <Icon icon={ic_star_border} size={25}/>
                                        </span>
                                    </span>
                                </button>
                                <div aria-haspopup="true" className="action-menu details-actions-menu action-menu--static">
                                    <button type="button" role="button" data-functional-selector="detailsActionMenu__toggle" className="icon-button action-menu__icon-button icon-button--dot-style">
                                    <span className="icon-button__wrap">
                                        <span className="icon icon-button__icon action-menu__toggle-icon">
                                        <Icon icon={list} size={25}/>
                                        </span>
                                        <div className="visibly-hidden" id="more__accessibility-description">Click to open action menu</div>
                                    </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                        <span className="kahoot-type-description">
                        A public quiz for social occasions 
                        </span>
                        <div className="details-kahoot-details">
                        <div>
                            <span>
                                <span className="details-content-block__component--hidden-small-medium">
                                    <span>
                                    Why do we celebrate the United Nations Day? Play this quiz to find out!
                                    <a className="inline-tag" href="/search?filter=1&amp;tags=%23UnitedNations">#UnitedNations</a> 
                                    </span>
                                    <span>… </span>
                                </span>
                            </span>
                            <button type="button" role="button" data-functional-selector="button" className="text-button details-kahoot-description-toggle-button details-kahoot-description-toggle-button--is-visible-in-desktop">
                                SHOW MORE
                            </button>
                        </div>
                        <ul className="details-kahoot-statistics details-content-block__component--hidden-small-medium" data-functional-selector="details-kahoot-statistics">
                            <li className="details-kahoot-statistics__item"><span className="details-kahoot-statistics__number">50</span><span className="details-kahoot-statistics__text">favorites</span></li>
                            <li className="details-kahoot-statistics__item"><span className="details-kahoot-statistics__number">4.5k</span><span className="details-kahoot-statistics__text">plays</span></li>
                            <li className="details-kahoot-statistics__item"><span className="details-kahoot-statistics__number">45.3k</span><span className="details-kahoot-statistics__text">players</span></li>
                        </ul>
                        <span className="details-content-block__component--hidden-small-medium">
                            <a className="kahoot-creator details-kahoot-details__kahoot-creator" href="/profile/KahootStudio">
                                <div className="kahoot-creator__avatar" style={{backgroundImage: `url(&https://images.kahoot.it/p/9a88e164-a9d7-4868-bacf-67bb9a99751a/130x130/0x0:400x400)`}}></div>
                                <span className="kahoot-creator__text">KahootStudio</span>
                            </a>
                            <div className="created-time">
                                Created 26 days ago
                            </div>
                        </span>
                        <span className="details-content-block__component">
                            <button type="button" role="button" data-functional-selector="button" className="text-button details-kahoot-description-toggle-button details-kahoot-description-toggle-button--is-visible-in-medium">
                            SHOW MORE
                            </button>
                        </span>
                        </div>
                        <div className="details-kahoot-share-link-wrapper">
                            <span className="details-kahoot-share-link-wrapper__share-text">Copy and share this playable link</span>
                            <span className="details-kahoot-share-link-wrapper__share-link">https://play.kahoot.it/#/k/48d0f730-ba84-4195-a1bd-996a276f1db1</span>
                        </div>
                    </div>
                </section>
            </div>
            <div className="question-list-and-resource-credits">
                <section data-functional-selector="question-list" className="question-list">
                    <header className="question-list__header">
                        <h1 className="question-list__heading">
                        Questions
                        <span className="question-list__num-questions">
                        (11)
                        </span>
                        </h1>
                        <button type="button" role="button" data-functional-selector="question-list__group-toggle" className="text-button question-list__group-toggle">
                        Show answers
                        </button>
                    </header>
                    <ol className="question-list__items">
                        <li data-functional-selector="question-list__item" className="question-list__item">
                        <div className="question">
                            <div className="question__main" aria-label="question 1">
                                <div className="question-media" data-functional-selector="question-media">
                                    <div className="question-media__text">
                                    <div className="question-media__text-inner-wrapper"><span className="question-media__number">Q1:</span><span>______ existed as an organisation for international cooperation after WWI, preceding UN.</span></div>
                                    </div>
                                    <div className="question-media__image" title="Mondadori Portfolio/Mondadori Portfolio/Getty Images">
                                    <div className="background-image" aria-label="Question image" role="img" style={{backgroundImage: `url(https://images-cdn.kahoot.it/e323956f-7868-4165-b2f3-10519d569fd6?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=181)`}}><span className="question-media__duration">30 sec</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                        <li data-functional-selector="question-list__item" className="question-list__item">
                        <div className="question">
                            <div className="question__main" aria-label="question 2">
                                <div className="question-media" data-functional-selector="question-media">
                                    <div className="question-media__text">
                                    <div className="question-media__text-inner-wrapper"><span className="question-media__number">Q2:</span><span>When did the United Nations come into existence?</span></div>
                                    </div>
                                    <div className="question-media__image" title="Phil Roeder/Moment/Getty Images">
                                    <div className="background-image" aria-label="Question image" role="img" style={{backgroundImage: `url(https://images-cdn.kahoot.it/be967d9d-a34f-4e16-a423-54900718db21?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=181)`}}><span className="question-media__duration">30 sec</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                        <li data-functional-selector="question-list__item" className="question-list__item">
                        <div className="question">
                            <div className="question__main" aria-label="question 11">
                                <div className="question-media" data-functional-selector="question-media">
                                    <div className="question-media__text">
                                    <div className="question-media__text-inner-wrapper"><span className="question-media__number">Q11:</span><span>Who is the current Secretary-General of the United Nations?</span></div>
                                    </div>
                                    <div className="question-media__image" title="Drew Angerer/Getty Images News/Getty Images">
                                    <div className="background-image" aria-label="Question image" role="img" style={{backgroundImage: `url(https://images-cdn.kahoot.it/3ec6e39f-60a5-420a-ad46-c66c8dc09d05?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=181)`}}><span className="question-media__duration">30 sec</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                    </ol>
                </section>
                <section className="kahoot-resources">
                    <header className="kahoot-resources__header">Resource credits</header>
                    <p className="kahoot-resources__body">Description:
                        <span className="kahoot-resources__main">@ Mariano Sayno / husayno.com/Moment/Getty Images</span>
                    </p>
                </section>
            </div>
        </main>
        );
    }
}