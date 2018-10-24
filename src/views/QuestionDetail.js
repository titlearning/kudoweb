import React, { Component } from 'react'
import {QuestionDetailContainer} from '../containers/QuestionDetailContainer' 
import '../styles/questionDetail.css'

export default class QuestionDetail extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div data-reactroot="" data-functional-selector="login-app">
                <QuestionDetailContainer/>
            </div>
            
        )        
    }
}
