import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { database } from '../../config/firebase'

class Header extends Component {
    constructor(props) {
        super(props);

        this.createQuestion = this.createQuestion.bind(this);
    }

    createQuestion() {
        if(this.props.head_title == "TẠO CÂU HỎI") {
            var questionGroupId = this.props.question_group_id;
            var no_question;

            database.ref(`/questionGroups/${questionGroupId}/questionList`).on('value', (snapshot) => {
                var result = snapshot.val();
                no_question = result.length + 1;

                var rightAnswer = 0;
                if(this.props.key1) { rightAnswer = 1 };
                if(this.props.key2) { rightAnswer = 2 };
                if(this.props.key3) { rightAnswer = 3 };
                if(this.props.key4) { rightAnswer = 4 };

                var postData = {
                    content: this.props.title,
                    position: no_question,
                    id: no_question,
                    description: this.props.description,
                    timeout: this.props.time,
                    rightAnswer: rightAnswer,
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
                }

                database.ref(`/questionGroups/${questionGroupId}/questionList`).push(postData);
            })
        }
    }

    render() {
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