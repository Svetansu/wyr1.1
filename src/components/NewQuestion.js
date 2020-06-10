import React, { Component } from 'react';
import { handleAddQuestion } from '../actions/questions';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import "./question.css";


class NewQuestion extends Component {
   state = {
       optionOneText: "",
       optionTwoText: "",
       redir: false
   }

   handleChangeOne = (e) => {
       const input = e.target.value
       this.setState(() => ({
            optionOneText: input
       }))
   }

   handleChangeTwo = (e) => {
        const input = e.target.value
        this.setState(() => ({
            optionTwoText: input
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const { optionOneText, optionTwoText } = this.state;
        const { dispatch } = this.props;
        dispatch(handleAddQuestion({
            optionOneText,
            optionTwoText
        }));
        this.setState(() => ({
            redir: true
        }))
        console.log(optionOneText, optionTwoText);
    }

    render() {
        const { optionOneText, optionTwoText, redir } = this.state;

        if(redir) {
            return <Redirect to='/' />
        }

        return (
            <div className="qview">
                <h1>New Question:</h1>
                <div className="poll">
                    <h1>Would you rather...</h1>
                    <form onSubmit={this.handleSubmit} className="qform">
                        <input
                        className="fc"
                        placeholder="Option one"
                        onChange={this.handleChangeOne}
                        value={optionOneText}
                        />
                        <br />
                        <h1>OR</h1>
                        <br />
                        <input
                        className="fc"
                        placeholder="Option two"
                        onChange={this.handleChangeTwo}
                        value={optionTwoText}
                        />
                        <br />
                        <button
                            className="qbb"
                            type="submit"
                            disabled={!optionOneText || !optionTwoText}
                        ><h2>GO!</h2></button>
                    </form>
                </div>
                
            </div>
        )
   }
}

export default connect()(NewQuestion)