import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import QView from './QView';


class Dashboard extends Component {
    state = {
        showAnswered: false
    }

    handleSwitch = (e) => {
        this.setState((prev) => ({
            showAnswered: !prev.showAnswered
        }))
    }
    
    render() {
        const { answered, unanswered } = this.props;
        return (
            <div>
                <h1>Dashboard</h1>
                <button onClick={this.handleSwitch}>
                    {!this.state.showAnswered
                        ? <p>view answered questions</p>
                        : <p>view unanswered questions</p>}
                </button>
                {!this.state.showAnswered && 
                    <ul>
                        {this.props.unanswered.map((id) => (
                            <li key={id}>
                                <QView id={id}/>
                            </li>
                        ))}
                    </ul>}
                {this.state.showAnswered && 
                    <ul>
                        {this.props.answered.map((id) => (
                            <li key={id}>
                                <QView id={id}/>
                            </li>
                        ))}
                    </ul>}
            </div>
        );
    }
}

function mapStateToProps ({ questions, authedUser, users }) {
    const answered = Object.keys(users[authedUser].answers)
                        .sort((a,b)=>questions[b].timestamp-questions[a].timestamp);
    const unanswered = Object.keys(questions)
                        .filter(que => !answered.includes(que))
                        .sort((a,b)=>questions[b].timestamp-questions[a].timestamp);
    return {
      answered,
      unanswered
    }
}

export default connect(mapStateToProps)(Dashboard);