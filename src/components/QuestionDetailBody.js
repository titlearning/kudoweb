import React, { Component } from 'react';
import { Icon } from 'react-icons-kit'
import { list } from 'react-icons-kit/iconic/list'
import { task } from 'react-icons-kit/iconic/task'
import { ic_star_border } from 'react-icons-kit/md/ic_star_border'
import { bookmark } from 'react-icons-kit/entypo/bookmark'
import { cross } from 'react-icons-kit/entypo/cross'
import { database } from '../config/firebase'
import { withRouter } from 'react-router'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import IconCore from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase'

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

class QuestionDetailBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lisQuestion: [],
            questionGroup: {},
            showAllAnswer: false,
            show: false,
            open: false,
            selectedDelete: '',
            listQuestionId: this.props.listQuestionId,
            title: '',
            description: '',
            isEdit: false
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    deleteQuestion = (questionId) => {
        var groupId = this.state.questionGroup.id
        async function f($this) {
            let promise = database.ref(`/questionGroups/${groupId}/questionList/${questionId}`).remove();
            await promise;
            $this.forceUpdate();
        }
        this.handleClose()
        f(this);
        if (this.state.lisQuestion.length <= 1) {
            window.location.reload()
        }

    }

    handleOpen = (selectedDeleteId) => {
        this.setState({ open: true, selectedDelete: selectedDeleteId });
    };

    handleClose = () => {
        this.setState({ open: false, selectedDelete: '' });
    };

    componentDidMount() {
        database.ref('/questionGroups').child(this.state.listQuestionId).on('value', (snapshot) => {
            let result = snapshot.val();
            if (result.questionList != null) {
                var questionList = result.questionList;

                questionList = Object.keys(questionList).map(function (key) {
                    return questionList[key];
                });

                this.setState({
                    lisQuestion: questionList,
                    questionGroup: result,
                    title: result.title,
                    description: result.description
                });
            }
        })
    }

    showAnswer = (index) => {
        if (this.state.showAllAnswer || this.state.listAnswerShow[index]) {
            return (
                <div className="question__choices">
                    <ul className="choices">
                        {
                            this.state.lisQuestion[index].length > 0 &&
                            this.state.lisQuestion[index].answerList.map((item, i) => {
                                return (
                                    <li className="choices__choice" key={i}>
                                        <div>
                                            <span className="icon choices__choice-icon choices__choice-icon--diamond">
                                                <Icon icon={bookmark} size={25} />
                                            </span>
                                            <span>{item.content}</span>
                                        </div>
                                        {(item.position === this.state.lisQuestion.position) ? (
                                            <div className="choices__choice--correct">
                                                <Icon icon={task} size={25} />
                                            </div>) : (
                                                <div className="choices__choice--false">
                                                    <Icon icon={cross} size={25} />
                                                </div>
                                            )}
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            );
        }
    }

    showSpecificQuestionAnswer = () => {
        this.setState({
            show: !this.state.show
        });
    }

    makeid = () => {
        var text = "";
        var possible = "0123456789";

        for (var i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    onPlayClick = () => {
        let room = {};
        room.activities = [];
        room.questionGroup = this.state.questionGroup;
        room.questionGroupId = this.state.questionGroup.id;
        room.status = 0;
        room.roomPin = this.makeid();
        let result = database.ref('/rooms/').push(room);
        let key = result.key;
        this.props.history.push(`/lobby/${key}`);
    }

    onEdit = () => {
        if (this.state.isEdit) {
            // Update title
            database.ref(`/questionGroups/${this.state.questionGroup.id}`).update({
                title: this.state.title,
                description: this.state.description
            });
        }
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    render() {
        let user = JSON.parse(localStorage.getItem("user"))
        let uid = user.uid
        console.log(this.state.questionGroup)
        return (
            <main role="main" className="layout__body details-main-wrapper">
                <div className="details-content-block-wrapper">
                    <section className="details-content-block" data-functional-selector="details-content-block" style={{ width: '500px' }}>
                        <div data-functional-selector="details-kahoot-image" aria-label="Cover image" role="img" className="details-kahoot-image" style={{ backgroundImage: `url(https://images-cdn.kahoot.it/d884f403-e7c5-4540-a01a-b2a0bdff52c6?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=500)`, height: '305.1px' }}></div>
                        <div className="details-content-block__kahoot-title-and-details-wrapper">
                            <div className="kahoot-title" data-functional-selector="kahoot-title">
                                <h1 data-functional-selector="kahoot-title__heading" className="kahoot-title__heading"></h1>
                            </div>
                            {/* <span className="kahoot-creator__text">KahootStudioKahootStudioKahootStudioKahootStudioKahootStudioKahootStudioKahootStudioKahootStudioKahootStudioKahootStudioKahootStudio</span> */}
                            <div>
                                <TextField
                                    disabled={!this.state.isEdit}
                                    id="question-group-title"
                                    multiline
                                    fullWidth
                                    // error={true}
                                    label='Chủ đề'
                                    value={this.state.title}
                                    onChange={this.handleChangeTitle}
                                    // variant="outlined"
                                    style={{ marginBottom: '3vh', marginLeft: '2vh' }}
                                />
                                <TextField
                                    disabled={!this.state.isEdit}
                                    id="question-group-title"
                                    // error={true}
                                    multiline
                                    fullWidth
                                    label='Mô tả'
                                    value={this.state.description}
                                    onChange={this.handleChangeDescription}
                                    // variant="outlined"
                                    style={{ marginBottom: '3vh', marginLeft: '2vh' }}
                                />
                            </div>
                            <div className="details-action-buttons">
                                <div className="details-action-buttons__wrapper" data-functional-selector="details-action-buttons">
                                    <div className="details-action-buttons__group">

                                        {uid === this.state.questionGroup.useridCreated ?
                                            <button type="button" role="button" data-functional-selector="play-button" className="button button button--spacer details-action-buttons__play-button" onClick={this.onEdit}>
                                                {this.state.isEdit ? 'Lưu' : 'Chỉnh sửa'}
                                            </button>
                                            : null}
                                        <button type="button" role="button" data-functional-selector="play-button" className="button button button--spacer details-action-buttons__play-button" onClick={this.onPlayClick}>
                                            Chơi
                                        </button>
                                        {/* <button type="button" role="button" data-functional-selector="challenge-button" className="button button button--spacer details-action-buttons__challenge-button">
                                            Challenge
                                </button> */}
                                    </div>
                                    {/* <div className="details-action-buttons__group">
                                        <button type="button" role="button" data-functional-selector="button" className="icon-button favorite-button details-favourite-button favorite-button--desktop" aria-label="Toggle favorite Kahoot">
                                            <span className="icon-button__wrap">
                                                <span className="icon icon-button__icon icon" title="Favorite Kahoot">
                                                    <Icon icon={ic_star_border} size={25} />
                                                </span>
                                            </span>
                                        </button>
                                        <div aria-haspopup="true" className="action-menu details-actions-menu action-menu--static">
                                            <button type="button" role="button" data-functional-selector="detailsActionMenu__toggle" className="icon-button action-menu__icon-button icon-button--dot-style">
                                                <span className="icon-button__wrap">
                                                    <span className="icon icon-button__icon action-menu__toggle-icon">
                                                        <Icon icon={list} size={25} />
                                                    </span>
                                                    <div className="visibly-hidden" id="more__accessibility-description">Click to open action menu</div>
                                                </span>
                                            </button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <span className="kahoot-type-description">

                            </span>
                            {/* <div className="details-kahoot-details">
                                <div>
                                    <span>
                                        <span className="details-content-block__component--hidden-small-medium">
                                            <span>
                                          
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
                                        <div className="kahoot-creator__avatar" style={{ backgroundImage: `url(&https://images.kahoot.it/p/9a88e164-a9d7-4868-bacf-67bb9a99751a/130x130/0x0:400x400)` }}></div>
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
                                {/* <span className="details-kahoot-share-link-wrapper__share-text">Copy and share this playable link</span>
                                <span className="details-kahoot-share-link-wrapper__share-link">https://play.kahoot.it/#/k/48d0f730-ba84-4195-a1bd-996a276f1db1</span> */}
                            {/* </div>  */}
                        </div>
                    </section>
                </div>
                <div className="question-list-and-resource-credits">
                    <section data-functional-selector="question-list" className="question-list">
                        <ol className="question-list__items">
                            {
                                this.state.lisQuestion.map((question, index) => {
                                    return (
                                        <li data-functional-selector="question-list__item" className="question-list__item" key={index}>
                                            <div className="question">
                                                <div className="question__main" aria-label="question 1">
                                                    <div className="question-media" data-functional-selector="question-media">
                                                        <div className="question-media__text">
                                                            <div className="question-media__text-inner-wrapper"><span className="question-media__number">Q{index}:</span><span>{question.content}</span></div>
                                                        </div>
                                                        <div className="question-media__image" title="Mondadori Portfolio/Mondadori Portfolio/Getty Images">
                                                            <div className="background-image" aria-label="Question image" role="img" style={{ backgroundImage: `url(https://images-cdn.kahoot.it/e323956f-7868-4165-b2f3-10519d569fd6?auto=webp&amp;crop=3%3A2%2Csmart&amp;width=181)` }}>
                                                                <span className="question-media__duration">{question.timeout} giây</span>
                                                                {uid === this.state.questionGroup.useridCreated ?
                                                                    <Button variant="contained" color="secondary" aria-label="Menu" style={{ position: 'absolute', right: '5px' }} onClick={() => this.handleOpen(question.id)}>
                                                                        <IconCore>delete</IconCore>
                                                                        Xóa
                                                                </Button>
                                                                    : null}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-functional-selector="question__more-details" className="question__more-details">
                                                {
                                                    this.state.show &&
                                                    (<div className="question__choices">
                                                        <ul className="choices">
                                                            {
                                                                question.answerList.sort((a, b) => a.position > b.position).map((answer, i) => {
                                                                    return (
                                                                        <li className="choices__choice" key={i}>
                                                                            <div>
                                                                                <span className="icon choices__choice-icon choices__choice-icon--diamond">
                                                                                    <Icon icon={bookmark} size={25} />
                                                                                </span>
                                                                                <span>{answer.content}</span>
                                                                            </div>
                                                                            {(answer.position === question.rightAnswer) ? (
                                                                                <div className="choices__choice--correct">
                                                                                    <Icon icon={task} size={25} />
                                                                                </div>) : (
                                                                                    <div className="choices__choice--false">
                                                                                        <Icon icon={cross} size={25} />
                                                                                    </div>
                                                                                )}
                                                                        </li>
                                                                    )
                                                                })}
                                                        </ul>
                                                    </div>)
                                                }
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </section>
                    {/* <section className="kahoot-resources">
                        <header className="kahoot-resources__header">Resource credits</header>
                        <p className="kahoot-resources__body">Description:
                        <span className="kahoot-resources__main">@ Mariano Sayno / husayno.com/Moment/Getty Images</span>
                        </p>
                    </section> */}
                </div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()}>
                        <h3 id="modal-title" style={{ paddingBottom: '10px' }}>
                            Xóa câu hỏi
                        </h3>
                        <span id="simple-modal-description" style={{ textAlign: 'center' }}>
                            Bạn muốn xóa câu hỏi này?
                        </span>
                        <div id="simple-modal-description" style={{ textAlign: 'right' }}>
                            <Button variant="contained" color="secondary" aria-label="Menu" onClick={() => this.deleteQuestion(this.state.selectedDelete)}>
                                <IconCore>delete</IconCore>
                                Xóa
                            </Button>
                        </div>
                    </div>
                </Modal>
            </main>
        );
    }
}

export default withRouter(QuestionDetailBody)