

import { SIGN_IN, LOG_OUT } from '../Actions.js/Auth/ActionTypes'



const iState = {


}


const AuthReducer = (state = iState, action) => {



    switch (action.type) {


        case SIGN_IN:
            return state


        case LOG_OUT:
            return state

        default:
            return state
    }



}


export default AuthReducer