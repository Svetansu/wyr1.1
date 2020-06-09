import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import LoginPage from './LoginPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        {this.props.authedUser === null
              ? <LoginPage />
              : <NewQuestion />}
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
};

export default connect(mapStateToProps)(App);
