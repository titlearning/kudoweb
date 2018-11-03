import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            id: this.props.id
        }
    }
    render() {
        return (
            <div className="search-result-kahoot-card"
                data-functional-selector="search-result-kahoot-card">
                <div
                    className="kahoot-card kahoot-card--list-view kahoot-card--with-action-menu kahoot-card--with-example-question">
                    <div className="kahoot-card__content-wrap">
                        <div className="kahoot-card__content">
                            <div
                                className="kahoot-card__image-wrapper kahoot-card__image-wrapper--list-view">
                                <div className="kahoot-card__image-wrapper-container">
                                    <div className="kahoot-card__placeholder-image"><span
                                        className="icon kahoot-card__placeholder-image-icon"><svg
                                            className="icon__svg" data-functional-selector="icon"
                                            focusable="false"><use className="icon__use"
                                                href="#logo-shapes"></use></svg></span>
                                    </div>
                                    <span className="kahoot-card__number-of-questions"><span>{this.state.data.questionList ? this.state.data.questionList.length : 0}<span
                                        className="kahoot-card__number-of-questions--desktop"> questions</span><span
                                            className="kahoot-card__number-of-questions--mobile">Qs</span></span></span>
                                </div>
                                <Link tabIndex="-1" className="kahoot-card__link"
                                    to={'/question_detail/' + (this.state.id != null ? this.state.id : 0)}></Link>
                            </div>
                            <div className="kahoot-card__details"><Link tabIndex="-1"
                                className="kahoot-card__link-overlay"
                                to={'/question_detail/' + (this.state.id != null ? this.state.id : 0)}></Link>
                                <main className="kahoot-card__details-body">
                                    <div className="kahoot-card__title-group"><h1
                                        className="kahoot-card__title kahoot-card__title--list-view"><Link
                                            className="kahoot-card__title-link"
                                            to={'/question_detail/' + (this.state.id != null ? this.state.id : 0)}
                                            data-functional-selector="kahoot-card__title-link">{this.state.data.title}</Link>
                                    </h1>
                                        <button type="button" role="button"
                                            data-functional-selector="kahoot-card-favorite-button"
                                            className="icon-button favorite-button kahoot-card__favorite-button favorite-button--desktop"
                                            aria-label="Toggle favorite Kahoot"><span
                                                className="icon-button__wrap"><span
                                                    className="icon icon-button__icon icon"
                                                    title="Favorite Kahoot"><svg className="icon__svg"
                                                        data-functional-selector="icon"
                                                        focusable="false"><use
                                                            className="icon__use"
                                                            href="#favourite-unselected"></use></svg></span></span>
                                        </button>
                                        <div aria-haspopup="true"
                                            className="action-menu kahoot-card__action-menu">
                                            <button type="button" role="button"
                                                data-functional-selector="kahoot-card-action-menu__toggle"
                                                className="icon-button action-menu__icon-button icon-button--dot-style">
                                                <span className="icon-button__wrap"><span
                                                    className="icon icon-button__icon action-menu__toggle-icon"><svg
                                                        className="icon__svg"
                                                        data-functional-selector="icon" focusable="false"><use
                                                            className="icon__use"
                                                            href="#more"></use></svg></span><div
                                                                className="visibly-hidden"
                                                                id="more__accessibility-description">Click to open menu</div></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="kahoot-card__information kahoot-card__information--list-view">
                                        <span
                                            className="kahoot-card-kahoot-creator kahoot-card-kahoot-creator--list-view"><a
                                                className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__details"
                                                href="/search?filter=1&amp;creator=Thanhvan_63"><span
                                                    data-functional-selector="kahoot-card-creator-text"
                                                    className="kahoot-creator__text">Thanhvan_63</span></a></span>
                                        <div><span><span className="kahoot-card__information-desktop">Created almost 3 years ago</span><span
                                            className="kahoot-card__information-mobile">almost 3 years ago</span></span><b> •
                                            104 plays</b></div>
                                    </div>
                                </main>
                                <footer
                                    className="kahoot-card__details-footer kahoot-card__details-footer--list-view kahoot-card__details-footer--with-example-question">
                                    <span
                                        className="kahoot-card-kahoot-creator kahoot-card-kahoot-creator--list-view"><a
                                            className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                            href="/search?filter=1&amp;creator=Thanhvan_63"><span
                                                data-functional-selector="kahoot-card-creator-text"
                                                className="kahoot-creator__text">Thanhvan_63</span></a></span><span
                                                    className="kahoot-card__example-question"><b>Example question: </b><span>Đây là ruộng bậc thang o tỉnh nào?</span></span>
                                    <div className="kahoot-card__action-buttons"></div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {};
export default withStyles(styles)(Question);