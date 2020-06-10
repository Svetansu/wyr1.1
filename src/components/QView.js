import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/_DATA";
import { Link } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";
import "./question.css";

class QView extends Component {

    render() {
        const { answered, users, question } = this.props;
        const askedBy = users[question.author];

        console.log(this.props);

        return (
            <div className="qview">
                <div className="qhead">
                    <h4 className="qtitle"> By: {askedBy.id} at {formatDate(question.timestamp)}</h4>
                    <Avatar className="ab" alt={question.author} src={askedBy.avatarURL} />
                </div>
                <h2 className="ques">Would you rather <strong>{question.optionOne.text}</strong> OR <strong>{question.optionTwo.text}</strong>?</h2>
                {answered === 'no' ?
                    <Link to={`/questions/${question.id}`}>
                        <button className="qb">Answer Now!</button>
                    </Link>
                    : <Link to={`/questions/${question.id}`}>
                            <button className="vb">View Poll</button>
                        </Link>}
            </div>
        )
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

export default connect(mapStateToProps)(QView);