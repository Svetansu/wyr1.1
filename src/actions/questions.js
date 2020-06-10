import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import { handleInitialData } from "./shared";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const TOGGLE_ANSWER = 'TOGGLE_ANSWER';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}



export function handleToggleAnswer (obj) {
    return (dispatch) => {

        dispatch(showLoading())
        return _saveQuestionAnswer(obj)
        .then(() => dispatch(handleInitialData()))
        .then(() => console.log(obj))
        .then(() => dispatch(hideLoading()))
        
    }
}

export function handleAddQuestion (obj) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading())
        return _saveQuestion({ ...obj, author: authedUser })
            .then(() => dispatch(handleInitialData()))
            .then(() => dispatch(hideLoading()))
            .then(() => console.log({ ...obj, author: authedUser }))
            
    }
}