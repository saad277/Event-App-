import { FETCH_EVENTS, USER_FETCH_RANDOM_EVENTS, FETCH_ALL_EVENTS, FETCH_NEARBY, JOIN_EVENT } from '../Actions/Events/ActionTypes'

import { LOG_OUT } from '../Actions/Auth/ActionTypes'

const iState = {


    random: [],
    all: [],
    nearby: []
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
        case FETCH_NEARBY:
            return {
                ...state,
                nearby: action.payload
            }

        case JOIN_EVENT:
            console.log("joinnnnning")

            let updated = action.payload

            let newAll = state.all.map((x) => {

                if (x._id == updated._id) {

                    return updated
                }
                else {
                    return x;
                }

            })

            let newRandom = state.random.map((x) => {

                if (x._id == updated._id) {

                    return updated
                }
                else {
                    return x;
                }

            })

            let newNearby = state.nearby.map((x) => {

                if (x._id == updated._id) {

                    return updated
                }
                else {
                    return x;
                }

            })




            return {

                ...state,
                all: newAll,
                random: newRandom,
                nearby: newNearby

            }


        case LOG_OUT:
            return {
                ...state,
                random: [],
                all: [],
                nearby: [],

            }
        default:
            return state
    }


}

export default eventReducer