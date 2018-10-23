import React, {Component} from 'react'
import {withRouter} from 'react-router'
import Header from '../components/partials/Header'
import SearchArea from '../components/partials/SearchArea'
import ListQuestions from '../components/ListQuestions'

class ListQuestion extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header/>
                <main role="main" className="layout__body layout__body--discover" >
                    <SearchArea/>
                    <ListQuestions/>
                </main>
            </div>
        )
    }
}

const styles = {
    box: {
        width: 200,
        height: 200,
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto'
    },
    main_padding: {
        "padding-top":"56px"
    }
}

export default withRouter(ListQuestion)