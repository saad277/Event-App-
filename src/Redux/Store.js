import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import AuthReducer from './Reducers.js/AuthReducer'



const rootReducer = combineReducers({


    auth: AuthReducer


})


const store = createStore(rootReducer, applyMiddleware(thunk))



export default store


