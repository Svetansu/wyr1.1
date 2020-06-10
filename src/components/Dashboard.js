import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                {!this.state.showAnswered
                        ? <h1 className="dhead">Unanswered Questions</h1>
                        : <h1 className="dhead">Answered Questions</h1>}
                <button onClick={this.handleSwitch} className="switch">
                    {!this.state.showAnswered
                        ? <p>view answered questions</p>
                        : <p>view unanswered questions</p>}
                </button>
                {!this.state.showAnswered && 
                    <ul className="dash">
                        {unanswered.map((id) => (
                            <li key={id}>
                                <QView id={id}/>
                            </li>
                        ))}
                    </ul>}
                {this.state.showAnswered && 
                    <ul className="dash">
                        {answered.map((id) => (
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