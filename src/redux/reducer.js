import { CHANGE_USER, CHANGE_SCORE } from "./actionsTypes";

const initialState = {
    user_name: '',
    score: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {       
        case CHANGE_USER:
            return {
                ...state,
                user_name: action.payload,
            };
        case CHANGE_SCORE:
            return {
                ...state,
                score: action.payload,
            };
    }
    return state;
}

export default reducer
