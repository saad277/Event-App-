


import { SET_USER, LOG_OUT, SIGN_UP } from '../Actions/Auth/ActionTypes'



const iState = {
        

}


const AuthReducer = (state = iState, action) => {

    console.log(action)

    switch (action.type) {



        case SET_USER:

            return action.payload


        case LOG_OUT:
            return state


        case SIGN_UP:
            return state

        default:
            return state
    }



}


export default AuthReducer;