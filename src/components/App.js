import React, { Component } from 'react';
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
      <div className="App">
        <LoadingBar />
        {this.props.authedUser === null
              ? <LoginPage />
              : <div>
                  <div>
                    <Navbar />
                  </div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/questions/:id' exact component={AnswerHere}/>
                  <Route path='/add' exact component={NewQuestion} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                </div>}
      </div>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
};

export default connect(mapStateToProps)(App);
