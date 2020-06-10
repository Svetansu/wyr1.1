import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUsers";

class Navbar extends Component {
    handleOnClick = () => {
        const { dispatch } = this.props;
        dispatch(setAuthedUser(null));
    }
    render() {
        const { authedUser } = this.props;
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName='active'>
                            New Questions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'>
                            leaderboard
                        </NavLink>
                    </li>
                </ul>
                    <div>
                        <button onClick={this.handleOnClick}>
                            LogOut
                        </button>
                    </div>
            </nav>
        )
    }
}

export default connect()(Navbar);