import { RECEIVE_DECKS, ADD_DECK } from './actions'

export default function decks (state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS :
      console.log('...action.decks')
      console.log(action.decks)
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.decks
      }
    default :
      return state
  }
}