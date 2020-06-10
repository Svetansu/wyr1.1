import React, { Component, Fragment } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUsers";
import Avatar from "@material-ui/core/Avatar";

class Navbar extends Component {
    handleOnClick = () => {
        const { dispatch } = this.props;
        dispatch(setAuthedUser(null));
    }
    render() {
        const { authedUser, users } = this.props;
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
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'>
                            leaderboard
                        </NavLink>
                    </li>
                </ul>
                    {authedUser &&
                        <Fragment>
                            <div>
                            <button onClick={this.handleOnClick} className="but">
                                LOGOUT
                            </button>
                            </div>
                            <Avatar alt={users[authedUser].name+' profile picture'} src={users[authedUser].avatarURL} />
                        </Fragment>
                            
                        }
            </nav>
        )
    }
}

export default connect()(Navbar);