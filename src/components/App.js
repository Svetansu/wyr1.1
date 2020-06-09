import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import Question from './Question';
import LoginPage from './LoginPage';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AnswerHere from './AnswerHere';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
      <div className="App">
        <div>
          <Navbar />
        </div>
        {this.props.authedUser === null
              ? <LoginPage />
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/questions/:id' exact component={AnswerHere}/>
                  <Route path='/add' exact component={NewQuestion} />
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
