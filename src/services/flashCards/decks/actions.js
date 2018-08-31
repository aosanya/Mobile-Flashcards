export const ADD_DECK = 'ADD_DECK'
export const SAVE_DECK = 'SAVE_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

export function addDeck () {
  return {
    type: ADD_DECK,
  }
}

export function saveDeck () {
  return {
    type: SAVE_DECK,
  }
}

export function addQuestion () {
  return {
    type: ADD_QUESTION,
  }
}

export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}
