import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Header from '../../components/question/Header'

class QuestionGroupCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDes = this.handleChangeDes.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeDes(e) {
        this.setState({
            description: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Header head_title="TẠO BỘ CÂU HỎI" {...this.state}/>
                <div>
                    <TextField
                        id="question-group-title"
                        label="Tiêu đề (Bắt buộc)"
                        margin="normal"
                        value = {this.state.title}
                        onChange = {this.handleChangeTitle}
                        // variant="outlined"
                        style={{margin: '25vh 5vw 5vh 5vw', width: '90vw'}}
                        />
                    <TextField
                        id="question-group-description"
                        label="Mô tả"
                        multiline
                        rows="4"
                        rowsMax="4"
                        margin="normal"
                        value={this.state.description}
                        onChange={this.handleChangeDes}
                        // variant="outlined"
                        style={{margin: '0vh 5vw 30vh 5vw', width: '90vw'}}
                        />
                </div>
            </div> 
        )
    }
}

export default QuestionGroupCreate;