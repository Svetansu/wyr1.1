import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Dashboard</h1>
                <ul>
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <p>ID: {id}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps ({ questions }) {
    return {
      questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);