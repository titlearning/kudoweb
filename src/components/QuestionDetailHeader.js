import React, {Component} from 'react';
import { Image } from 'react-bootstrap';

export class QuestionDetailHeader extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <header role="heading" class="layout__head">
                <div class="">
                    <nav id="top-menu-bar" class="base-top-bar top-bar" data-functional-selector="topbar">
                        <div class="top-bar__inner">
                            <button type="button" role="button" data-functional-selector="button" class="icon-button top-bar__menu">
                                <span class="icon-button__wrap">
                                    <span class="icon icon-button__icon">
                                        <svg class="icon__svg" data-functional-selector="icon" focusable="false">
                                            <use class="icon__use" href="#menu"></use>
                                        </svg>
                                    </span>
                                </span>
                            </button>
                            <button type="button" role="button" data-functional-selector="button" class="text-button kahoot-logo top-bar__logo"></button>
                            <ul class="list top-bar__main-links list--unordered list--inline">
                                <li class="list__item top-bar__main-links-item">
                                    <a class="media-link top-bar-link media-link--discover" data-functional-selector="discover-top-link" href="/">
                                        <span class="icon media-link__media top-bar-link__media">
                                            <svg class="icon__svg" data-functional-selector="icon" focusable="false">
                                                <use class="icon__use" href="#discover"></use>
                                            </svg>
                                        </span>
                                        <div class="media-link__text top-bar-link__text">Discover</div>
                                    </a>
                                </li>
                                <li class="list__item top-bar__main-links-item">
                                    <a class="media-link top-bar-link" data-functional-selector="kahoots-top-link" href="/kahoots">
                                        <span class="icon media-link__media top-bar-link__media">
                                            <svg class="icon__svg" data-functional-selector="icon" focusable="false">
                                                <use class="icon__use" href="#kahoots"></use>
                                            </svg>
                                        </span>
                                        <div class="media-link__text top-bar-link__text">Kahoots</div>
                                    </a>
                                </li>
                                <li class="list__item top-bar__main-links-item">
                                    <a class="media-link top-bar-link media-link--reports" data-functional-selector="reports-top-link" href="/reports">
                                        <span class="icon media-link__media top-bar-link__media">
                                            <svg class="icon__svg" data-functional-selector="icon" focusable="false">
                                                <use class="icon__use" href="#reports"></use>
                                            </svg>
                                        </span>
                                        <div class="media-link__text top-bar-link__text">Reports</div>
                                    </a>
                                </li>
                            </ul>
                            <div class="top-bar__actions">
                                <button type="button" role="button" data-functional-selector="button" class="icon-button top-bar__upgrade-now-button">
                                    <span class="icon-button__wrap">
                                        <span class="icon icon-button__icon icon--small">
                                            <svg class="icon__svg" data-functional-selector="icon" focusable="false">
                                                <use class="icon__use" href="#"></use>
                                            </svg>
                                        </span>
                                        <span class="icon-button__text">Upgrade now</span>
                                    </span>
                                </button>
                                <button type="button" role="button" data-functional-selector="button" class="icon-button top-bar__primary-button button button--white">
                                    <span class="icon-button__wrap">
                                        <span class="icon-button__text">Create</span>
                                    </span>
                                </button>
                                <div class="top-bar__action-menu">
                                    <div aria-haspopup="true" class="action-menu top-bar-action-menu action-menu--static">
                                        <button type="button" role="button" data-functional-selector="action-menu__toggle" class="icon-button action-menu__icon-button">
                                            <span class="icon-button__wrap">
                                                <span class="icon icon-button__icon action-menu__toggle-icon top-bar-action-menu__icon top-bar-action-menu__icon--settings-menu">
                                                    <img src={require('../images/setting.png')} className="img-responsive"/>
                                                </span>
                                                <div class="visibly-hidden" id="settings-menu__accessibility-description">Open the settings</div>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div class="top-bar__action-menu">
                                    <div aria-haspopup="true" class="action-menu top-bar-action-menu action-menu--static">
                                        <button type="button" role="button" data-functional-selector="action-menu__toggle" class="icon-button action-menu__icon-button">
                                            <span class="icon-button__wrap">
                                                <span class="icon icon-button__icon action-menu__toggle-icon top-bar-action-menu__icon top-bar-action-menu__icon--question-mark">
                                                    <svg class="icon__svg" data-functional-selector="icon" focusable="false">
                                                        <use class="icon__use" href="#question-mark"></use>
                                                    </svg>
                                                </span>
                                                <div class="visibly-hidden" id="question-mark__accessibility-description">Open support</div>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}