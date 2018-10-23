import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import parking from './parking'

const store = createStore(
    parking,
    applyMiddleware(thunk)
)

export default store