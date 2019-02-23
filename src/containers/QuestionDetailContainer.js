import React, {Component} from 'react';
import {QuestionDetailHeader} from '../components/QuestionDetailHeader';
import QuestionDetailBody from '../components/QuestionDetailBody';

export class QuestionDetailContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            listQuestionId : this.props.listQuestionId
        }
    }

    render(){
        return(
            <div data-reactroot="" data-functional-selector="details-app">
                <div className="layout layout--details layout--new-topbar-active">
                    <div id="layout" className="layout__inner">
                        <div className="layout__body-wrapper">
                            <QuestionDetailHeader listQuestionId = {this.state.listQuestionId}/>
                            <QuestionDetailBody listQuestionId = {this.state.listQuestionId}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}