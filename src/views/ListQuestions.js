import React, {Component} from 'react'
import {withRouter} from 'react-router'

class ListQuestions extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="">
                    <nav id="top-menu-bar" className="base-top-bar top-bar" data-functional-selector="topbar">
                        <div className="top-bar__inner">
                            <button type="button" role="button" data-functional-selector="button"
                                    className="icon-button top-bar__menu"><span className="icon-button__wrap"><span
                                className="icon icon-button__icon"><svg className="icon__svg"
                                                                        data-functional-selector="icon"
                                                                        focusable="false"><use
                                className="icon__use"></use></svg></span></span></button>
                            <button type="button" role="button" data-functional-selector="button"
                                    className="text-button kahoot-logo top-bar__logo">Kahoot!
                            </button>
                            <ul className="list top-bar__main-links list--unordered list--inline">
                                <li className="list__item top-bar__main-links-item"><a
                                    className="media-link top-bar-link media-link--discover top-bar-link--active"
                                    data-functional-selector="discover-top-link" href="/"><span
                                    className="icon media-link__media top-bar-link__media"><svg className="icon__svg"
                                                                                                data-functional-selector="icon"
                                                                                                focusable="false"><use
                                    className="icon__use"></use></svg></span>
                                    <div className="media-link__text top-bar-link__text">Discover</div>
                                </a></li>
                                <li className="list__item top-bar__main-links-item"><a
                                    className="media-link top-bar-link"
                                    data-functional-selector="kahoots-top-link"
                                    href="/kahoots"><span
                                    className="icon media-link__media top-bar-link__media"><svg className="icon__svg"
                                                                                                data-functional-selector="icon"
                                                                                                focusable="false"><use
                                    className="icon__use"></use></svg></span>
                                    <div className="media-link__text top-bar-link__text">Kahoots</div>
                                </a></li>
                                <li className="list__item top-bar__main-links-item"><a
                                    className="media-link top-bar-link media-link--reports"
                                    data-functional-selector="reports-top-link" href="/reports"><span
                                    className="icon media-link__media top-bar-link__media"><svg className="icon__svg"
                                                                                                data-functional-selector="icon"
                                                                                                focusable="false"><use
                                    className="icon__use"></use></svg></span>
                                    <div className="media-link__text top-bar-link__text">Reports</div>
                                </a></li>
                            </ul>
                            <div className="top-bar__actions">
                                <button type="button" role="button" data-functional-selector="button"
                                        className="icon-button top-bar__upgrade-now-button"><span
                                    className="icon-button__wrap"><span className="icon icon-button__icon icon--small"><svg
                                    className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                    className="icon__use"></use></svg></span><span
                                    className="icon-button__text">Upgrade now</span></span></button>
                                <button type="button" role="button" data-functional-selector="button"
                                        className="icon-button top-bar__primary-button button button--white"><span
                                    className="icon-button__wrap"><span className="icon icon-button__icon"><svg
                                    className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                    className="icon__use"></use></svg></span><span
                                    className="icon-button__text">Create</span></span></button>
                                <div className="top-bar__action-menu">
                                    <div aria-haspopup="true"
                                         className="action-menu top-bar-action-menu action-menu--static">
                                        <button type="button" role="button"
                                                data-functional-selector="action-menu__toggle"
                                                className="icon-button action-menu__icon-button"><span
                                            className="icon-button__wrap"><span
                                            className="icon icon-button__icon action-menu__toggle-icon top-bar-action-menu__icon top-bar-action-menu__icon--settings-menu"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use"></use></svg></span><div
                                            className="visibly-hidden" id="settings-menu__accessibility-description">Open the settings</div></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="top-bar__action-menu">
                                    <div aria-haspopup="true"
                                         className="action-menu top-bar-action-menu action-menu--static">
                                        <button type="button" role="button"
                                                data-functional-selector="action-menu__toggle"
                                                className="icon-button action-menu__icon-button"><span
                                            className="icon-button__wrap"><span
                                            className="icon icon-button__icon action-menu__toggle-icon top-bar-action-menu__icon top-bar-action-menu__icon--question-mark"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use"></use></svg></span><div
                                            className="visibly-hidden" id="question-mark__accessibility-description">Open support</div></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <main role="main" className="layout__body layout__body--discover">

                    <div className="backbone-components">
                        <div className="discover-header">
                            <div className="container discover-header__container">
                                <div className="discover-header__search-input-wrap">
                                    <div>
                                        <div className="search-box" data-functional-selector="search-box">
                                            <div className="react-autosuggest__container">
                                                <div><input type="text"
                                                            data-functional-selector="search-box__input-field"
                                                            placeholder="Find me a kahoot about..." value=""
                                                            autoComplete="off" role="combobox" aria-autocomplete="list"
                                                            aria-owns="react-autowhatever-1" aria-expanded="false"
                                                            className="search-field__input"/>
                                                    <button type="button" role="button"
                                                            data-functional-selector="search-box__search-button"
                                                            className="icon-button search-box__button"
                                                            aria-label="Search"><span
                                                        className="icon-button__wrap"><span
                                                        className="icon icon-button__icon search-box__icon"><svg
                                                        className="icon__svg" data-functional-selector="icon"
                                                        focusable="false"><use className="icon__use"
                                                    ></use></svg></span></span>
                                                    </button>
                                                </div>
                                                <div id="react-autowhatever-1"
                                                     className="react-autosuggest__suggestions-container"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="backbone-components"
                         style="max-width: 73.125rem; margin: -1.25rem auto 1.25rem; padding: 0px 4rem;"><a
                        aria-label="Save time, collaborate on kahoots, unlock advanced reports and increase your productivity with Kahoot! Pro for schools - our new offering for teachers and schools!"
                        href="https://create.kahoot.it/go/register/pricing-schools/"
                        className="campaign-image-banner discover-partner-space__anchor"
                        style="background-image: url(&quot;https://s3-eu-west-1.amazonaws.com/kahoot-files/email-assets/Banners/K-forSchools_Halloween.png&quot;);"></a>
                    </div>
                    <div style="max-width: 73.125em; margin: 0px auto;">
                        <section className="discover-group" data-functional-selector="discover-group"
                                 style="min-height: 1px;">
                            <header className="discover-group__header"><h1 className="discover-group__title">Top
                                picks</h1>
                                <button type="button" role="button" data-functional-selector="button"
                                        className="text-button discover-group__link"
                                        aria-label="Open Top picks collection">See
                                    all
                                </button>
                            </header>
                            <div className="discover-group__wrap">
                                <div className="discover-group__title-card">
                                    <div className="card title-card"
                                         style="background-image: url(&quot;https://s3-eu-west-1.amazonaws.com/kahoot-files/email-assets/Banners/collectionbox/halloween/Halloween_TopPicks.png&quot;);">
                                        <h1 className="title-card__title">Top picks</h1>
                                        <button type="button" role="button" data-functional-selector="button"
                                                className="button button--cta-register button--full-width title-card__button"
                                                aria-label="Open Top picks collection">See
                                            collection
                                        </button>
                                    </div>
                                </div>
                                <section data-functional-selector="carousel"
                                         className="carousel discover-group__carousel">
                                    <div className="carousel__button-wrap carousel__button-wrap--previous">
                                        <button tabIndex="-1" disabled=""
                                                className="carousel__button carousel__button--hidden"
                                                data-functional-selector="carousel-button-previous"><span
                                            className="icon icon--rotate-180deg"><svg className="icon__svg"
                                                                                      data-functional-selector="icon"
                                                                                      focusable="false"><use
                                            className="icon__use"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__button-wrap carousel__button-wrap--next">
                                        <button tabIndex="-1" className="carousel__button"
                                                data-functional-selector="carousel-button-next"><span className="icon"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__content"
                                         style="margin-right: -8px; margin-left: -8px; clip-path: inset(0px 8px);">
                                        <ul data-functional-selector="carousel-list" className="carousel__list"
                                            style="transform: translate3d(0%, 0px, 0px);">
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/bc8ae6ba-8853-4d1b-8121-134d99b37e5d?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/halloween-around-the-world/fe353248-6492-4f76-97d5-240b2c0d71bc"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/halloween-around-the-world/fe353248-6492-4f76-97d5-240b2c0d71bc"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/halloween-around-the-world/fe353248-6492-4f76-97d5-240b2c0d71bc"
                                                                        data-functional-selector="kahoot-card__title-link">Halloween
                                                                        around the world 👻🌎</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 26 days ago</span><span
                                                                            className="kahoot-card__information-mobile">26 days ago</span></span><b> •
                                                                            59k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/66a89a13-13ff-49cd-ae96-f8a51dd0cb85?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>5<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/explorer-magazine-extreme-animals/a8412292-da22-4411-bc52-339d08ab31a4"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/explorer-magazine-extreme-animals/a8412292-da22-4411-bc52-339d08ab31a4"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/explorer-magazine-extreme-animals/a8412292-da22-4411-bc52-339d08ab31a4"
                                                                        data-functional-selector="kahoot-card__title-link">Explorer
                                                                        Magazine —&nbsp;Extreme Animals</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            46.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/9f358efe-5235-42ca-98f6-9617efb5fe57?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>15<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/halloween-superstitions-traditions/edddd38d-14d9-4025-b0b5-8504d6eab174"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/halloween-superstitions-traditions/edddd38d-14d9-4025-b0b5-8504d6eab174"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/halloween-superstitions-traditions/edddd38d-14d9-4025-b0b5-8504d6eab174"
                                                                        data-functional-selector="kahoot-card__title-link">Halloween
                                                                        Superstitions &amp; Traditions 🎃</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            174.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/History_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/8c15addf-3d3c-4900-a9ab-eee165dbc54c_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">History_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/3725a8d3-0687-4004-9e44-fa0a90f4ac35?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>13<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/what-can-we-do-about-climate-change/c5a60f10-383e-4b49-81bc-ad16cfba1b04"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/what-can-we-do-about-climate-change/c5a60f10-383e-4b49-81bc-ad16cfba1b04"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/what-can-we-do-about-climate-change/c5a60f10-383e-4b49-81bc-ad16cfba1b04"
                                                                        data-functional-selector="kahoot-card__title-link">What
                                                                        Can We Do About Climate Change?</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            18.1k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Columbia_University"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/238be564-81e4-41e1-a4cf-597896303b17_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Columbia_University</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/a8d42060-e638-4a72-bfc5-b1b59bb14fd0?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/national-geographic-geobee-official-weird-but-true/613880f4-a4a0-406e-9ccf-6243ebe3b8df"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/national-geographic-geobee-official-weird-but-true/613880f4-a4a0-406e-9ccf-6243ebe3b8df"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/national-geographic-geobee-official-weird-but-true/613880f4-a4a0-406e-9ccf-6243ebe3b8df"
                                                                        data-functional-selector="kahoot-card__title-link">National
                                                                        Geographic GeoBee (Official) Weird But True!</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            28.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/05903b29-6196-4fd5-8db2-cb3971b962f2?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>16<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/earth-space-science-earth-s-place-in-the-solar-system/4e195c37-66d7-448b-82ff-85260ac31d92"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/earth-space-science-earth-s-place-in-the-solar-system/4e195c37-66d7-448b-82ff-85260ac31d92"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/earth-space-science-earth-s-place-in-the-solar-system/4e195c37-66d7-448b-82ff-85260ac31d92"
                                                                        data-functional-selector="kahoot-card__title-link">Earth-Space
                                                                        Science: Earth's Place in the Solar System</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 9 months ago</span><span
                                                                            className="kahoot-card__information-mobile">9 months ago</span></span><b> •
                                                                            31k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Science_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/cdcde9ef-bdd2-4cce-ae1a-c5fd12fe7e15_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Science_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/5e7e7c3f-bee5-4232-af4b-8b65cb125b24?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/national-geographic-geobee-official-culture-connections/10655d04-5c17-4963-b71d-17510fd0c065"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/national-geographic-geobee-official-culture-connections/10655d04-5c17-4963-b71d-17510fd0c065"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/national-geographic-geobee-official-culture-connections/10655d04-5c17-4963-b71d-17510fd0c065"
                                                                        data-functional-selector="kahoot-card__title-link">National
                                                                        Geographic GeoBee (Official) Culture
                                                                        Connections</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            31.7k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/97bddf69-318b-4882-8d77-1b0c8d871bd8?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>8<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/world-space-week/6df02172-e29c-4c63-93bb-283326320ca6"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/world-space-week/6df02172-e29c-4c63-93bb-283326320ca6"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/world-space-week/6df02172-e29c-4c63-93bb-283326320ca6"
                                                                        data-functional-selector="kahoot-card__title-link">World
                                                                        Space Week 🚀</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 19 days ago</span><span
                                                                            className="kahoot-card__information-mobile">19 days ago</span></span><b> •
                                                                            49.6k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/f1872535-8abe-4bb2-9cde-3ff1e0689f66?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>13<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/how-does-climate-change-impact-ecosystems/cefbcce7-201e-4c76-9fac-d79544e48b0b"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/how-does-climate-change-impact-ecosystems/cefbcce7-201e-4c76-9fac-d79544e48b0b"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/how-does-climate-change-impact-ecosystems/cefbcce7-201e-4c76-9fac-d79544e48b0b"
                                                                        data-functional-selector="kahoot-card__title-link">How
                                                                        Does Climate Change Impact Ecosystems? </a></h1>
                                                                    </div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            17.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Columbia_University"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/238be564-81e4-41e1-a4cf-597896303b17_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Columbia_University</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/ea898ee4-513d-41a1-8cf6-ee8431fd0141?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>11<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/celebrate-world-teachers-day/5525e634-7181-4165-a2f7-2b5261c9c626"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/celebrate-world-teachers-day/5525e634-7181-4165-a2f7-2b5261c9c626"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/celebrate-world-teachers-day/5525e634-7181-4165-a2f7-2b5261c9c626"
                                                                        data-functional-selector="kahoot-card__title-link">Celebrate
                                                                        World Teachers' Day!</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 month ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 month ago</span></span><b> •
                                                                            23.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className="discover-group" data-functional-selector="discover-group"
                                 style="min-height: 1px;">
                            <header className="discover-group__header"><h1 className="discover-group__title">Nat Geo
                                Education</h1>
                                <button type="button" role="button" data-functional-selector="button"
                                        className="text-button discover-group__link"
                                        aria-label="Open Nat Geo Education collection">See
                                    all
                                </button>
                            </header>
                            <div className="discover-group__wrap">
                                <div className="discover-group__title-card">
                                    <div className="card title-card"
                                         style="background-image: url(&quot;https://s3-eu-west-1.amazonaws.com/kahoot-files/email-assets/Banners/collectionbox/Collection+card+NatGeo.png&quot;);">
                                        <h1 className="title-card__title">Nat Geo Education</h1>
                                        <button type="button" role="button" data-functional-selector="button"
                                                className="button button--cta-register button--full-width title-card__button"
                                                aria-label="Open Nat Geo Education collection">See
                                            collection
                                        </button>
                                    </div>
                                </div>
                                <section data-functional-selector="carousel"
                                         className="carousel discover-group__carousel">
                                    <div className="carousel__button-wrap carousel__button-wrap--previous">
                                        <button tabIndex="-1" disabled=""
                                                className="carousel__button carousel__button--hidden"
                                                data-functional-selector="carousel-button-previous"><span
                                            className="icon icon--rotate-180deg"><svg className="icon__svg"
                                                                                      data-functional-selector="icon"
                                                                                      focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__button-wrap carousel__button-wrap--next">
                                        <button tabIndex="-1" className="carousel__button"
                                                data-functional-selector="carousel-button-next"><span className="icon"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__content"
                                         style="margin-right: -8px; margin-left: -8px; clip-path: inset(0px 8px);">
                                        <ul data-functional-selector="carousel-list" className="carousel__list"
                                            style="transform: translate3d(0%, 0px, 0px);">
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/eaa5050c-3a50-44b7-af1b-394ad3989d11?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>5><span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/explorer-magazine-lord-of-the-wings/c034560d-53f5-4b7b-beb5-5739aa0c5d0b"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/explorer-magazine-lord-of-the-wings/c034560d-53f5-4b7b-beb5-5739aa0c5d0b"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/explorer-magazine-lord-of-the-wings/c034560d-53f5-4b7b-beb5-5739aa0c5d0b"
                                                                        data-functional-selector="kahoot-card__title-link">Explorer
                                                                        Magazine —&nbsp;Lord of the Wings</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 9 months ago</span><span
                                                                            className="kahoot-card__information-mobile">9 months ago</span></span><b> •
                                                                            402 plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/09447aba-9ead-4f0e-ae5b-0f18c1343ec4?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/national-geographic-geobee-official-travelin-tunes/5aa7c6e6-4705-430b-a876-46ae5889e6c2"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/national-geographic-geobee-official-travelin-tunes/5aa7c6e6-4705-430b-a876-46ae5889e6c2"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/national-geographic-geobee-official-travelin-tunes/5aa7c6e6-4705-430b-a876-46ae5889e6c2"
                                                                        data-functional-selector="kahoot-card__title-link">National
                                                                        Geographic GeoBee (Official) Travelin' Tunes</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            8.4k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/537dee48-6afe-47e0-b920-63dffd313f70?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/freshwater/ce2eb53e-5cc7-447c-b5bc-f34a16bf085e"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/freshwater/ce2eb53e-5cc7-447c-b5bc-f34a16bf085e"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/freshwater/ce2eb53e-5cc7-447c-b5bc-f34a16bf085e"
                                                                        data-functional-selector="kahoot-card__title-link">Freshwater</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 5 months ago</span><span
                                                                            className="kahoot-card__information-mobile">5 months ago</span></span><b> •
                                                                            1.3k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/82579f34-7a62-4d2e-89ec-07b738798150?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/national-geographic-geobee-official-odd-one-out/c0d6bf60-fa0d-4133-88ab-8951b8876fea"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/national-geographic-geobee-official-odd-one-out/c0d6bf60-fa0d-4133-88ab-8951b8876fea"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/national-geographic-geobee-official-odd-one-out/c0d6bf60-fa0d-4133-88ab-8951b8876fea"
                                                                        data-functional-selector="kahoot-card__title-link">National
                                                                        Geographic GeoBee (Official) Odd One Out</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            1.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/5e7e7c3f-bee5-4232-af4b-8b65cb125b24?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/national-geographic-geobee-official-culture-connections/10655d04-5c17-4963-b71d-17510fd0c065"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/national-geographic-geobee-official-culture-connections/10655d04-5c17-4963-b71d-17510fd0c065"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/national-geographic-geobee-official-culture-connections/10655d04-5c17-4963-b71d-17510fd0c065"
                                                                        data-functional-selector="kahoot-card__title-link">National
                                                                        Geographic GeoBee (Official) Culture
                                                                        Connections</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            31.7k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/1137802f-ed7d-45fb-b28e-669a82871909?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/national-geographic-geobee-official-state-birds/dd2b9d39-3cdc-4e8b-a599-09767ae83087"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/national-geographic-geobee-official-state-birds/dd2b9d39-3cdc-4e8b-a599-09767ae83087"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/national-geographic-geobee-official-state-birds/dd2b9d39-3cdc-4e8b-a599-09767ae83087"
                                                                        data-functional-selector="kahoot-card__title-link">National
                                                                        Geographic GeoBee (Official) State Birds</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            594 plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/9dc7790b-47c7-4f61-b896-c3b83d60ab92?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>5<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/national-geographic-geobee-official-volcanoes-erupt/9cc8bde3-5d8b-40d5-b8c8-46382cd62d8d"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/national-geographic-geobee-official-volcanoes-erupt/9cc8bde3-5d8b-40d5-b8c8-46382cd62d8d"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/national-geographic-geobee-official-volcanoes-erupt/9cc8bde3-5d8b-40d5-b8c8-46382cd62d8d"
                                                                        data-functional-selector="kahoot-card__title-link">National
                                                                        Geographic GeoBee (Official) Volcanoes
                                                                        Erupt!</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 9 months ago</span><span
                                                                            className="kahoot-card__information-mobile">9 months ago</span></span><b> •
                                                                            304 plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/a8d42060-e638-4a72-bfc5-b1b59bb14fd0?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/national-geographic-geobee-official-weird-but-true/613880f4-a4a0-406e-9ccf-6243ebe3b8df"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/national-geographic-geobee-official-weird-but-true/613880f4-a4a0-406e-9ccf-6243ebe3b8df"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/national-geographic-geobee-official-weird-but-true/613880f4-a4a0-406e-9ccf-6243ebe3b8df"
                                                                        data-functional-selector="kahoot-card__title-link">National
                                                                        Geographic GeoBee (Official) Weird But True!</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            28.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/744e3c8e-6e5e-4ef2-9013-de6189e4559d?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/national-geographic-geobee-official-saving-our-past/7a5fb79a-9e19-4486-aad8-ea7eacacb153"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/national-geographic-geobee-official-saving-our-past/7a5fb79a-9e19-4486-aad8-ea7eacacb153"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/national-geographic-geobee-official-saving-our-past/7a5fb79a-9e19-4486-aad8-ea7eacacb153"
                                                                        data-functional-selector="kahoot-card__title-link">National
                                                                        Geographic GeoBee (Official) Saving our Past</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            9.6k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/c67c1935-05da-48aa-9324-a28e49b56595?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/national-geographic-geobee-official-history-happens/12e0bbe4-1714-46a3-8828-48e69c2b1e43"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/national-geographic-geobee-official-history-happens/12e0bbe4-1714-46a3-8828-48e69c2b1e43"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/national-geographic-geobee-official-history-happens/12e0bbe4-1714-46a3-8828-48e69c2b1e43"
                                                                        data-functional-selector="kahoot-card__title-link">National
                                                                        Geographic GeoBee (Official) History Happens</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            9.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/NationalGeographic"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/571b7de3-ca49-4c3d-a8a7-4b1e655bfeb1_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">NationalGeographic</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className="discover-group" data-functional-selector="discover-group"
                                 style="min-height: 1px;">
                            <header className="discover-group__header"><h1 className="discover-group__title">Math</h1>
                                <button type="button" role="button" data-functional-selector="button"
                                        className="text-button discover-group__link"
                                        aria-label="Open Math collection">See
                                    all
                                </button>
                            </header>
                            <div className="discover-group__wrap">
                                <div className="discover-group__title-card">
                                    <div className="card title-card"
                                         style="background-image: url(&quot;https://s3-eu-west-1.amazonaws.com/kahoot-files/email-assets/Banners/collectionbox/halloween/Halloween_Math.png&quot;);">
                                        <h1 className="title-card__title">Math</h1>
                                        <button type="button" role="button" data-functional-selector="button"
                                                className="button button--cta-register button--full-width title-card__button"
                                                aria-label="Open Math collection">See
                                            collection
                                        </button>
                                    </div>
                                </div>
                                <section data-functional-selector="carousel"
                                         className="carousel discover-group__carousel">
                                    <div className="carousel__button-wrap carousel__button-wrap--previous">
                                        <button tabIndex="-1" disabled=""
                                                className="carousel__button carousel__button--hidden"
                                                data-functional-selector="carousel-button-previous"><span
                                            className="icon icon--rotate-180deg"><svg className="icon__svg"
                                                                                      data-functional-selector="icon"
                                                                                      focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__button-wrap carousel__button-wrap--next">
                                        <button tabIndex="-1" className="carousel__button"
                                                data-functional-selector="carousel-button-next"><span className="icon"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__content"
                                         style="margin-right: -8px; margin-left: -8px; clip-path: inset(0px 8px);">
                                        <ul data-functional-selector="carousel-list" className="carousel__list"
                                            style="transform: translate3d(0%, 0px, 0px);">
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/fffb1b9e-1cde-4d0c-af6d-32730234aca8?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/forget-the-ghosts-beware-of-math/ef467455-dace-4f86-92ed-cf8f35902576"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/forget-the-ghosts-beware-of-math/ef467455-dace-4f86-92ed-cf8f35902576"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/forget-the-ghosts-beware-of-math/ef467455-dace-4f86-92ed-cf8f35902576"
                                                                        data-functional-selector="kahoot-card__title-link">Forget
                                                                        The Ghosts 👻, Beware Of Math! 😱</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 18 days ago</span><span
                                                                            className="kahoot-card__information-mobile">18 days ago</span></span><b> •
                                                                            16.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Math_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/167787a0-a288-48a5-9368-512741fea956_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Math_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/a20a4e2c-13b3-4866-87ce-72d5e7b7e6ea?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>11<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/spooooky-math-situations/86f83e42-775a-45f9-b9dd-150391e286b1"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/spooooky-math-situations/86f83e42-775a-45f9-b9dd-150391e286b1"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/spooooky-math-situations/86f83e42-775a-45f9-b9dd-150391e286b1"
                                                                        data-functional-selector="kahoot-card__title-link">Spoo👻ooky
                                                                        Math Situations</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            63.8k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Math_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/167787a0-a288-48a5-9368-512741fea956_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Math_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/8b7325da-9e38-4fce-ab3e-61163f30abe7?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>8<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/math-terrifying-brain-teasers/36acd14d-1235-4bf8-bf80-dbeedc4d12e4"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/math-terrifying-brain-teasers/36acd14d-1235-4bf8-bf80-dbeedc4d12e4"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/math-terrifying-brain-teasers/36acd14d-1235-4bf8-bf80-dbeedc4d12e4"
                                                                        data-functional-selector="kahoot-card__title-link">Math
                                                                        - Terrifying Brain Teasers 😱🎃</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            73.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Math_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/167787a0-a288-48a5-9368-512741fea956_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Math_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/5f9b610b-fbfc-44e4-b07a-6f9f0f89a625?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>11<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/common-mistakes-in-math/a6c098ca-1ab7-4316-9a8d-b761e97df27e"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/common-mistakes-in-math/a6c098ca-1ab7-4316-9a8d-b761e97df27e"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/common-mistakes-in-math/a6c098ca-1ab7-4316-9a8d-b761e97df27e"
                                                                        data-functional-selector="kahoot-card__title-link">Common
                                                                        Mistakes in Math</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            20.7k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Math_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/167787a0-a288-48a5-9368-512741fea956_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Math_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/f4a410e7-7177-4cae-baa6-fc55a390218d?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>24<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/math-probability-back-to-school/6201702f-fd2b-4540-a953-46c1041c1523"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/math-probability-back-to-school/6201702f-fd2b-4540-a953-46c1041c1523"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/math-probability-back-to-school/6201702f-fd2b-4540-a953-46c1041c1523"
                                                                        data-functional-selector="kahoot-card__title-link">Math:
                                                                        Probability Back-to-School</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            7.1k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Math_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/167787a0-a288-48a5-9368-512741fea956_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Math_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/b7e0f6c4-62b3-40f6-9a8a-0c602ccb046f?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>17<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/math-scientific-notation-back-to-school/d49f277e-3a51-4ad8-9099-e78cf03371c3"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/math-scientific-notation-back-to-school/d49f277e-3a51-4ad8-9099-e78cf03371c3"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/math-scientific-notation-back-to-school/d49f277e-3a51-4ad8-9099-e78cf03371c3"
                                                                        data-functional-selector="kahoot-card__title-link">Math:
                                                                        Scientific Notation Back-to-School</a></h1>
                                                                    </div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 4 months ago</span><span
                                                                            className="kahoot-card__information-mobile">4 months ago</span></span><b> •
                                                                            2.3k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Math_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/167787a0-a288-48a5-9368-512741fea956_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Math_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/873765e8-938d-4704-abe0-8c63dbe21325?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>23<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/math-distributive-property-back-to-school/eafc6258-072e-4375-99c0-2f4f5e422469"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/math-distributive-property-back-to-school/eafc6258-072e-4375-99c0-2f4f5e422469"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/math-distributive-property-back-to-school/eafc6258-072e-4375-99c0-2f4f5e422469"
                                                                        data-functional-selector="kahoot-card__title-link">Math:
                                                                        Distributive Property Back-to-School</a></h1>
                                                                    </div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 4 months ago</span><span
                                                                            className="kahoot-card__information-mobile">4 months ago</span></span><b> •
                                                                            27.1k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Math_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/167787a0-a288-48a5-9368-512741fea956_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Math_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/01b21182-f5d6-4890-8b73-362852e0d8b5?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>21<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/math-number-properties-back-to-school/740734b3-be68-4fd5-97f2-a35075d88882"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/math-number-properties-back-to-school/740734b3-be68-4fd5-97f2-a35075d88882"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/math-number-properties-back-to-school/740734b3-be68-4fd5-97f2-a35075d88882"
                                                                        data-functional-selector="kahoot-card__title-link">Math:
                                                                        Number Properties Back-to-School</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 4 months ago</span><span
                                                                            className="kahoot-card__information-mobile">4 months ago</span></span><b> •
                                                                            3.3k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Math_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/167787a0-a288-48a5-9368-512741fea956_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Math_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/e9469049-c86c-4ded-9542-4dafede70ff3?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>21<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/math-order-of-operations-back-to-school/4f3aac1c-de25-418b-8578-ef84dadccf8a"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/math-order-of-operations-back-to-school/4f3aac1c-de25-418b-8578-ef84dadccf8a"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/math-order-of-operations-back-to-school/4f3aac1c-de25-418b-8578-ef84dadccf8a"
                                                                        data-functional-selector="kahoot-card__title-link">Math:
                                                                        Order of Operations Back-to-School</a></h1>
                                                                    </div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 4 months ago</span><span
                                                                            className="kahoot-card__information-mobile">4 months ago</span></span><b> •
                                                                            34.6k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Math_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/167787a0-a288-48a5-9368-512741fea956_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Math_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/d96951c7-3c6b-4f46-95a5-fa284d955ea5?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>25<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/algebra-exponential-refresher-review/8a15335c-d807-4911-845f-cb8ea2922106"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/algebra-exponential-refresher-review/8a15335c-d807-4911-845f-cb8ea2922106"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/algebra-exponential-refresher-review/8a15335c-d807-4911-845f-cb8ea2922106"
                                                                        data-functional-selector="kahoot-card__title-link">Algebra:
                                                                        Exponential Refresher - REVIEW</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 6 months ago</span><span
                                                                            className="kahoot-card__information-mobile">6 months ago</span></span><b> •
                                                                            25.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Math_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/167787a0-a288-48a5-9368-512741fea956_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Math_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className="discover-group" data-functional-selector="discover-group"
                                 style="min-height: 1px;">
                            <header className="discover-group__header"><h1
                                className="discover-group__title">History</h1>
                                <button type="button" role="button" data-functional-selector="button"
                                        className="text-button discover-group__link"
                                        aria-label="Open History collection">See
                                    all
                                </button>
                            </header>
                            <div className="discover-group__wrap">
                                <div className="discover-group__title-card">
                                    <div className="card title-card"
                                         style="background-image: url(&quot;https://s3-eu-west-1.amazonaws.com/kahoot-files/email-assets/Banners/collectionbox/halloween/Halloween_History.png&quot;);">
                                        <h1 className="title-card__title">History</h1>
                                        <button type="button" role="button" data-functional-selector="button"
                                                className="button button--cta-register button--full-width title-card__button"
                                                aria-label="Open History collection">See
                                            collection
                                        </button>
                                    </div>
                                </div>
                                <section data-functional-selector="carousel"
                                         className="carousel discover-group__carousel">
                                    <div className="carousel__button-wrap carousel__button-wrap--previous">
                                        <button tabIndex="-1" disabled=""
                                                className="carousel__button carousel__button--hidden"
                                                data-functional-selector="carousel-button-previous"><span
                                            className="icon icon--rotate-180deg"><svg className="icon__svg"
                                                                                      data-functional-selector="icon"
                                                                                      focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__button-wrap carousel__button-wrap--next">
                                        <button tabIndex="-1" className="carousel__button"
                                                data-functional-selector="carousel-button-next"><span className="icon"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__content"
                                         style="margin-right: -8px; margin-left: -8px; clip-path: inset(0px 8px);">
                                        <ul data-functional-selector="carousel-list" className="carousel__list"
                                            style="transform: translate3d(0%, 0px, 0px);">
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/64636e33-0b0e-4ae6-84c3-afda15d080ee?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>15<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/the-ancient-origins-of-halloween/16e16d2a-4f04-49a7-a9dd-a0f97bf2e26b"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/the-ancient-origins-of-halloween/16e16d2a-4f04-49a7-a9dd-a0f97bf2e26b"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/the-ancient-origins-of-halloween/16e16d2a-4f04-49a7-a9dd-a0f97bf2e26b"
                                                                        data-functional-selector="kahoot-card__title-link">The
                                                                        Ancient Origins of Halloween 🕷🕸</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            74.7k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/History_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/8c15addf-3d3c-4900-a9ab-eee165dbc54c_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">History_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/9f358efe-5235-42ca-98f6-9617efb5fe57?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>15<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/halloween-superstitions-traditions/edddd38d-14d9-4025-b0b5-8504d6eab174"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/halloween-superstitions-traditions/edddd38d-14d9-4025-b0b5-8504d6eab174"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/halloween-superstitions-traditions/edddd38d-14d9-4025-b0b5-8504d6eab174"
                                                                        data-functional-selector="kahoot-card__title-link">Halloween
                                                                        Superstitions &amp; Traditions 🎃</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            174.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/History_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/8c15addf-3d3c-4900-a9ab-eee165dbc54c_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">History_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/c51c4ab8-5b49-4615-a113-573bdbb9d39f?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/the-frightening-history-of-halloween-in-america/68610ce9-5db8-4bfb-92c1-9d43d37c7746"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/the-frightening-history-of-halloween-in-america/68610ce9-5db8-4bfb-92c1-9d43d37c7746"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/the-frightening-history-of-halloween-in-america/68610ce9-5db8-4bfb-92c1-9d43d37c7746"
                                                                        data-functional-selector="kahoot-card__title-link">The
                                                                        frightening History of Halloween in America
                                                                        👻</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            33k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/History_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/8c15addf-3d3c-4900-a9ab-eee165dbc54c_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">History_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/c18c3c9c-65a8-49a3-94fe-d566e84ce014?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>14<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/ancient-greece-the-golden-age-of-athens/0b87921c-801b-4a04-9a09-6d2cbe83ca00"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/ancient-greece-the-golden-age-of-athens/0b87921c-801b-4a04-9a09-6d2cbe83ca00"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/ancient-greece-the-golden-age-of-athens/0b87921c-801b-4a04-9a09-6d2cbe83ca00"
                                                                        data-functional-selector="kahoot-card__title-link">Ancient
                                                                        Greece: The Golden Age of Athens</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            1.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/History_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/8c15addf-3d3c-4900-a9ab-eee165dbc54c_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">History_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/d4552429-85ed-42b8-afd3-7a67f9026153?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/ancient-greece-the-empire-of-alexander-the-great/adcdf6b4-7af5-4be1-a65b-7991b7fffcd2"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/ancient-greece-the-empire-of-alexander-the-great/adcdf6b4-7af5-4be1-a65b-7991b7fffcd2"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/ancient-greece-the-empire-of-alexander-the-great/adcdf6b4-7af5-4be1-a65b-7991b7fffcd2"
                                                                        data-functional-selector="kahoot-card__title-link">Ancient
                                                                        Greece: The Empire of Alexander the Great</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            1.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/History_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/8c15addf-3d3c-4900-a9ab-eee165dbc54c_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">History_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/fc1282dd-d2ee-4531-b6ee-df50de447a0b?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>16<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/world-history-world-war-i/b0c57162-18ff-4faa-a79a-e0de132925e5"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/world-history-world-war-i/b0c57162-18ff-4faa-a79a-e0de132925e5"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/world-history-world-war-i/b0c57162-18ff-4faa-a79a-e0de132925e5"
                                                                        data-functional-selector="kahoot-card__title-link">World
                                                                        History: World War I</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            36k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/History_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/8c15addf-3d3c-4900-a9ab-eee165dbc54c_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">History_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/21a0ad6b-5489-4015-a189-7eb42696b51a?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>15<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/world-history-the-french-revolution/1cdd7fda-d3ed-48c1-9080-01e31d157989"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/world-history-the-french-revolution/1cdd7fda-d3ed-48c1-9080-01e31d157989"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/world-history-the-french-revolution/1cdd7fda-d3ed-48c1-9080-01e31d157989"
                                                                        data-functional-selector="kahoot-card__title-link">World
                                                                        History: The French Revolution</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            4.8k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/History_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/8c15addf-3d3c-4900-a9ab-eee165dbc54c_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">History_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/d9d30709-954b-4691-adcc-761a7303a1b2?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>15<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/ancient-rome-the-roman-republic/a726aa25-e957-4039-a952-e4bc7152bded"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/ancient-rome-the-roman-republic/a726aa25-e957-4039-a952-e4bc7152bded"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/ancient-rome-the-roman-republic/a726aa25-e957-4039-a952-e4bc7152bded"
                                                                        data-functional-selector="kahoot-card__title-link">Ancient
                                                                        Rome: The Roman Republic</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            584 plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/History_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/8c15addf-3d3c-4900-a9ab-eee165dbc54c_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">History_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/1d6bb2de-fed8-45be-8543-93e95f131814?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>15<span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/ancient-rome-the-roman-empire/9587f06c-1ef0-478b-a31f-7725ae330af9"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/ancient-rome-the-roman-empire/9587f06c-1ef0-478b-a31f-7725ae330af9"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/ancient-rome-the-roman-empire/9587f06c-1ef0-478b-a31f-7725ae330af9"
                                                                        data-functional-selector="kahoot-card__title-link">Ancient
                                                                        Rome: The Roman Empire </a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            21.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/History_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/8c15addf-3d3c-4900-a9ab-eee165dbc54c_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">History_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 1709
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/c224e96c-5561-4038-b4c5-2ba3d65eef80?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  1714  14 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/world-history-the-age-of-enlightenment/ed0fc1cc-2a41-45c6-bf54-c105e0a9f744"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/world-history-the-age-of-enlightenment/ed0fc1cc-2a41-45c6-bf54-c105e0a9f744"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/world-history-the-age-of-enlightenment/ed0fc1cc-2a41-45c6-bf54-c105e0a9f744"
                                                                        data-functional-selector="kahoot-card__title-link">World
                                                                        History: The Age of Enlightenment</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 year ago</span></span><b> •
                                                                            451 plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/History_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/8c15addf-3d3c-4900-a9ab-eee165dbc54c_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">History_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className="discover-group" data-functional-selector="discover-group"
                                 style="min-height: 1px;">
                            <header className="discover-group__header"><h1 className="discover-group__title">English
                                (ELA)</h1>
                                <button type="button" role="button" data-functional-selector="button"
                                        className="text-button discover-group__link"
                                        aria-label="Open English (ELA) collection">See
                                    all
                                </button>
                            </header>
                            <div className="discover-group__wrap">
                                <div className="discover-group__title-card">
                                    <div className="card title-card"
                                         style="background-image: url(&quot;https://s3-eu-west-1.amazonaws.com/kahoot-files/email-assets/Banners/collectionbox/halloween/Halloween_ELA.png&quot;);">
                                        <h1 className="title-card__title">English (ELA)</h1>
                                        <button type="button" role="button" data-functional-selector="button"
                                                className="button button--cta-register button--full-width title-card__button"
                                                aria-label="Open English (ELA) collection">See
                                            collection
                                        </button>
                                    </div>
                                </div>
                                <section data-functional-selector="carousel"
                                         className="carousel discover-group__carousel">
                                    <div className="carousel__button-wrap carousel__button-wrap--previous">
                                        <button tabIndex="-1" disabled=""
                                                className="carousel__button carousel__button--hidden"
                                                data-functional-selector="carousel-button-previous"><span
                                            className="icon icon--rotate-180deg"><svg className="icon__svg"
                                                                                      data-functional-selector="icon"
                                                                                      focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__button-wrap carousel__button-wrap--next">
                                        <button tabIndex="-1" className="carousel__button"
                                                data-functional-selector="carousel-button-next"><span className="icon"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__content"
                                         style="margin-right: -8px; margin-left: -8px; clip-path: inset(0px 8px);">
                                        <ul data-functional-selector="carousel-list" className="carousel__list"
                                            style="transform: translate3d(0%, 0px, 0px);">
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/cbe796b2-f620-4749-9467-7ca5eef3435b?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>15 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/common-mistakes-in-spelling-and-grammar-refresher/4d000a04-7472-447d-bbd2-2cf3b5fd4a52"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/common-mistakes-in-spelling-and-grammar-refresher/4d000a04-7472-447d-bbd2-2cf3b5fd4a52"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/common-mistakes-in-spelling-and-grammar-refresher/4d000a04-7472-447d-bbd2-2cf3b5fd4a52"
                                                                        data-functional-selector="kahoot-card__title-link">Common
                                                                        Mistakes in Spelling and Grammar Refresher
                                                                        😈🎃</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            47.7k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/ELA_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/6154a583-a362-46bd-8c8f-673e2da28395_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">ELA_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/f0d03015-9b18-4d97-b46f-1d8327ad2c63?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/boo-tiful-books-behind-the-movies/8c3c73fe-316e-4115-944f-c59b00437818"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/boo-tiful-books-behind-the-movies/8c3c73fe-316e-4115-944f-c59b00437818"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/boo-tiful-books-behind-the-movies/8c3c73fe-316e-4115-944f-c59b00437818"
                                                                        data-functional-selector="kahoot-card__title-link">Boo-tiful
                                                                        👻😱 Books Behind the Movies</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            25.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/ELA_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/6154a583-a362-46bd-8c8f-673e2da28395_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">ELA_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/b59fea0c-273d-4586-892d-4c152ba81e47?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/supernatural-fun-with-reading/a5e0e89e-e313-4ee1-bad2-3cdce535901c"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/supernatural-fun-with-reading/a5e0e89e-e313-4ee1-bad2-3cdce535901c"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/supernatural-fun-with-reading/a5e0e89e-e313-4ee1-bad2-3cdce535901c"
                                                                        data-functional-selector="kahoot-card__title-link">Supernatural
                                                                        👻 Fun with Reading </a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            5.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/ELA_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/6154a583-a362-46bd-8c8f-673e2da28395_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">ELA_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/2d88b96f-2734-4d77-8241-f8e8694c914a?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/grammar-forms-and-use-of-plurals/d4b5a6f0-95a5-42d2-abef-11e888b3ed38"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/grammar-forms-and-use-of-plurals/d4b5a6f0-95a5-42d2-abef-11e888b3ed38"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/grammar-forms-and-use-of-plurals/d4b5a6f0-95a5-42d2-abef-11e888b3ed38"
                                                                        data-functional-selector="kahoot-card__title-link">Grammar-Forms
                                                                        and Use of Plurals</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            15k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/ELA_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/6154a583-a362-46bd-8c8f-673e2da28395_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">ELA_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/3d895393-cdd1-4e5a-9d6a-fdda1cdaf4a9?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/point-of-view-id/a43fe1f7-13a6-446d-b78d-c7f5b87b161c"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/point-of-view-id/a43fe1f7-13a6-446d-b78d-c7f5b87b161c"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/point-of-view-id/a43fe1f7-13a6-446d-b78d-c7f5b87b161c"
                                                                        data-functional-selector="kahoot-card__title-link">Point
                                                                        of View ID</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            3.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/ELA_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/6154a583-a362-46bd-8c8f-673e2da28395_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">ELA_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/b43a1412-be76-4d43-b9b2-6852b5e4f3a3?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/point-of-view-refresher/6b83cc0e-f453-4314-a324-1b871a90568f"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/point-of-view-refresher/6b83cc0e-f453-4314-a324-1b871a90568f"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/point-of-view-refresher/6b83cc0e-f453-4314-a324-1b871a90568f"
                                                                        data-functional-selector="kahoot-card__title-link">Point
                                                                        of View Refresher</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            1.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/ELA_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/6154a583-a362-46bd-8c8f-673e2da28395_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">ELA_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/4d78c87a-16a6-4225-a81d-490608d7b5a8?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>11 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/using-context-clues-back-to-school-refresher/2f3ec283-5fe5-4180-8fe8-9049b137ad5c"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/using-context-clues-back-to-school-refresher/2f3ec283-5fe5-4180-8fe8-9049b137ad5c"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/using-context-clues-back-to-school-refresher/2f3ec283-5fe5-4180-8fe8-9049b137ad5c"
                                                                        data-functional-selector="kahoot-card__title-link">Using
                                                                        Context Clues-Back to School Refresher</a></h1>
                                                                    </div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            22.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/ELA_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/6154a583-a362-46bd-8c8f-673e2da28395_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">ELA_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content">
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/634731b4-b283-4e23-a7c8-ae74275de2f8?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/parts-of-speech-summer-review/54c2b83a-00cf-4d67-9d4b-6611737a56ac"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/parts-of-speech-summer-review/54c2b83a-00cf-4d67-9d4b-6611737a56ac"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/parts-of-speech-summer-review/54c2b83a-00cf-4d67-9d4b-6611737a56ac"
                                                                        data-functional-selector="kahoot-card__title-link">Parts
                                                                        of Speech Summer Review</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            4.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/ELA_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/6154a583-a362-46bd-8c8f-673e2da28395_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">ELA_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2012
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/2d86bd7c-7014-40a4-9597-e0fe742f0453?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2017  14 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/after-summer-spelling-refresher/fe6aedc6-ef3a-47f5-8bee-6318cf05dbff"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/after-summer-spelling-refresher/fe6aedc6-ef3a-47f5-8bee-6318cf05dbff"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/after-summer-spelling-refresher/fe6aedc6-ef3a-47f5-8bee-6318cf05dbff"
                                                                        data-functional-selector="kahoot-card__title-link">After-Summer
                                                                        Spelling Refresher</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            3.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/ELA_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/6154a583-a362-46bd-8c8f-673e2da28395_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">ELA_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2043
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/5e65cb42-9e2c-4837-888e-492965f6a739?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2048  12 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/funny-idioms-review/38f5a244-ba93-4143-90e1-648bcdb30593"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/funny-idioms-review/38f5a244-ba93-4143-90e1-648bcdb30593"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/funny-idioms-review/38f5a244-ba93-4143-90e1-648bcdb30593"
                                                                        data-functional-selector="kahoot-card__title-link">Funny
                                                                        Idioms Review</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/ELA_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/6154a583-a362-46bd-8c8f-673e2da28395_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">ELA_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className="discover-group" data-functional-selector="discover-group"
                                 style="min-height: 1px;">
                            <header className="discover-group__header"><h1
                                className="discover-group__title">Science</h1>
                                <button type="button" role="button" data-functional-selector="button"
                                        className="text-button discover-group__link"
                                        aria-label="Open Science collection"> 2073 See
                                    all
                                </button>
                            </header>
                            <div className="discover-group__wrap">
                                <div className="discover-group__title-card">
                                    <div className="card title-card"
                                         style="background-image: url(&quot;https://s3-eu-west-1.amazonaws.com/kahoot-files/email-assets/Banners/collectionbox/halloween/Halloween_Science.png&quot;);">
                                        <h1 className="title-card__title">Science</h1>
                                        <button type="button" role="button" data-functional-selector="button"
                                                className="button button--cta-register button--full-width title-card__button"
                                                aria-label="Open Science collection"> 2079 See
                                            collection
                                        </button>
                                    </div>
                                </div>
                                <section data-functional-selector="carousel"
                                         className="carousel discover-group__carousel">
                                    <div className="carousel__button-wrap carousel__button-wrap--previous">
                                        <button tabIndex="-1" disabled=""
                                                className="carousel__button carousel__button--hidden"
                                                data-functional-selector="carousel-button-previous"><span
                                            className="icon icon--rotate-180deg"><svg className="icon__svg"
                                                                                      data-functional-selector="icon"
                                                                                      focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__button-wrap carousel__button-wrap--next">
                                        <button tabIndex="-1" className="carousel__button"
                                                data-functional-selector="carousel-button-next"><span className="icon"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__content"
                                         style="margin-right: -8px; margin-left: -8px; clip-path: inset(0px 8px);">
                                        <ul data-functional-selector="carousel-list" className="carousel__list"
                                            style="transform: translate3d(0%, 0px, 0px);">
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2098
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/8e01c45e-ec19-4d58-9b50-55dd26749809?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2103  25 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/ghostly-blind-kahoot-transfer-of-energy/15f35e31-1d4c-4627-b989-f85981b36031"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/ghostly-blind-kahoot-transfer-of-energy/15f35e31-1d4c-4627-b989-f85981b36031"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/ghostly-blind-kahoot-transfer-of-energy/15f35e31-1d4c-4627-b989-f85981b36031"
                                                                        data-functional-selector="kahoot-card__title-link">👻
                                                                        Ghostly 👻 blind kahoot "Transfer of Energy"</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            16.8k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Science_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/cdcde9ef-bdd2-4cce-ae1a-c5fd12fe7e15_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Science_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2129
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/1a9b8d80-7283-4f51-b518-04eab3bc14a2?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2134  25 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/blind-kahoot-an-mystical-attractive-force/7030c498-9e50-4160-bfe1-31ddba445fc8"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/blind-kahoot-an-mystical-attractive-force/7030c498-9e50-4160-bfe1-31ddba445fc8"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/blind-kahoot-an-mystical-attractive-force/7030c498-9e50-4160-bfe1-31ddba445fc8"
                                                                        data-functional-selector="kahoot-card__title-link">Blind
                                                                        kahoot "An Mystical Attractive Force" 🎃👻</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 3 months ago</span><span
                                                                            className="kahoot-card__information-mobile">3 months ago</span></span><b> •
                                                                            26.7k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Science_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/cdcde9ef-bdd2-4cce-ae1a-c5fd12fe7e15_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Science_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2160
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/aa40e6a8-1cc4-47e9-9fc0-78e61487b03e?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2165  20 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/bullying-prevention/327cace2-06c7-4d88-812a-f891af05ae4a"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/bullying-prevention/327cace2-06c7-4d88-812a-f891af05ae4a"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/bullying-prevention/327cace2-06c7-4d88-812a-f891af05ae4a"
                                                                        data-functional-selector="kahoot-card__title-link">🎃
                                                                        Bullying Prevention</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 4 months ago</span><span
                                                                            className="kahoot-card__information-mobile">4 months ago</span></span><b> •
                                                                            31.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Science_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/cdcde9ef-bdd2-4cce-ae1a-c5fd12fe7e15_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Science_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2191
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/20913362-3cd1-46a4-91dd-23e9871a32b9?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2196  15 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/digital-citizenship/b8fcba96-64f2-4438-acb9-ea4318350509"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/digital-citizenship/b8fcba96-64f2-4438-acb9-ea4318350509"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/digital-citizenship/b8fcba96-64f2-4438-acb9-ea4318350509"
                                                                        data-functional-selector="kahoot-card__title-link">Digital
                                                                        Citizenship </a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 4 months ago</span><span
                                                                            className="kahoot-card__information-mobile">4 months ago</span></span><b> •
                                                                            5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Science_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/cdcde9ef-bdd2-4cce-ae1a-c5fd12fe7e15_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Science_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2222
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/b5bc1016-45a8-450f-9d93-0a64049937ca?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2227  15 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/earth-science-landforms-made-for-travel/16fdb5c7-48fc-41fa-9a35-a4d00fbc7d86"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/earth-science-landforms-made-for-travel/16fdb5c7-48fc-41fa-9a35-a4d00fbc7d86"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/earth-science-landforms-made-for-travel/16fdb5c7-48fc-41fa-9a35-a4d00fbc7d86"
                                                                        data-functional-selector="kahoot-card__title-link">Earth
                                                                        Science: Landforms made for Travel</a></h1>
                                                                    </div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 4 months ago</span><span
                                                                            className="kahoot-card__information-mobile">4 months ago</span></span><b> •
                                                                            10.8k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Science_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/cdcde9ef-bdd2-4cce-ae1a-c5fd12fe7e15_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Science_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2253
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/ea02d01b-f7e1-4769-a97d-8fe6fd0404e4?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2258  15 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/physical-science-roller-coaster-physics/8085956f-0111-42ce-9faa-e3b99fc23d07"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/physical-science-roller-coaster-physics/8085956f-0111-42ce-9faa-e3b99fc23d07"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/physical-science-roller-coaster-physics/8085956f-0111-42ce-9faa-e3b99fc23d07"
                                                                        data-functional-selector="kahoot-card__title-link">Physical
                                                                        Science: Roller Coaster Physics</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 4 months ago</span><span
                                                                            className="kahoot-card__information-mobile">4 months ago</span></span><b> •
                                                                            5.1k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Science_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/cdcde9ef-bdd2-4cce-ae1a-c5fd12fe7e15_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Science_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2284
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/1d403698-9fb6-4e95-9940-735a1694275a?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2289  20 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/the-body-s-response-to-relaxation-adrenaline/4f5b0897-e66f-4ba9-b060-370bc0906c5f"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/the-body-s-response-to-relaxation-adrenaline/4f5b0897-e66f-4ba9-b060-370bc0906c5f"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/the-body-s-response-to-relaxation-adrenaline/4f5b0897-e66f-4ba9-b060-370bc0906c5f"
                                                                        data-functional-selector="kahoot-card__title-link">The
                                                                        Body's Response to
                                                                        Relaxation &amp; Adrenaline</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 4 months ago</span><span
                                                                            className="kahoot-card__information-mobile">4 months ago</span></span><b> •
                                                                            35.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Science_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/cdcde9ef-bdd2-4cce-ae1a-c5fd12fe7e15_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Science_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2315
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/9a55d4e2-7154-4ffa-99f5-e110c0a81f67?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2320  15 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/science-lab-safety/15a1d189-9c24-4e42-85dd-7cd60f6841d8"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/science-lab-safety/15a1d189-9c24-4e42-85dd-7cd60f6841d8"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/science-lab-safety/15a1d189-9c24-4e42-85dd-7cd60f6841d8"
                                                                        data-functional-selector="kahoot-card__title-link">Science
                                                                        Lab Safety</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 4 months ago</span><span
                                                                            className="kahoot-card__information-mobile">4 months ago</span></span><b> •
                                                                            8.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Science_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/cdcde9ef-bdd2-4cce-ae1a-c5fd12fe7e15_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Science_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2346
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/8c17d049-d8c2-4e08-bd1b-61abd7038781?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2351  15 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/photography-the-science-behind-taking-photos/4022b428-ae81-4db1-b658-5895737cca6d"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/photography-the-science-behind-taking-photos/4022b428-ae81-4db1-b658-5895737cca6d"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/photography-the-science-behind-taking-photos/4022b428-ae81-4db1-b658-5895737cca6d"
                                                                        data-functional-selector="kahoot-card__title-link">Photography:
                                                                        The science behind taking photos</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 4 months ago</span><span
                                                                            className="kahoot-card__information-mobile">4 months ago</span></span><b> •
                                                                            1.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Science_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/cdcde9ef-bdd2-4cce-ae1a-c5fd12fe7e15_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Science_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2377
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/5b9d2854-578b-4878-83b6-839828e29f37?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2382  18 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/earth-space-science-solar-eclipse/545568b6-5a08-4056-a58a-a8cf3379b2ed"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/earth-space-science-solar-eclipse/545568b6-5a08-4056-a58a-a8cf3379b2ed"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/earth-space-science-solar-eclipse/545568b6-5a08-4056-a58a-a8cf3379b2ed"
                                                                        data-functional-selector="kahoot-card__title-link">Earth/Space
                                                                        Science: Solar Eclipse</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 4 months ago</span><span
                                                                            className="kahoot-card__information-mobile">4 months ago</span></span><b> •
                                                                            4.1k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Science_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/cdcde9ef-bdd2-4cce-ae1a-c5fd12fe7e15_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Science_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className="discover-group" data-functional-selector="discover-group"
                                 style="min-height: 1px;">
                            <header className="discover-group__header"><h1 className="discover-group__title">Trivia</h1>
                                <button type="button" role="button" data-functional-selector="button"
                                        className="text-button discover-group__link"
                                        aria-label="Open Trivia collection"> 2407 See
                                    all
                                </button>
                            </header>
                            <div className="discover-group__wrap">
                                <div className="discover-group__title-card">
                                    <div className="card title-card"
                                         style="background-image: url(&quot;https://s3-eu-west-1.amazonaws.com/kahoot-files/email-assets/Banners/collectionbox/halloween/Halloween_Trivia.png&quot;);">
                                        <h1 className="title-card__title">Trivia</h1>
                                        <button type="button" role="button" data-functional-selector="button"
                                                className="button button--cta-register button--full-width title-card__button"
                                                aria-label="Open Trivia collection"> 2413 See
                                            collection
                                        </button>
                                    </div>
                                </div>
                                <section data-functional-selector="carousel"
                                         className="carousel discover-group__carousel">
                                    <div className="carousel__button-wrap carousel__button-wrap--previous">
                                        <button tabIndex="-1" disabled=""
                                                className="carousel__button carousel__button--hidden"
                                                data-functional-selector="carousel-button-previous"><span
                                            className="icon icon--rotate-180deg"><svg className="icon__svg"
                                                                                      data-functional-selector="icon"
                                                                                      focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__button-wrap carousel__button-wrap--next">
                                        <button tabIndex="-1" className="carousel__button"
                                                data-functional-selector="carousel-button-next"><span className="icon"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__content"
                                         style="margin-right: -8px; margin-left: -8px; clip-path: inset(0px 8px);">
                                        <ul data-functional-selector="carousel-list" className="carousel__list"
                                            style="transform: translate3d(0%, 0px, 0px);">
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2432
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/e89cfea6-f5c7-4c77-a3bd-92a2b365e183?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2437  8 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/newsquiz-for-kids-oct-15-21/7938b7ed-8105-46fd-b2e9-2edb87e009be"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/newsquiz-for-kids-oct-15-21/7938b7ed-8105-46fd-b2e9-2edb87e009be"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/newsquiz-for-kids-oct-15-21/7938b7ed-8105-46fd-b2e9-2edb87e009be"
                                                                        data-functional-selector="kahoot-card__title-link">Newsquiz
                                                                        for kids: Oct 15-21 </a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 6 days ago</span><span
                                                                            className="kahoot-card__information-mobile">6 days ago</span></span><b> •
                                                                            7.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2463
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/bc8ae6ba-8853-4d1b-8121-134d99b37e5d?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2468  10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/halloween-around-the-world/fe353248-6492-4f76-97d5-240b2c0d71bc"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/halloween-around-the-world/fe353248-6492-4f76-97d5-240b2c0d71bc"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/halloween-around-the-world/fe353248-6492-4f76-97d5-240b2c0d71bc"
                                                                        data-functional-selector="kahoot-card__title-link">Halloween
                                                                        around the world 👻🌎</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 26 days ago</span><span
                                                                            className="kahoot-card__information-mobile">26 days ago</span></span><b> •
                                                                            59k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2494
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/b6aa547d-949e-495d-8f23-1a96481c581f?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2499  11 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/a-spooky-kahoot-for-halloween/dfdde52a-d884-40b4-8b11-6d0a4526ca61"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/a-spooky-kahoot-for-halloween/dfdde52a-d884-40b4-8b11-6d0a4526ca61"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/a-spooky-kahoot-for-halloween/dfdde52a-d884-40b4-8b11-6d0a4526ca61"
                                                                        data-functional-selector="kahoot-card__title-link">A
                                                                        spooky kahoot for Halloween! 👻</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 25 days ago</span><span
                                                                            className="kahoot-card__information-mobile">25 days ago</span></span><b> •
                                                                            11.7k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2525
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/e5e7293c-d73b-4c6d-89ab-fcd8932b2761?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2530  16 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/a-terror-ific-memory-game/31f801c8-d997-49eb-a11e-e00349278381"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/a-terror-ific-memory-game/31f801c8-d997-49eb-a11e-e00349278381"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/a-terror-ific-memory-game/31f801c8-d997-49eb-a11e-e00349278381"
                                                                        data-functional-selector="kahoot-card__title-link">A
                                                                        Terror-ific Memory Game! 🕸</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 25 days ago</span><span
                                                                            className="kahoot-card__information-mobile">25 days ago</span></span><b> •
                                                                            4.8k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2556
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/7cd1e351-466e-43b3-b41f-ae6dc4a849d2?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2561  13 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/national-ghost-hunting-day/9a1336c3-2dce-4dec-8119-c7c893dc376c"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/national-ghost-hunting-day/9a1336c3-2dce-4dec-8119-c7c893dc376c"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/national-ghost-hunting-day/9a1336c3-2dce-4dec-8119-c7c893dc376c"
                                                                        data-functional-selector="kahoot-card__title-link">National
                                                                        Ghost Hunting Day 👻</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 month ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 month ago</span></span><b> •
                                                                            57.1k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2587
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/fffb1b9e-1cde-4d0c-af6d-32730234aca8?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2592  10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/forget-the-ghosts-beware-of-math/272e9de8-1527-44fc-8ede-28d5d66942ee"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/forget-the-ghosts-beware-of-math/272e9de8-1527-44fc-8ede-28d5d66942ee"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/forget-the-ghosts-beware-of-math/272e9de8-1527-44fc-8ede-28d5d66942ee"
                                                                        data-functional-selector="kahoot-card__title-link">Forget
                                                                        The Ghosts, Beware Of Math! 😱</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 25 days ago</span><span
                                                                            className="kahoot-card__information-mobile">25 days ago</span></span><b> •
                                                                            2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2618
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/97bddf69-318b-4882-8d77-1b0c8d871bd8?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2623  8 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/world-space-week/6df02172-e29c-4c63-93bb-283326320ca6"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/world-space-week/6df02172-e29c-4c63-93bb-283326320ca6"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/world-space-week/6df02172-e29c-4c63-93bb-283326320ca6"
                                                                        data-functional-selector="kahoot-card__title-link">World
                                                                        Space Week 🚀</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 19 days ago</span><span
                                                                            className="kahoot-card__information-mobile">19 days ago</span></span><b> •
                                                                            49.6k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2649
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/ea898ee4-513d-41a1-8cf6-ee8431fd0141?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2654  11 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/celebrate-world-teachers-day/5525e634-7181-4165-a2f7-2b5261c9c626"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/celebrate-world-teachers-day/5525e634-7181-4165-a2f7-2b5261c9c626"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/celebrate-world-teachers-day/5525e634-7181-4165-a2f7-2b5261c9c626"
                                                                        data-functional-selector="kahoot-card__title-link">Celebrate
                                                                        World Teachers' Day!</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 month ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 month ago</span></span><b> •
                                                                            23.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2680
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/d884f403-e7c5-4540-a01a-b2a0bdff52c6?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2685  11 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/united-nations-day/48d0f730-ba84-4195-a1bd-996a276f1db1"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/united-nations-day/48d0f730-ba84-4195-a1bd-996a276f1db1"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/united-nations-day/48d0f730-ba84-4195-a1bd-996a276f1db1"
                                                                        data-functional-selector="kahoot-card__title-link">United
                                                                        Nations Day</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 23 days ago</span><span
                                                                            className="kahoot-card__information-mobile">23 days ago</span></span><b> •
                                                                            917 plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2711
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/ed1cec3c-ee54-4991-877f-9aef7701a104?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2716  13 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/the-solar-system/c482c175-ac56-47e0-bc23-c08fe53ebe1d"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/the-solar-system/c482c175-ac56-47e0-bc23-c08fe53ebe1d"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/the-solar-system/c482c175-ac56-47e0-bc23-c08fe53ebe1d"
                                                                        data-functional-selector="kahoot-card__title-link">The
                                                                        Solar System</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">about 2 months ago</span></span><b> •
                                                                            4.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className="discover-group" data-functional-selector="discover-group"
                                 style="min-height: 1px;">
                            <header className="discover-group__header"><h1
                                className="discover-group__title">Britannica</h1>
                                <button type="button" role="button" data-functional-selector="button"
                                        className="text-button discover-group__link"
                                        aria-label="Open Britannica collection"> 2741 See
                                    all
                                </button>
                            </header>
                            <div className="discover-group__wrap">
                                <div className="discover-group__title-card">
                                    <div className="card title-card"
                                         style="background-image: url(&quot;https://s3-eu-west-1.amazonaws.com/kahoot-files/email-assets/Banners/collectionbox/Collection_box.png&quot;);">
                                        <h1 className="title-card__title">Britannica</h1>
                                        <button type="button" role="button" data-functional-selector="button"
                                                className="button button--cta-register button--full-width title-card__button"
                                                aria-label="Open Britannica collection"> 2747 See
                                            collection
                                        </button>
                                    </div>
                                </div>
                                <section data-functional-selector="carousel"
                                         className="carousel discover-group__carousel">
                                    <div className="carousel__button-wrap carousel__button-wrap--previous">
                                        <button tabIndex="-1" disabled=""
                                                className="carousel__button carousel__button--hidden"
                                                data-functional-selector="carousel-button-previous"><span
                                            className="icon icon--rotate-180deg"><svg className="icon__svg"
                                                                                      data-functional-selector="icon"
                                                                                      focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__button-wrap carousel__button-wrap--next">
                                        <button tabIndex="-1" className="carousel__button"
                                                data-functional-selector="carousel-button-next"><span className="icon"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__content"
                                         style="margin-right: -8px; margin-left: -8px; clip-path: inset(0px 8px);">
                                        <ul data-functional-selector="carousel-list" className="carousel__list"
                                            style="transform: translate3d(0%, 0px, 0px);">
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2767
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/22f59088-ec43-4af1-9954-4df09b95e608?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2772  5 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/media-literacy-3-fact-checking/5a3fef28-5c7a-4df3-a1d8-5b9d89ee35df"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/media-literacy-3-fact-checking/5a3fef28-5c7a-4df3-a1d8-5b9d89ee35df"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/media-literacy-3-fact-checking/5a3fef28-5c7a-4df3-a1d8-5b9d89ee35df"
                                                                        data-functional-selector="kahoot-card__title-link">Media
                                                                        Literacy 3: Fact-Checking</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 5 days ago</span><span
                                                                            className="kahoot-card__information-mobile">5 days ago</span></span><b> •
                                                                            119 plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Britannica"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/da6787fb-43ec-4e28-b0a7-cdb2d5f1fcb0_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Britannica</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2799
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/295bbaf0-4c41-4673-b632-673444ee686c?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2804  10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/world-geography-famous-landmarks/fba5cd05-96af-4506-b8ce-388ff9b33fbb"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/world-geography-famous-landmarks/fba5cd05-96af-4506-b8ce-388ff9b33fbb"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/world-geography-famous-landmarks/fba5cd05-96af-4506-b8ce-388ff9b33fbb"
                                                                        data-functional-selector="kahoot-card__title-link">World
                                                                        Geography: Famous Landmarks</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 10 days ago</span><span
                                                                            className="kahoot-card__information-mobile">10 days ago</span></span><b> •
                                                                            3.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Britannica"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/da6787fb-43ec-4e28-b0a7-cdb2d5f1fcb0_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Britannica</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2831
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/406f166a-11bd-42df-a2dd-f09b962775fa?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2836  10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/world-history-castles/2cf7885c-8771-47a1-aab4-bb2c1f13505e"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/world-history-castles/2cf7885c-8771-47a1-aab4-bb2c1f13505e"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/world-history-castles/2cf7885c-8771-47a1-aab4-bb2c1f13505e"
                                                                        data-functional-selector="kahoot-card__title-link">World
                                                                        History: Castles</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 26 days ago</span><span
                                                                            className="kahoot-card__information-mobile">26 days ago</span></span><b> •
                                                                            4.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Britannica"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/da6787fb-43ec-4e28-b0a7-cdb2d5f1fcb0_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Britannica</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2863
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/8835caa6-3128-4e22-976d-cc288570076e?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2868  10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/teens-who-made-history/8d9e949e-f0e6-4290-8439-f0e53b4bb60f"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/teens-who-made-history/8d9e949e-f0e6-4290-8439-f0e53b4bb60f"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/teens-who-made-history/8d9e949e-f0e6-4290-8439-f0e53b4bb60f"
                                                                        data-functional-selector="kahoot-card__title-link">Teens
                                                                        Who Made History</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            25.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Britannica"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/da6787fb-43ec-4e28-b0a7-cdb2d5f1fcb0_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Britannica</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2895
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/efe4a314-5b1e-47fe-9e89-c2f11ff985d3?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2900  10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/constellations/7253d015-4ad7-42be-98a6-76131c449d09"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/constellations/7253d015-4ad7-42be-98a6-76131c449d09"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/constellations/7253d015-4ad7-42be-98a6-76131c449d09"
                                                                        data-functional-selector="kahoot-card__title-link">Constellations</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            7.6k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Britannica"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/da6787fb-43ec-4e28-b0a7-cdb2d5f1fcb0_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Britannica</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2927
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/dcc594e7-77de-4e2e-b82c-2e74a2793018?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2932  10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/greek-god-or-roman-god/b5d04d4a-9266-43bd-93c4-0525bcb7c029"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/greek-god-or-roman-god/b5d04d4a-9266-43bd-93c4-0525bcb7c029"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/greek-god-or-roman-god/b5d04d4a-9266-43bd-93c4-0525bcb7c029"
                                                                        data-functional-selector="kahoot-card__title-link">Greek
                                                                        God or Roman God?</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            52.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Britannica"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/da6787fb-43ec-4e28-b0a7-cdb2d5f1fcb0_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Britannica</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2959
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/c1673c12-357a-4353-b33b-af4e36d0203f?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2964  10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/punctuation/f186cf87-8e77-4fb7-b860-ceab23ea7352"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/punctuation/f186cf87-8e77-4fb7-b860-ceab23ea7352"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/punctuation/f186cf87-8e77-4fb7-b860-ceab23ea7352"
                                                                        data-functional-selector="kahoot-card__title-link">Punctuation</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            14.1k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Britannica"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/da6787fb-43ec-4e28-b0a7-cdb2d5f1fcb0_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Britannica</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 2991
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/b84d9736-d967-4728-b481-c7a14e8e7398?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  2996  10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/all-about-animal-poop/6364e907-b54e-4bd1-81e6-aa210e3a8ece"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/all-about-animal-poop/6364e907-b54e-4bd1-81e6-aa210e3a8ece"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/all-about-animal-poop/6364e907-b54e-4bd1-81e6-aa210e3a8ece"
                                                                        data-functional-selector="kahoot-card__title-link">All
                                                                        About Animal Poop </a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            55.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Britannica"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/da6787fb-43ec-4e28-b0a7-cdb2d5f1fcb0_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Britannica</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3023
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/57469120-cf86-4c9c-a00a-02c1fbab59cd?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3028  10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/media-literacy-1-what-is-it/5f5fd794-da8e-4f81-b709-50d7926339ad"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/media-literacy-1-what-is-it/5f5fd794-da8e-4f81-b709-50d7926339ad"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/media-literacy-1-what-is-it/5f5fd794-da8e-4f81-b709-50d7926339ad"
                                                                        data-functional-selector="kahoot-card__title-link">Media
                                                                        Literacy 1: What Is It?</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 1 month ago</span><span
                                                                            className="kahoot-card__information-mobile">about 1 month ago</span></span><b> •
                                                                            21.7k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Britannica"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/da6787fb-43ec-4e28-b0a7-cdb2d5f1fcb0_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Britannica</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3055
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/d9f2b89b-81af-45fc-bf7a-a848b4ee46c3?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3060  5 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/media-literacy-2-evaluating-sources/50e64be1-b5f4-4bfa-b0d0-346e56fd57d9"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/media-literacy-2-evaluating-sources/50e64be1-b5f4-4bfa-b0d0-346e56fd57d9"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/media-literacy-2-evaluating-sources/50e64be1-b5f4-4bfa-b0d0-346e56fd57d9"
                                                                        data-functional-selector="kahoot-card__title-link">Media
                                                                        Literacy 2: Evaluating Sources</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 9 days ago</span><span
                                                                            className="kahoot-card__information-mobile">9 days ago</span></span><b> •
                                                                            133 plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Britannica"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/da6787fb-43ec-4e28-b0a7-cdb2d5f1fcb0_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Britannica</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className="discover-group" data-functional-selector="discover-group"
                                 style="min-height: 1px;">
                            <header className="discover-group__header"><h1 className="discover-group__title">Climate
                                challenge</h1>
                                <button type="button" role="button" data-functional-selector="button"
                                        className="text-button discover-group__link"
                                        aria-label="Open Climate challenge collection"> 3085 See
                                    all
                                </button>
                            </header>
                            <div className="discover-group__wrap">
                                <div className="discover-group__title-card">
                                    <div className="card title-card"
                                         style="background-image: url(&quot;https://s3-eu-west-1.amazonaws.com/kahoot-files/email-assets/Banners/columbiauni/Collection_box_co.png&quot;);">
                                        <h1 className="title-card__title">Climate challenge</h1>
                                        <button type="button" role="button" data-functional-selector="button"
                                                className="button button--cta-register button--full-width title-card__button"
                                                aria-label="Open Climate challenge collection"> 3091 See
                                            collection
                                        </button>
                                    </div>
                                </div>
                                <section data-functional-selector="carousel"
                                         className="carousel discover-group__carousel">
                                    <div className="carousel__button-wrap carousel__button-wrap--previous">
                                        <button tabIndex="-1" disabled=""
                                                className="carousel__button carousel__button--hidden"
                                                data-functional-selector="carousel-button-previous"><span
                                            className="icon icon--rotate-180deg"><svg className="icon__svg"
                                                                                      data-functional-selector="icon"
                                                                                      focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__button-wrap carousel__button-wrap--next">
                                        <button tabIndex="-1" className="carousel__button"
                                                data-functional-selector="carousel-button-next"><span className="icon"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__content"
                                         style="margin-right: -8px; margin-left: -8px; clip-path: inset(0px 8px);">
                                        <ul data-functional-selector="carousel-list" className="carousel__list"
                                            style="transform: translate3d(0%, 0px, 0px);">
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3111
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/2884ebe8-cc26-47e9-a3c1-76dd05573baa?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3116  13 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/how-does-climate-change-impact-where-we-live/2747142f-2f1c-47e3-90ee-79e42cbeaa7e"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/how-does-climate-change-impact-where-we-live/2747142f-2f1c-47e3-90ee-79e42cbeaa7e"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/how-does-climate-change-impact-where-we-live/2747142f-2f1c-47e3-90ee-79e42cbeaa7e"
                                                                        data-functional-selector="kahoot-card__title-link">How
                                                                        Does Climate Change Impact Where We Live?</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            1.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Columbia_University"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/238be564-81e4-41e1-a4cf-597896303b17_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Columbia_University</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3143
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/44fb5dc2-da8e-42cf-abde-bf610ed97eb1?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3148  13 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/how-does-climate-change-impact-our-food-water/cd1d843c-c304-4ed7-84ba-3c2bc608151e"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/how-does-climate-change-impact-our-food-water/cd1d843c-c304-4ed7-84ba-3c2bc608151e"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/how-does-climate-change-impact-our-food-water/cd1d843c-c304-4ed7-84ba-3c2bc608151e"
                                                                        data-functional-selector="kahoot-card__title-link">How
                                                                        Does Climate Change Impact Our
                                                                        Food &amp; Water?</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            3.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Columbia_University"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/238be564-81e4-41e1-a4cf-597896303b17_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Columbia_University</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3175
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/3725a8d3-0687-4004-9e44-fa0a90f4ac35?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3180  13 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/what-can-we-do-about-climate-change/c5a60f10-383e-4b49-81bc-ad16cfba1b04"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/what-can-we-do-about-climate-change/c5a60f10-383e-4b49-81bc-ad16cfba1b04"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/what-can-we-do-about-climate-change/c5a60f10-383e-4b49-81bc-ad16cfba1b04"
                                                                        data-functional-selector="kahoot-card__title-link">What
                                                                        Can We Do About Climate Change?</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            18.1k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Columbia_University"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/238be564-81e4-41e1-a4cf-597896303b17_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Columbia_University</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3207
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/4aeb0c4b-24da-4517-aa27-2045a1356964?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3212  12 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/how-does-climate-change-impact-energy-transportation/828746a4-639e-412d-9040-6845e684cbc9"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/how-does-climate-change-impact-energy-transportation/828746a4-639e-412d-9040-6845e684cbc9"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/how-does-climate-change-impact-energy-transportation/828746a4-639e-412d-9040-6845e684cbc9"
                                                                        data-functional-selector="kahoot-card__title-link">How
                                                                        Does Climate Change Impact
                                                                        Energy &amp; Transportation?</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            8.4k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Columbia_University"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/238be564-81e4-41e1-a4cf-597896303b17_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Columbia_University</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3239
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/0d74d7d8-aa66-4bc3-bf13-ed57e760ccd4?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3244  12 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/what-do-you-know-about-climate-change/f9e95882-56ad-4508-a5a0-4640dfbd78f0"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/what-do-you-know-about-climate-change/f9e95882-56ad-4508-a5a0-4640dfbd78f0"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/what-do-you-know-about-climate-change/f9e95882-56ad-4508-a5a0-4640dfbd78f0"
                                                                        data-functional-selector="kahoot-card__title-link">What
                                                                        Do You Know About Climate Change?</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            47.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Columbia_University"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/238be564-81e4-41e1-a4cf-597896303b17_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Columbia_University</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3271
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/373388a6-5ed1-4ef0-9d2d-737599f44bde?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3276  12 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/how-does-climate-change-impact-the-ocean/2625812b-01a2-4202-8a89-b066bd82ea69"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/how-does-climate-change-impact-the-ocean/2625812b-01a2-4202-8a89-b066bd82ea69"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/how-does-climate-change-impact-the-ocean/2625812b-01a2-4202-8a89-b066bd82ea69"
                                                                        data-functional-selector="kahoot-card__title-link">How
                                                                        Does Climate Change Impact the Ocean?</a></h1>
                                                                    </div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            29.7k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Columbia_University"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/238be564-81e4-41e1-a4cf-597896303b17_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Columbia_University</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3303
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/dbf50b62-5b9c-49ee-85c6-22f07607494e?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3308  14 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/how-does-climate-change-impact-our-health/26ae8af7-bf82-4b09-92e0-78b72ca67aab"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/how-does-climate-change-impact-our-health/26ae8af7-bf82-4b09-92e0-78b72ca67aab"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/how-does-climate-change-impact-our-health/26ae8af7-bf82-4b09-92e0-78b72ca67aab"
                                                                        data-functional-selector="kahoot-card__title-link">How
                                                                        Does Climate Change Impact Our Health?</a></h1>
                                                                    </div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            1.8k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Columbia_University"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/238be564-81e4-41e1-a4cf-597896303b17_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Columbia_University</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3335
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/e2e42daa-dd20-4b3d-90e2-fafb6cb2ea86?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3340  13 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/how-does-climate-change-impact-the-arctic-antarctic/a15b0685-fdec-4405-9caa-1503dcadd022"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/how-does-climate-change-impact-the-arctic-antarctic/a15b0685-fdec-4405-9caa-1503dcadd022"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/how-does-climate-change-impact-the-arctic-antarctic/a15b0685-fdec-4405-9caa-1503dcadd022"
                                                                        data-functional-selector="kahoot-card__title-link">How
                                                                        Does Climate Change Impact the
                                                                        Arctic &amp; Antarctic?</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            13k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Columbia_University"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/238be564-81e4-41e1-a4cf-597896303b17_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Columbia_University</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3367
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/f1872535-8abe-4bb2-9cde-3ff1e0689f66?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3372  13 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/how-does-climate-change-impact-ecosystems/cefbcce7-201e-4c76-9fac-d79544e48b0b"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/how-does-climate-change-impact-ecosystems/cefbcce7-201e-4c76-9fac-d79544e48b0b"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/how-does-climate-change-impact-ecosystems/cefbcce7-201e-4c76-9fac-d79544e48b0b"
                                                                        data-functional-selector="kahoot-card__title-link">How
                                                                        Does Climate Change Impact Ecosystems? </a></h1>
                                                                    </div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            17.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Columbia_University"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/238be564-81e4-41e1-a4cf-597896303b17_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Columbia_University</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__sponsored">Sponsored</div>
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3399
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/4f854c2d-c166-47c3-a20b-57ab52caaa27?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3404  19 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/take-the-survey-what-do-you-think-about-climate-change/7f93cf10-91c1-496c-bb54-fa4f7a7b3696"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/take-the-survey-what-do-you-think-about-climate-change/7f93cf10-91c1-496c-bb54-fa4f7a7b3696"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/take-the-survey-what-do-you-think-about-climate-change/7f93cf10-91c1-496c-bb54-fa4f7a7b3696"
                                                                        data-functional-selector="kahoot-card__title-link">Take
                                                                        the Survey! What Do You Think About Climate
                                                                        Change? </a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">2 months ago</span></span><b> •
                                                                            1.1k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Columbia_University"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/238be564-81e4-41e1-a4cf-597896303b17_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Columbia_University</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className="discover-group" data-functional-selector="discover-group"
                                 style="min-height: 1px;">
                            <header className="discover-group__header"><h1
                                className="discover-group__title">Trending</h1>
                                <button type="button" role="button" data-functional-selector="button"
                                        className="text-button discover-group__link"
                                        aria-label="Open Trending collection"> 3429 See
                                    all
                                </button>
                            </header>
                            <div className="discover-group__wrap">
                                <div className="discover-group__title-card">
                                    <div className="card title-card"
                                         style="background-image: url(&quot;https://s3-eu-west-1.amazonaws.com/kahoot-files/email-assets/Banners/collectionbox/halloween/Halloween_Trending.png&quot;);">
                                        <h1 className="title-card__title">Trending</h1>
                                        <button type="button" role="button" data-functional-selector="button"
                                                className="button button--cta-register button--full-width title-card__button"
                                                aria-label="Open Trending collection"> 3435 See
                                            collection
                                        </button>
                                    </div>
                                </div>
                                <section data-functional-selector="carousel"
                                         className="carousel discover-group__carousel">
                                    <div className="carousel__button-wrap carousel__button-wrap--previous">
                                        <button tabIndex="-1" disabled=""
                                                className="carousel__button carousel__button--hidden"
                                                data-functional-selector="carousel-button-previous"><span
                                            className="icon icon--rotate-180deg"><svg className="icon__svg"
                                                                                      data-functional-selector="icon"
                                                                                      focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__button-wrap carousel__button-wrap--next">
                                        <button tabIndex="-1" className="carousel__button"
                                                data-functional-selector="carousel-button-next"><span className="icon"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__content"
                                         style="margin-right: -8px; margin-left: -8px; clip-path: inset(0px 8px);">
                                        <ul data-functional-selector="carousel-list" className="carousel__list"
                                            style="transform: translate3d(0%, 0px, 0px);">
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3454
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/d3a405db-2ef5-4de9-86be-e5e22ee32e0b?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3459  30 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/theatre-acting/0004e365-a913-4c66-9ae9-f00c0f129090"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/theatre-acting/0004e365-a913-4c66-9ae9-f00c0f129090"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/theatre-acting/0004e365-a913-4c66-9ae9-f00c0f129090"
                                                                        data-functional-selector="kahoot-card__title-link">Theatre/Acting</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 2 years ago</span><span
                                                                            className="kahoot-card__information-mobile">about 2 years ago</span></span><b> •
                                                                            7.1k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/search?filter=1&amp;creator=armeste"><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">armeste</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3484
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/8d047318-c9fb-44d6-9fe1-cabe5a527ec9?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3489  39 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/special-senses/002303b9-e59c-48de-8237-c23ef2675ef5"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/special-senses/002303b9-e59c-48de-8237-c23ef2675ef5"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/special-senses/002303b9-e59c-48de-8237-c23ef2675ef5"
                                                                        data-functional-selector="kahoot-card__title-link">Special
                                                                        Senses</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created almost 3 years ago</span><span
                                                                            className="kahoot-card__information-mobile">almost 3 years ago</span></span><b> •
                                                                            13.8k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/search?filter=1&amp;creator=janosa"><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">janosa</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3514
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/6b140515-c444-4049-a4ec-4f73b361c0d7?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3519  27 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/chemistry-of-life-test-review/00244d60-2b52-4db3-b837-f8fbbbf85bff"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/chemistry-of-life-test-review/00244d60-2b52-4db3-b837-f8fbbbf85bff"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/chemistry-of-life-test-review/00244d60-2b52-4db3-b837-f8fbbbf85bff"
                                                                        data-functional-selector="kahoot-card__title-link">Chemistry
                                                                        of Life Test Review </a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 2 years ago</span><span
                                                                            className="kahoot-card__information-mobile">about 2 years ago</span></span><b> •
                                                                            2.1k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/search?filter=1&amp;creator=kategranata"><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">kategranata</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3544
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/a47c304a-9a8d-4e07-81f5-26da2f1b4b91?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3549  17 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/similar-figures/0029521f-72ae-4111-ab24-f4e98a795f27"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/similar-figures/0029521f-72ae-4111-ab24-f4e98a795f27"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/similar-figures/0029521f-72ae-4111-ab24-f4e98a795f27"
                                                                        data-functional-selector="kahoot-card__title-link">Similar
                                                                        Figures</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created almost 2 years ago</span><span
                                                                            className="kahoot-card__information-mobile">almost 2 years ago</span></span><b> •
                                                                            16.1k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/search?filter=1&amp;creator=sabren2"><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">sabren2</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3574
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/6788dd58-ea1d-4f97-a2ca-0716ba006582?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3579  10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/transcription-and-translation/003e3d3b-0cf9-4051-943d-319d2942a8ee"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/transcription-and-translation/003e3d3b-0cf9-4051-943d-319d2942a8ee"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/transcription-and-translation/003e3d3b-0cf9-4051-943d-319d2942a8ee"
                                                                        data-functional-selector="kahoot-card__title-link">Transcription
                                                                        and Translation</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created over 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">over 1 year ago</span></span><b> •
                                                                            2.7k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/search?filter=1&amp;creator=lyudmila.shemyakina"><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">lyudmila.shemyakina</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3604
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/9eba4871-d939-4d76-ad9f-58b31b7688cd?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3609  12 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/the-middle-ages/0041c5d7-8d80-4433-bd72-96de0209e208"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/the-middle-ages/0041c5d7-8d80-4433-bd72-96de0209e208"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/the-middle-ages/0041c5d7-8d80-4433-bd72-96de0209e208"
                                                                        data-functional-selector="kahoot-card__title-link">The
                                                                        Middle Ages</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 11 months ago</span><span
                                                                            className="kahoot-card__information-mobile">11 months ago</span></span><b> •
                                                                            21.4k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/History_by_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/8c15addf-3d3c-4900-a9ab-eee165dbc54c_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">History_by_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3635
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/d1ef83a3-685d-46a3-b843-3a09d0b8a6f2?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3640  22 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/german-conjunctions/004c0918-a075-45a8-8366-6cff8f41fdaf"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/german-conjunctions/004c0918-a075-45a8-8366-6cff8f41fdaf"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/german-conjunctions/004c0918-a075-45a8-8366-6cff8f41fdaf"
                                                                        data-functional-selector="kahoot-card__title-link">German
                                                                        Conjunctions</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 3 years ago</span><span
                                                                            className="kahoot-card__information-mobile">about 3 years ago</span></span><b> •
                                                                            705 plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/search?filter=1&amp;creator=FrauGeorgeMHS"><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">FrauGeorgeMHS</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3665
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/e40c541b-720d-480a-9997-4d0ed2d71a85?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3670  20 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/speed-distance-and-time/00583d4e-81cf-4225-b2ce-47e46f71892b"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/speed-distance-and-time/00583d4e-81cf-4225-b2ce-47e46f71892b"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/speed-distance-and-time/00583d4e-81cf-4225-b2ce-47e46f71892b"
                                                                        data-functional-selector="kahoot-card__title-link">Speed,
                                                                        Distance, and Time</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created almost 4 years ago</span><span
                                                                            className="kahoot-card__information-mobile">almost 4 years ago</span></span><b> •
                                                                            13.6k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/search?filter=1&amp;creator=laneyhill"><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">laneyhill</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section className="discover-group" data-functional-selector="discover-group"
                                 style="min-height: 1px;">
                            <header className="discover-group__header"><h1
                                className="discover-group__title">Popular</h1>
                                <button type="button" role="button" data-functional-selector="button"
                                        className="text-button discover-group__link"
                                        aria-label="Open Popular collection"> 3694 See
                                    all
                                </button>
                            </header>
                            <div className="discover-group__wrap">
                                <div className="discover-group__title-card">
                                    <div className="card title-card"
                                         style="background-image: url(&quot;https://s3-eu-west-1.amazonaws.com/kahoot-files/email-assets/Banners/collectionbox/halloween/Halloween_Popular.png&quot;);">
                                        <h1 className="title-card__title">Popular</h1>
                                        <button type="button" role="button" data-functional-selector="button"
                                                className="button button--cta-register button--full-width title-card__button"
                                                aria-label="Open Popular collection"> 3700 See
                                            collection
                                        </button>
                                    </div>
                                </div>
                                <section data-functional-selector="carousel"
                                         className="carousel discover-group__carousel">
                                    <div className="carousel__button-wrap carousel__button-wrap--previous">
                                        <button tabIndex="-1" disabled=""
                                                className="carousel__button carousel__button--hidden"
                                                data-functional-selector="carousel-button-previous"><span
                                            className="icon icon--rotate-180deg"><svg className="icon__svg"
                                                                                      data-functional-selector="icon"
                                                                                      focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__button-wrap carousel__button-wrap--next">
                                        <button tabIndex="-1" className="carousel__button"
                                                data-functional-selector="carousel-button-next"><span className="icon"><svg
                                            className="icon__svg" data-functional-selector="icon" focusable="false"><use
                                            className="icon__use" href="#arrow-right"></use></svg></span></button>
                                    </div>
                                    <div className="carousel__content"
                                         style="margin-right: -8px; margin-left: -8px; clip-path: inset(0px 8px);">
                                        <ul data-functional-selector="carousel-list" className="carousel__list"
                                            style="transform: translate3d(0%, 0px, 0px);">
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3719
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/35f7c876-89b6-4779-8a8d-9f57b5f81eea?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3724  13 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/2017-in-movies/3df0bc28-6ee5-4559-8fa6-9ef89d9dd5e8"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/2017-in-movies/3df0bc28-6ee5-4559-8fa6-9ef89d9dd5e8"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/2017-in-movies/3df0bc28-6ee5-4559-8fa6-9ef89d9dd5e8"
                                                                        data-functional-selector="kahoot-card__title-link">2017
                                                                        in Movies</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 10 months ago</span><span
                                                                            className="kahoot-card__information-mobile">10 months ago</span></span><b> •
                                                                            1.2m plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Evelien_Kahoot"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/fa320ba1-1430-4592-8f84-e4a6d733b895_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Evelien_Kahoot</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3750
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/cc6e3de8-0434-4dc2-bdae-d1db99b6822a?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3755  15 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/riddles/2e996487-8393-4689-b2c6-bf612ef0954e"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/riddles/2e996487-8393-4689-b2c6-bf612ef0954e"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/riddles/2e996487-8393-4689-b2c6-bf612ef0954e"
                                                                        data-functional-selector="kahoot-card__title-link">Riddles</a>
                                                                    </h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created almost 2 years ago</span><span
                                                                            className="kahoot-card__information-mobile">almost 2 years ago</span></span><b> •
                                                                            2.1m plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/search?filter=1&amp;creator=Lambie33"><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Lambie33</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3780
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/cd65b9c1-7228-421d-8e9d-261fd08beb08?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3785  21 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/2018-pop-music-clean/2c249143-1e1e-4be7-a91b-1dbd1b68d614"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/2018-pop-music-clean/2c249143-1e1e-4be7-a91b-1dbd1b68d614"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/2018-pop-music-clean/2c249143-1e1e-4be7-a91b-1dbd1b68d614"
                                                                        data-functional-selector="kahoot-card__title-link">2018
                                                                        POP MUSIC (CLEAN)</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created over 1 year ago</span><span
                                                                            className="kahoot-card__information-mobile">over 1 year ago</span></span><b> •
                                                                            1.1m plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/search?filter=1&amp;creator=22perlitk"><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">22perlitk</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3810
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/2bfa7857-8b41-46c5-8234-8a7b3c9c8704?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3815  24 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/who-is-this-singers/3f9c2bdc-b8f0-4ba3-a5a3-fccd42b21313"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/who-is-this-singers/3f9c2bdc-b8f0-4ba3-a5a3-fccd42b21313"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/who-is-this-singers/3f9c2bdc-b8f0-4ba3-a5a3-fccd42b21313"
                                                                        data-functional-selector="kahoot-card__title-link">Who
                                                                        is this? Singers</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 8 months ago</span><span
                                                                            className="kahoot-card__information-mobile">8 months ago</span></span><b> •
                                                                            533.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3841
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/d238f781-91ef-4651-bf99-11455945aa8e?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3846  25 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/emoji-quiz/229a4db0-5779-477a-95ae-2ee9a58e538c"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/emoji-quiz/229a4db0-5779-477a-95ae-2ee9a58e538c"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/emoji-quiz/229a4db0-5779-477a-95ae-2ee9a58e538c"
                                                                        data-functional-selector="kahoot-card__title-link">emoji
                                                                        quiz</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created almost 2 years ago</span><span
                                                                            className="kahoot-card__information-mobile">almost 2 years ago</span></span><b> •
                                                                            815.6k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/search?filter=1&amp;creator=AppleJuice123456"><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">AppleJuice123456</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3871
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/e5e61c56-d776-4c98-8bbf-4dfe0e5cb2cd?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3876  12 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/how-good-is-your-memory-part-1/5295a039-1f2f-478f-a8b3-63c1db168866"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/how-good-is-your-memory-part-1/5295a039-1f2f-478f-a8b3-63c1db168866"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/how-good-is-your-memory-part-1/5295a039-1f2f-478f-a8b3-63c1db168866"
                                                                        data-functional-selector="kahoot-card__title-link">How
                                                                        Good is Your Memory? Part 1</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 2 years ago</span><span
                                                                            className="kahoot-card__information-mobile">about 2 years ago</span></span><b> •
                                                                            898.5k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/GrettonDave"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/abaa6e1b-b2cf-46d8-a89a-51fdb01faf49_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">GrettonDave</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3902
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/3f22a4b3-9fb6-4971-9b6c-286dde8442cf?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3907  10 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/greatest-hits-of-2017/dcb5dfdb-4af8-4d83-9378-b0f455ccbf99"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/greatest-hits-of-2017/dcb5dfdb-4af8-4d83-9378-b0f455ccbf99"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/greatest-hits-of-2017/dcb5dfdb-4af8-4d83-9378-b0f455ccbf99"
                                                                        data-functional-selector="kahoot-card__title-link">Greatest
                                                                        Hits of 2017</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 10 months ago</span><span
                                                                            className="kahoot-card__information-mobile">10 months ago</span></span><b> •
                                                                            321k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/search?filter=1&amp;creator=RingstadTeacher"><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">RingstadTeacher</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3932
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/846476de-32f0-4b26-93cf-1d44194b68b6?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3937  11 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/general-trivia/bb6c79dc-0768-442e-9c26-d8c012af5ccf"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/general-trivia/bb6c79dc-0768-442e-9c26-d8c012af5ccf"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/general-trivia/bb6c79dc-0768-442e-9c26-d8c012af5ccf"
                                                                        data-functional-selector="kahoot-card__title-link">General
                                                                        trivia</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 7 months ago</span><span
                                                                            className="kahoot-card__information-mobile">7 months ago</span></span><b> •
                                                                            271.9k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3963
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/a3e6ab91-ccbd-4e48-b267-ba8538c84247?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3968  12 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/christmas-candy-and-sweets-around-the-world/67cc838c-208a-4498-8e18-4abb7ea87a74"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/christmas-candy-and-sweets-around-the-world/67cc838c-208a-4498-8e18-4abb7ea87a74"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/christmas-candy-and-sweets-around-the-world/67cc838c-208a-4498-8e18-4abb7ea87a74"
                                                                        data-functional-selector="kahoot-card__title-link">Christmas
                                                                        candy and sweets around the world</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created 11 months ago</span><span
                                                                            className="kahoot-card__information-mobile">11 months ago</span></span><b> •
                                                                            258.7k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/Espenthoresen"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/41770a03-eed0-434b-aade-a74f21565799_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">Espenthoresen</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li data-functional-selector="carousel-item" className="carousel__item"
                                                style="flex-basis: 33.3333%; width: 33.3333%; max-width: 33.3333%; padding-right: 8px; padding-left: 8px;">
                                                <div className="kahoot-card">
                                                    <div className="kahoot-card__content-wrap">
                                                        <div className="kahoot-card__content"> 3994
                                                            <div className="kahoot-card__image-wrapper"
                                                                 style="background-image: url(&quot;https://images-cdn.kahoot.it/3feceab5-a862-4abe-8aa6-bad04d2689d7?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=467&quot;);">
                                                                <div className="kahoot-card__image-wrapper-container">
                                                                    <span
                                                                        className="kahoot-card__number-of-questions"><span>  3999  14 <span
                                                                        className="kahoot-card__number-of-questions--desktop"> Questions</span><span
                                                                        className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                                                </div>
                                                                <a tabIndex="-1" className="kahoot-card__link"
                                                                   href="/details/guess-the-city/6613fabb-d483-4b2c-ad44-e6d657d793e2"></a>
                                                            </div>
                                                            <div className="kahoot-card__details"><a tabIndex="-1"
                                                                                                     className="kahoot-card__link-overlay"
                                                                                                     href="/details/guess-the-city/6613fabb-d483-4b2c-ad44-e6d657d793e2"></a>
                                                                <main className="kahoot-card__details-body">
                                                                    <div className="kahoot-card__title-group"><h1
                                                                        className="kahoot-card__title"><a
                                                                        className="kahoot-card__title-link"
                                                                        href="/details/guess-the-city/6613fabb-d483-4b2c-ad44-e6d657d793e2"
                                                                        data-functional-selector="kahoot-card__title-link">Guess
                                                                        the City</a></h1></div>
                                                                    <div className="kahoot-card__information">
                                                                        <div><span><span
                                                                            className="kahoot-card__information-desktop">Created about 2 months ago</span><span
                                                                            className="kahoot-card__information-mobile">about 2 months ago</span></span><b> •
                                                                            167.2k plays</b></div>
                                                                    </div>
                                                                </main>
                                                                <footer className="kahoot-card__details-footer"><span
                                                                    className="kahoot-card-kahoot-creator"><a
                                                                    className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                                                    href="/profile/KahootStudio"><div
                                                                    className="kahoot-creator__avatar"
                                                                    style="background-image: url(&quot;https://media.kahoot.it/9a88e164-a9d7-4868-bacf-67bb9a99751a_thumb&quot;);"></div><span
                                                                    data-functional-selector="kahoot-card-creator-text"
                                                                    className="kahoot-creator__text">KahootStudio</span></a></span>
                                                                    <div className="kahoot-card__action-buttons"></div>
                                                                </footer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                    <div style="max-width: 73.125em; margin: 0px auto 2rem; padding: 0px 4rem;">
                        <div className="grid grid--gutter-offset">
                            <div className="grid__span">
                                <div className="grid__wrapper">
                                    <button className="category-card" data-functional-selector="category-card"
                                            style="background-image: url(&quot;https://media.kahoot.it/8c1195ac-3dc8-45ed-b449-0ca143066a03_thumb&quot;);">
                                        <span className="category-card__text">Music</span></button>
                                </div>
                            </div>
                            <div className="grid__span">
                                <div className="grid__wrapper">
                                    <button className="category-card" data-functional-selector="category-card"
                                            style="background-image: url(&quot;https://media.kahoot.it/9e575ea7-8b56-4a31-951d-f3cf09f545fc_thumb&quot;);">
                                        <span className="category-card__text">History</span></button>
                                </div>
                            </div>
                            <div className="grid__span">
                                <div className="grid__wrapper">
                                    <button className="category-card" data-functional-selector="category-card"
                                            style="background-image: url(&quot;https://media.kahoot.it/4b2326c7-8eea-4d0d-99db-2b8ed06d860d_thumb&quot;);">
                                        <span className="category-card__text">Technology</span></button>
                                </div>
                            </div>
                            <div className="grid__span">
                                <div className="grid__wrapper">
                                    <button className="category-card" data-functional-selector="category-card"
                                            style="background-image: url(&quot;https://media.kahoot.it/17d025c2-1bb2-4d62-8a9b-408a3942a52f_thumb&quot;);">
                                        <span className="category-card__text">Movies</span></button>
                                </div>
                            </div>
                            <div className="grid__span">
                                <div className="grid__wrapper">
                                    <button className="category-card" data-functional-selector="category-card"
                                            style="background-image: url(&quot;https://media.kahoot.it/cc6b5789-2e47-4c65-b3d8-3007742e9b93_thumb&quot;);">
                                        <span className="category-card__text">Photography</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default withRouter(ListQuestions)