import React, { Component } from 'react'
import {QuestionDetailContainer} from '../containers/QuestionDetailContainer' 
import '../styles/questionDetail.css'

export default class QuestionDetail extends Component{

    constructor(props){
        super(props);
        const id = this.props.match.params.id;
        this.state = {
            listQuestionId: id
        };
    }

    render(){
        
        return(
            <div data-reactroot="" data-functional-selector="login-app">
                <QuestionDetailContainer listQuestionId={this.state.listQuestionId}/>
            </div>
            
        )        
    }
}
