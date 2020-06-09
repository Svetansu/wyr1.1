import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import { handleInitialData } from "./shared";

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


        return _saveQuestionAnswer(obj)
        .then(() => dispatch(handleInitialData()))
        .then(() => console.log(obj))
        
    }
}

export function handleAddQuestion (obj) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return _saveQuestion({ ...obj, author: authedUser })
            .then(() => dispatch(handleInitialData()))
            .then(() => console.log({ ...obj, author: authedUser }))
    }
}