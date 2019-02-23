import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Question from "../components/partials/Question"


class ListQuestions extends React.Component {
    constructor(props) {
        super(props)   
    }

    deleteQuestionGroup = (questionGroupId) => {
        async function f($this) {
            let promise = $this.props.deleteQuestionGroup(questionGroupId);
            await promise;
            $this.forceUpdate();
        }

        f(this);
    }

    render() {
        return (

            <div className="search-results-result-list" data-functional-selector="search-results-result-list" style={{paddingTop: '200px'}}>
                <div className="search-results-result-list__content">
                    <div className="search-results-number-of-results" style={{fontSize: '20px'}}>
                        <b>{this.props.noQues}</b> <span>bộ câu hỏi</span>
                    </div>
                    {  
                        this.props.data && this.props.data.map((object, i) => <Question data={object} key={object.id} id={object.id} deleteQuestionGroup={this.deleteQuestionGroup}/>)
                    }
                </div>
            </div>
        );
    }
}

const styles = {};
export default withStyles(styles)(ListQuestions);