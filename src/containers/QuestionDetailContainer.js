import React, {Component} from 'react';
import {QuestionDetailHeader} from '../components/QuestionDetailHeader';
import {QuestionDetailBody} from '../components/QuestionDetailBody';

export class QuestionDetailContainer extends Component{

    render(){
        return(
            <div data-reactroot="" data-functional-selector="details-app">
                <div className="layout layout--details layout--new-topbar-active">
                    <div id="layout" className="layout__inner">
                        <div className="layout__body-wrapper">
                            <QuestionDetailHeader />
                            <QuestionDetailBody />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}