import React, { Component } from "react";
import { connect } from "react-redux";
import "./leader.css";
import Avatar from "@material-ui/core/Avatar";

class Leaderboard extends Component {
  render() {
    const { users, score } = this.props;
    return (
      <div className="lboard">
        <h1 className="lt">Leaderboard</h1>
        {score.sort((a, b) => b.points - a.points).map(user => (
          <div key={user.id} className="scoreview">
            <div className="lhead">
                <h1 className="lpt">
                    {users[user.id].name} ({user.points} pts)
                </h1>
                <Avatar className="av" alt={users[user.id].name} src={users[user.id].avatarURL} />
            </div>
              <p>
                Questions answered: {Object.keys(users[user.id].answers).length}
              </p>
              <p>Questions asked: {users[user.id].questions.length}</p>
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