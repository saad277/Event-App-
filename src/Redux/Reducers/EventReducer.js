import { FETCH_EVENTS } from '../Actions/Events/ActionTypes'

const iState = null








const eventReducer = (state = iState, action) => {


    switch (action.type) {


        case FETCH_EVENTS:

            return action.payload

        default:
            return state
    }


}

export default eventReducer