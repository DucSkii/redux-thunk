import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import usersReducer from './ducks/usersReducer'

const reducers = combineReducers({
  users: usersReducer,
})

const store = createStore(reducers, applyMiddleware(logger, thunk))

export default store