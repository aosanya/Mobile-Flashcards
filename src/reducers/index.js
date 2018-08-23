import { combineReducers } from 'redux'
import questions from '../services/poll/questions/reducer'
import users from '../services/users/reducer'
import authedUser from '../services/session/reducer'
import {fetchingData, fetchedData} from '../services/status/reducer'
import leaderBoard from '../services/poll/leaderBoard/reducer'

const appReducer = combineReducers({
  // authedUser,
  // leaderBoard,
  // questions,
  // users,
  // fetchingData,
  // fetchedData,
})

const rootReducer = ( state, action ) => {
  return appReducer(state, action)
}

export default rootReducer