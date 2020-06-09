import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/_DATA";
import { Link } from 'react-router-dom';

class QView extends Component {

    render() {
        const { authedUser, answered, users, question } = this.props;
        const askedBy = users[question.author];

        console.log(this.props);

        return (
            <div>
                <img src={askedBy.avatarURL} alt={question.author}/>
                <h1>{askedBy.id} {formatDate(question.timestamp)} {answered}</h1>
                <p>Would you rather <strong>{question.optionOne.text}</strong> OR <strong>{question.optionTwo.text}</strong>?</p>
                {answered === 'no' ?
                    <Link to={`/questions/${question.id}`}>
                        <button >Answer Now!</button>
                    </Link>
                    : <Link to={`/questions/${question.id}`}>
                            <button >View Poll</button>
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