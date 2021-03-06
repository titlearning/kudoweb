import React, {Component} from 'react'
import {withRouter} from 'react-router'
import Header from '../components/partials/Header'
import SearchArea from '../components/partials/SearchArea'
import ListQuestions from '../components/ListQuestions'
import {database} from '../config/firebase';


class ListQuestion extends Component {

    constructor(props) {
        super(props)
        this.inputKeyword = this.inputKeyword.bind(this)
        this.state = {
            data: null,
            noQues: 0,
            keyword: ''
        };
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("user"))
        let uid = user.uid
        database.ref("/").child("questionGroups").on('value', (snapshot) => {
            var list = snapshot.val()
            var filterList = [];
            for (var prop in list) {
                if(list[prop].useridCreated === uid || list[prop].isPublic)
                {
                    filterList.push(list[prop])
                } 
            }
            console.log(filterList)
            // var questionList = snapshot.val();
            var questionList = filterList
            questionList = Object.keys(questionList).map(function(key) {
                return questionList[key];
            });
           
            questionList.reverse();

            this.setState({
                data: questionList,
                noQues: questionList.length
            });
        })
    }

    inputKeyword(keyword) {
        let user = JSON.parse(localStorage.getItem("user"))
        let uid = user.uid
        this.setState({
            keyword: keyword
        });
        database.ref("/").on('value', (snapshot) => {
            let questionList = snapshot.val().questionGroups;
            let val = keyword.toLowerCase();
            if (val)
            var group = []
            for (var i in questionList) {
                if (questionList.hasOwnProperty(i)) {
                   if(questionList[i].title.toLowerCase().includes(val) && (questionList[i].useridCreated === uid || questionList[i].isPublic))
                   {
                       console.log(questionList[i].title.toLowerCase().includes(val))
                       console.log(questionList[i].title.toLowerCase() + " - "+ val)
                       var question = questionList[i];
                       group.push(question)
                   }
                }
            }
                // questionList = questionList.filter(function (v) {
                //     let a = v.id+'';
                //     if (a.includes(keyword)) {
                //         return v
                //     }
                // });
            this.setState({
                data: group,
                noQues: group.length
            });
        })
    }

   
    deleteQuestionGroup = (questionGroupId) => {
        async function f($this) {
            let promise = database.ref(`/questionGroups/${questionGroupId}`).remove();
            await promise;
            $this.forceUpdate();
        }
         
        f(this);
    }

    render() {
        return (
            <div> 
                <Header/>
                <main role="main" className="layout__body layout__body--discover">
                    <SearchArea inputChanged={this.inputKeyword}/>
                    <ListQuestions data={this.state.data} noQues={this.state.noQues} deleteQuestionGroup={this.deleteQuestionGroup}/> 
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
        "padding-top": "56px"
    }
}

export default withRouter(ListQuestion)