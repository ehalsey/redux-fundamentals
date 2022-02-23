import {
    createStore,
    applyMiddleware
} from 'redux'
import rootReducer from './reducer'
import { 
    loggerMiddleware,
    delayedMessageMiddleware
} from './exampleAddons/middleware'

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware,delayedMessageMiddleware))

export default store