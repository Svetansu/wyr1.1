import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { users, score } = this.props;
    return (
      <div>
        <h2>Leaderboard</h2>
        {score.sort((a, b) => b.points - a.points).map(user => (
          <div key={user.id}>
            <div>
              <img
                src={users[user.id].avatarURL}
                alt={`${users[user.id].avatarURL}`}
              />
              <h3>
                {users[user.id].name} ({user.points} pts)
              </h3>
              <hr />
              <p>
                Questions answered: {Object.keys(users[user.id].answers).length}
              </p>
              <p>Questions asked: {users[user.id].questions.length}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const uIDs = Object.keys(users)
  const score = uIDs.map(id => ({
    id: id,
    points:
      Object.keys(users[id].answers).length +
      Object.keys(users[id].questions).length
  }))

  return {
    score,
    users
  }
}

export default connect(mapStateToProps)(Leaderboard)