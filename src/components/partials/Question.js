import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoKudo from '../../images/kudo.png';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
import { database } from '../../config/firebase';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      position: 'absolute',
      backgroundColor: 'white',
      width: '50%',
      padding: '3%',
      textAlign: 'center'
    };
}

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            id: this.props.id,
            open: false
        }
    }

    deleteQuestionGroup = (questionGroupId) => {
        async function f($this) {
            let promise = $this.props.deleteQuestionGroup(questionGroupId);
            await promise;
            $this.setState({ open: false });
        }

        f(this);
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        let user = JSON.parse(localStorage.getItem("user"))
        let uid = user.uid
        return (
            <div className="search-result-kahoot-card"
                data-functional-selector="search-result-kahoot-card">
                <div
                    className="kahoot-card kahoot-card--list-view kahoot-card--with-action-menu kahoot-card--with-example-question">
                    <div className="kahoot-card__content-wrap">
                        <div className="kahoot-card__content">
                            <div
                                className="kahoot-card__image-wrapper kahoot-card__image-wrapper--list-view" style={{backgroundImage: `url(${logoKudo})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
                                <div className="kahoot-card__image-wrapper-container">
                                    <div className="kahoot-card__placeholder-image"><span
                                        className="icon kahoot-card__placeholder-image-icon"><svg
                                            className="icon__svg" data-functional-selector="icon"
                                            focusable="false"><use className="icon__use"
                                                href="#logo-shapes"></use></svg></span>
                                    </div>
                                    <span className="kahoot-card__number-of-questions"><span>{ this.state.data.questionList ? Object.keys(this.state.data.questionList).length : 0}<span
                                        className="kahoot-card__number-of-questions--desktop"> câu hỏi</span><span
                                            className="kahoot-card__number-of-questions--mobile"></span></span></span>
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
                                                    className="kahoot-creator__text"></span></a></span>
                                        <div><span><span className="kahoot-card__information-desktop"></span><span
                                            className="kahoot-card__information-mobile"></span></span><b>
                                            </b></div>
                                    </div>
                                    
                                    {uid === this.state.data.useridCreated ? 
                                        <Button variant="contained" color="secondary" aria-label="Menu" style={{position: 'absolute', right: '5px'}} onClick={() => this.handleOpen()}>
                                        <Icon>delete</Icon>
                                        Xóa
                                    </Button>
                                    : null}
                                </main>
                                <footer
                                    className="kahoot-card__details-footer kahoot-card__details-footer--list-view kahoot-card__details-footer--with-example-question">
                                    <span
                                        className="kahoot-card-kahoot-creator kahoot-card-kahoot-creator--list-view"><a
                                            className="kahoot-creator kahoot-card-kahoot-creator kahoot-card-kahoot-creator__footer"
                                            href="/search?filter=1&amp;creator=Thanhvan_63"><span
                                                data-functional-selector="kahoot-card-creator-text"
                                                className="kahoot-creator__text"></span></a></span><span
                                                    className="kahoot-card__example-question"><b></b><span></span></span>
                                    <div className="kahoot-card__action-buttons"></div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                    <div style={getModalStyle()}>
                        <h3 id="modal-title" style={{paddingBottom: '10px'}}>
                        Xóa bộ câu hỏi
                        </h3>
                        <span id="simple-modal-description" style={{textAlign: 'center'}}>
                        Bạn muốn xóa bộ câu hỏi này?
                        </span>
                        <div id="simple-modal-description" style={{textAlign: 'right'}}>
                            <Button variant="contained" color="secondary" aria-label="Menu" onClick={() => this.deleteQuestionGroup(this.state.id)}>
                                <Icon>delete</Icon>
                                Xóa
                            </Button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

const styles = {};
export default withStyles(styles)(Question);