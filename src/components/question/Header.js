import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { firebaseApp, database } from '../../config/firebase';
import { Redirect } from 'react-router-dom';
import { link } from 'fs';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectGroupDetail: false,
            no_question: 0,
            linkRedirect: ''
        };

        this.createQuestion = this.createQuestion.bind(this);
    }

    createQuestion(e) {
        e.preventDefault();
        if(this.props.head_title == "TẠO CÂU HỎI") {
            var questionGroupId = this.props.question_group_id;
           
            database.ref(`/questionGroups/${questionGroupId}/questionList`).on('value', (snapshot) => {
                var result = snapshot.val();

                result = Object.values(result).map(function (obj) {
                    return obj;
                });

                this.setState({
                    no_question: result.length + 1
                })
            })

            var rightAnswer = 0;
            if(this.props.key1) { rightAnswer = 1 };
            if(this.props.key2) { rightAnswer = 2 };
            if(this.props.key3) { rightAnswer = 3 };
            if(this.props.key4) { rightAnswer = 4 };

            var questionRefKey = database.ref(`/questionGroups/${questionGroupId}/questionList`).push().key;
            
            database.ref(`/questionGroups/${questionGroupId}/questionList/${questionRefKey}`).update({
                id: questionRefKey,
                content: this.props.title,
                description: this.props.description,
                timeout: this.props.time,
                status: 0,
                rightAnswer: rightAnswer,
                position: this.state.no_question,
                answerList: [
                    {
                        content: this.props.answer1,
                        position: 1
                    },
                    {
                        content: this.props.answer2,
                        position: 2
                    },
                    {
                        content: this.props.answer3,
                        position: 3
                    },
                    {
                        content: this.props.answer4,
                        position: 4
                    }
                ]
            });

            var image = this.props.image;

            if(image) {
                firebaseApp.storage().ref(`/question/images/${questionGroupId}/${questionRefKey}`).put(image).then(function(snapshot) {
                    console.log('Uploaded a blob or file!');
                });
            }

            
            this.setState({
                linkRedirect: `/question_detail/${this.props.question_group_id}`,
                redirectGroupDetail: true
            })
        } else if (this.props.head_title == "TẠO BỘ CÂU HỎI") {
            var user = JSON.parse(localStorage.getItem('user'));
            
            var key = database.ref(`/questionGroups`).push({
                questionList: [],
                type: 1,
                title: this.props.title,
                description: this.props.description,
                useridCreated: user.uid,
                usernameCreated: user.displayName
            }).key;
            
            database.ref(`/questionGroups/${key}`).update({
                id: key
            })

            this.setState({
                linkRedirect: `/`,
                redirectGroupDetail: true
            })
        }
    }

    render() {
        var linkRedirect = this.state.linkRedirect;
        if(this.state.redirectGroupDetail) {
            return <Redirect to={linkRedirect} />
        }

        return (
            <AppBar absolute='fixed' style={{flexGrow: 1, backgroundColor: '#333'}}>
                <Toolbar>
                    <Button color="inherit" aria-label="Menu">
                        <Icon>close</Icon>
                        Đóng
                    </Button>
                    <Typography variant="h6" color="inherit" style={{ flexGrow: 1, textAlign: 'center'}}>
                        {this.props.head_title}
                    </Typography>
                    <Button variant="contained" color='secondary' onClick={this.createQuestion}>Thêm câu hỏi</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header; 