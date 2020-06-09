import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/_DATA";
import handleToggleAnswer from "../actions/questions"

class Question extends Component {

    handleAnswer = (ans) => {
        const { dispatch } = this.props;
        dispatch(handleToggleAnswer(ans));
    }

    render() {
        
        const { authedUser, answered, users, question } = this.props;
        const askedBy = users[question.author];

        console.log(this.props);
        return (
            <div>
                <img src={askedBy.avatarURL} alt={question.author}/>
                <h1>{askedBy.id} {formatDate(question.timestamp)} {answered}</h1>
                    <h4>Would you rather:</h4>
                    <p>A: {question.optionOne.text}</p>
                    {answered === 'no' && 
                    <div>
                        <button
                        onClick={() =>
                            this.handleAnswer({
                            authedUser,
                            qid: question.id,
                            answer: 'optionOne'
                            })
                        }
                        ></button>
                    </div>}
                    
                    <p>B: {question.optionTwo.text}</p>
                    {answered === 'no' && 
                    <div>
                        <button
                        onClick={() =>
                            this.handleAnswer({
                            authedUser,
                            qid: question.id,
                            answer: 'optionTwo'
                            })
                        }
                        ></button>
                    </div>}
            </div>
        );
    }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id];
    const answered = !users[authedUser].answers[id] ? 'no': 'yes';
  
    return {
      authedUser,
      answered,
      users,
      question: question
        ? { ...question }
        : null
    };
  }

export default connect(mapStateToProps)(Question);