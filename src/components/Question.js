import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/_DATA";
import { handleToggleAnswer } from "../actions/questions"
import "./question.css";
import Avatar from "@material-ui/core/Avatar";

class Question extends Component {

    handleAnswer = (ans) => {
        const { dispatch } = this.props;
        dispatch(handleToggleAnswer(ans));
    }

    render() {
        
        const { authedUser, answered, users, question } = this.props;
        const askedBy = users[question.author];

        const oneVotes = question.optionOne.votes.length;
        const twoVotes = question.optionTwo.votes.length;
        const allVotes = oneVotes + twoVotes;
        
        const onePoll = parseInt((oneVotes / allVotes) * 100, 10);
        const twoPoll = parseInt((twoVotes / allVotes) * 100, 10);

        console.log(this.props);
        return (
            <div className="qview">
                <div className="qhead">
                    <h4 className="qtitle"> By: {askedBy.id} at {formatDate(question.timestamp)}</h4>
                    <Avatar alt={question.author} src={askedBy.avatarURL} />
                </div>
                    <h1 className="qpt">Would you rather...</h1>
                    {answered === 'no' && 
                    <div className="poll">
                        <button
                        className="qbb"
                        onClick={() =>
                            this.handleAnswer({
                            authedUser,
                            qid: question.id,
                            answer: 'optionOne'
                            })
                        }
                        ><h2>{question.optionOne.text}</h2></button>
                        <br />
                        <h1>OR</h1>
                        <br />
                        <button
                        className="qbb"
                        onClick={() =>
                            this.handleAnswer({
                            authedUser,
                            qid: question.id,
                            answer: 'optionTwo'
                            })
                        }
                        ><h2>{question.optionTwo.text}</h2></button>
                    </div>}
                   
                    {answered === 'yes' && 
                    <div className="poll">
                        <button
                        disabled={true}
                        className="qbb"
                        onClick={() =>
                            this.handleAnswer({
                            authedUser,
                            qid: question.id,
                            answer: 'optionOne'
                            })
                        }
                        >
                            <h2>{question.optionOne.text}</h2>
                            <h3>chosen by: {onePoll}% ({oneVotes})</h3>
                        </button>
                        <br />
                        <h1>OR</h1>
                        <br />
                        <button
                        disabled={true}
                        className="qbb"
                        onClick={() =>
                            this.handleAnswer({
                            authedUser,
                            qid: question.id,
                            answer: 'optionTwo'
                            })
                        }
                        >
                            <h2>{question.optionTwo.text}</h2>
                            <h3>chosen by: {twoPoll}% ({twoVotes})</h3>
                        </button>
                        <br />
                        <br />
                    <h2>You chose: {question.optionOne.votes.includes(authedUser)
                                        ? question.optionOne.text
                                        : question.optionTwo.text}</h2>
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