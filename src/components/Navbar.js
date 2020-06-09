import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' exact>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact>
                            New Questions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact>
                            leaderboard
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default connect()(Navbar);