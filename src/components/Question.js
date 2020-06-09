import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";

class Question extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Questionssss
            </div>
        );
    }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id];
  
    return {
      authedUser,
      question: question
        ? formatQuestion(question, question.optionOne.text, question.optionTwo.text)
        : null
    };
  }

export default connect(mapStateToProps)(Question);