import { FETCH_EVENTS, USER_FETCH_RANDOM_EVENTS } from '../Actions/Events/ActionTypes'

const iState = {


    random: []
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
        default:
            return state
    }


}

export default eventReducer