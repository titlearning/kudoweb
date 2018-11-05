import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import {ic_settings} from 'react-icons-kit/md/ic_settings'
import {helpCircle} from 'react-icons-kit/feather/helpCircle'


export class QuestionDetailHeader extends Component{

    constructor(props){
        super(props);

        this.state = {
            redirectCreateQuestion: false
        }
    }

    createQuestion = () => {
        this.setState({
            redirectCreateQuestion: true
        })
    }

    render(){
        var linkRedirect = `/question/create/${this.props.listQuestionId}`;
        if(this.state.redirectCreateQuestion) {
            return <Redirect to={linkRedirect} />
        }

        return(
            <header role="heading" className="layout__head">
                <div className="">
                    <nav id="top-menu-bar" className="base-top-bar top-bar" data-functional-selector="topbar">
                        <div className="top-bar__inner">
                            <button type="button" role="button" data-functional-selector="button" className="icon-button top-bar__menu">
                                <span className="icon-button__wrap">
                                    <span className="icon icon-button__icon">
                                        <svg className="icon__svg" data-functional-selector="icon" focusable="false">
                                            <use className="icon__use" href="#menu"></use>
                                        </svg>
                                    </span>
                                </span>
                            </button>
                            <button type="button" role="button" data-functional-selector="button" className="text-button kahoot-logo top-bar__logo"></button>
                            <ul className="list top-bar__main-links list--unordered list--inline">
                                <li className="list__item top-bar__main-links-item">
                                    <a className="media-link top-bar-link media-link--discover" data-functional-selector="discover-top-link" href="/">
                                        <span className="icon media-link__media top-bar-link__media">
                                            <svg className="icon__svg" data-functional-selector="icon" focusable="false">
                                                <use className="icon__use" href="#discover"></use>
                                            </svg>
                                        </span>
                                        <div className="media-link__text top-bar-link__text">Discover</div>
                                    </a>
                                </li>
                                <li className="list__item top-bar__main-links-item">
                                    <a className="media-link top-bar-link" data-functional-selector="kahoots-top-link" href="/kahoots">
                                        <span className="icon media-link__media top-bar-link__media">
                                            <svg className="icon__svg" data-functional-selector="icon" focusable="false">
                                                <use className="icon__use" href="#kahoots"></use>
                                            </svg>
                                        </span>
                                        <div className="media-link__text top-bar-link__text">Kahoots</div>
                                    </a>
                                </li>
                                <li className="list__item top-bar__main-links-item">
                                    <a className="media-link top-bar-link media-link--reports" data-functional-selector="reports-top-link" href="/reports">
                                        <span className="icon media-link__media top-bar-link__media">
                                            <svg className="icon__svg" data-functional-selector="icon" focusable="false">
                                                <use className="icon__use" href="#reports"></use>
                                            </svg>
                                        </span>
                                        <div className="media-link__text top-bar-link__text">Reports</div>
                                    </a>
                                </li>
                            </ul>
                            <div className="top-bar__actions">
                                <button type="button" role="button" data-functional-selector="button" className="icon-button top-bar__upgrade-now-button">
                                    <span className="icon-button__wrap">
                                        <span className="icon icon-button__icon icon--small">
                                            <svg className="icon__svg" data-functional-selector="icon" focusable="false">
                                                <use className="icon__use" href="#"></use>
                                            </svg>
                                        </span>
                                        <span className="icon-button__text">Upgrade now</span>
                                    </span>
                                </button>
                                <button type="button" role="button" data-functional-selector="button" className="icon-button top-bar__primary-button button button--white">
                                    <span className="icon-button__wrap">
                                        <span className="icon-button__text" onClick={this.createQuestion}>Create</span>
                                    </span>
                                </button>
                                <div className="top-bar__action-menu">
                                    <div aria-haspopup="true" className="action-menu top-bar-action-menu action-menu--static">
                                        <button type="button" role="button" data-functional-selector="action-menu__toggle" className="icon-button action-menu__icon-button">
                                            <span className="icon-button__wrap">
                                                <span className="icon icon-button__icon action-menu__toggle-icon top-bar-action-menu__icon top-bar-action-menu__icon--settings-menu">
                                                <Icon icon={ic_settings} size={25}/>
                                                </span>
                                                <div className="visibly-hidden" id="settings-menu__accessibility-description">Open the settings</div>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="top-bar__action-menu">
                                    <div aria-haspopup="true" className="action-menu top-bar-action-menu action-menu--static">
                                        <button type="button" role="button" data-functional-selector="action-menu__toggle" className="icon-button action-menu__icon-button">
                                            <span className="icon-button__wrap">
                                                <span className="icon icon-button__icon action-menu__toggle-icon top-bar-action-menu__icon top-bar-action-menu__icon--question-mark">
                                                <Icon icon={helpCircle} size={25}/>
                                                </span>
                                                <div className="visibly-hidden" id="question-mark__accessibility-description">Open support</div>
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