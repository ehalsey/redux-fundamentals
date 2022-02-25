import {
    createStore,
    applyMiddleware
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer'
import { 
    loggerMiddleware,
    delayedMessageMiddleware
} from './exampleAddons/middleware'

const composedWithDevTools = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(rootReducer, composedWithDevTools)

export default store