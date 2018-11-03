import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Header from '../../components/question/Header'

class QuestionGroupCreate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header title="Tạo bộ câu hỏi" />
                <div>
                    <TextField
                        id="question-group-title"
                        label="Tiêu đề (Bắt buộc)"
                        margin="normal"
                        variant="outlined"
                        style={{margin: '25vh 5vw 5vh 5vw', width: '90vw'}}
                        />
                    <TextField
                        id="question-group-description"
                        label="Mô tả"
                        multiline
                        rows="4"
                        rowsMax="4"
                        margin="normal"
                        variant="outlined"
                        style={{margin: '0vh 5vw 30vh 5vw', width: '90vw'}}
                        />
                </div>
            </div> 
        )
    }
}

export default QuestionGroupCreate;