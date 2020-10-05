import { FETCH_EVENTS, USER_FETCH_RANDOM_EVENTS } from '../Actions/Events/ActionTypes'

const iState = {}








const eventReducer = (state = iState, action) => {


    switch (action.type) {


        case FETCH_EVENTS:

            return action.payload

        default:
            return state
    }


}

export default eventReducer