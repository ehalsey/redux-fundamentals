import {
    createStore,
    applyMiddleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer'
import { 
    loggerMiddleware,
    delayedMessageMiddleware
} from './exampleAddons/middleware'

const composedWithDevTools = composeWithDevTools(applyMiddleware(loggerMiddleware,delayedMessageMiddleware))
const store = createStore(rootReducer, composedWithDevTools)

export default store