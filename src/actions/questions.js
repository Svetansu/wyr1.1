import { _saveQuestionAnswer } from "../utils/_DATA";
import { handleInitialData } from "./shared";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const TOGGLE_ANSWER = 'TOGGLE_ANSWER';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

  
export default function handleToggleAnswer (obj) {
    return (dispatch) => {
      return _saveQuestionAnswer({ 
          ...obj
        })
        .then(() => dispatch(handleInitialData(obj.authedUser)))
        .then(() => console.log(obj))
        
    }
}