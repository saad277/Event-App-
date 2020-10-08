import { FETCH_EVENTS, USER_FETCH_RANDOM_EVENTS, FETCH_ALL_EVENTS } from '../Actions/Events/ActionTypes'

const iState = {


    random: [],
    all: []
}








const eventReducer = (state = iState, action) => {


    switch (action.type) {


        case FETCH_EVENTS:

            return action.payload

        case USER_FETCH_RANDOM_EVENTS:
            return {
                ...state,
                random: action.payload
            }

        case FETCH_ALL_EVENTS:
            return {
                ...state,
                all: action.payload
            }
        default:
            return state
    }


}

export default eventReducer