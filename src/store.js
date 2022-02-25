import {
    createStore,
    applyMiddleware
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

const composedWithDevTools = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(rootReducer, composedWithDevTools)

export default store