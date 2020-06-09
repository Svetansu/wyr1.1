import React, { Component } from 'react';
import { setAuthedUser } from '../actions/authedUsers';
import { connect } from 'react-redux';

class LoginPage extends Component {
    state = {
        userName: ''
    }

    handleChange = (value) => {
        this.setState(()=> ({
            userName: value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const uname = this.state.userName === "" ? "sarahedo" : this.state.userName; 
        dispatch(setAuthedUser(uname));
    }

    render() {

        const { users } = this.props;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select onChange={(e) => this.handleChange(e.target.value)}>
                        {users && 
                            Object.keys(users).map(a => (
                                <option key={a} value={a}>                                    
                                    {users[a].name}
                                </option>
                            ))
                        }
                    </select>
                    <button type="submit">GO</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps ({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LoginPage);