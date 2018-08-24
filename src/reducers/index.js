import { combineReducers } from 'redux'
import decks from '../services/flashCards/decks/reducer'

const appReducer = combineReducers({
  decks,
})

const rootReducer = ( state, action ) => {
  return appReducer(state, action)
}

export default rootReducer