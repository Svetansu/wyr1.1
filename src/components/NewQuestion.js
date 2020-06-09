import React, { Component } from 'react';
import { handleAddQuestion } from '../actions/questions';
import { connect } from "react-redux";

class NewQuestion extends Component {
   state = {
       optionOneText: "",
       optionTwoText: ""
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
        console.log(optionOneText, optionTwoText);
    }

    render() {
        const { optionOneText, optionTwoText } = this.state;
        return (
            <div>
                <h1>Would you rather:</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                    placeholder="Option one"
                    onChange={this.handleChangeOne}
                    value={optionOneText}
                    />
                    <br />
                    <input
                    placeholder="Option two"
                    onChange={this.handleChangeTwo}
                    value={optionTwoText}
                    />
                    <br />
                    <button type="submit">GO</button>
                </form>
            </div>
        )
   }
}

export default connect()(NewQuestion)