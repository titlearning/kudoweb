import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Question from "../components/partials/Question"


class ListQuestions extends React.Component {

    render() {
        return (
            <div className="search-results-result-list" data-functional-selector="search-results-result-list">
                <div className="search-results-result-list__content">
                    <div className="search-results-number-of-results">
                        <b>2,204</b><span>results</span>
                    </div>
                    {/*cau hoi*/}
                    <Question/>
                    <Question/>
                    <Question/>
                </div>
                <button type="button" role="button" data-functional-selector="load-more-button"
                        className="button button--flat search-results-result-list__load-more-button">See
                    more results</button>
            </div>
        );
    }
}

const styles = {};
export default withStyles(styles)(ListQuestions);