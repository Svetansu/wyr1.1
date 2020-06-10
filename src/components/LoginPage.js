import React, { Component } from 'react';
import './Login.css';
import { setAuthedUser } from '../actions/authedUsers';
import { connect } from 'react-redux';


class LoginPage extends Component {
    state = {
        userName: "sarahedo"
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
            <div className="login">
                <h1 className="lheader">Login</h1> 
                {users && 
                            Object.keys(users).filter(a => a===this.state.userName)
                            .map(a => <img className="limg" key={users[a].id} src={users[a].avatarURL} alt={users[a].id}/>)
                        }
                        <br />
                        <h2>Select User:</h2>
                <form onSubmit={this.handleSubmit} className="lform">
                    <select onChange={(e) => this.handleChange(e.target.value)}>
                        {users && 
                            Object.keys(users).map(a => (
                                <option key={a} value={a}>                                    
                                    {users[a].name}
                                </option>
                            ))
                        }
                    </select>
                    <br />
                    <button type="submit" className="lbtn">GO</button>
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