import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import LoginPage from './LoginPage';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AnswerHere from './AnswerHere';
import Leaderboard from './Leaderboard';
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="apphead">
            <h1 className="headOne">Would You Rather?</h1>
          </div>
          <div>
              <Navbar authedUser={this.props.authedUser} users={this.props.users}/>
          </div>
          {this.props.authedUser === null
                ? <LoginPage />
                : <div className="app">
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/questions/:id' exact component={AnswerHere}/>
                    <Route path='/add' exact component={NewQuestion} />
                    <Route path='/leaderboard' exact component={Leaderboard} />
                  </div>}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  }
};

export default connect(mapStateToProps)(App);
