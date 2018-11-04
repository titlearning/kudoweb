import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Question from "../components/partials/Question"


class ListQuestions extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="search-results-result-list" data-functional-selector="search-results-result-list">
                <div className="search-results-result-list__content">
                    <div className="search-results-number-of-results">
                        <b>2,204</b><span>results</span>
                    </div>
                    {
                        this.props.data && this.props.data.map((object, i) => <Question data={object} key={i} id={object.id}/>)
                    }
                </div>
                <button type="button" role="button" data-functional-selector="load-more-button"
                        className="button button--flat search-results-result-list__load-more-button">Xem thêm câu hỏi
                </button>
            </div>
        );
    }
}

const styles = {};
export default withStyles(styles)(ListQuestions);