import { createStore, combineReducers, applyMiddleware, compose, } from 'redux'

import thunk from 'redux-thunk'

import AuthReducer from './Reducers/AuthReducer'
import EventReducer from './Reducers/EventReducer'

//import logger from 'redux-logger'
//import { composeWithDevTools } from 'remote-redux-devtools';

const rootReducer = combineReducers({


    auth: AuthReducer,
    event: EventReducer


})

//const middleware = [thunk];
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, applyMiddleware(thunk))



export default store


