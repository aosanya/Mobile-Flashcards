import {
    _getDecks, _saveDeck, _saveQuestion
  } from './data'

  import { receiveDecks, addDeck} from './actions'

  export function getDecks () {
    return Promise.all([
      _getDecks(),
    ]).then(([decks1]) => (
      {
      decks1,
    }))
  }

  export function handleGetDecks () {
    return (dispatch) => {
      return getDecks()
        .then(({ decks1 }) => {
          dispatch(receiveDecks(decks1))
        })
    }
  }

  function saveDeck (title) {
    console.log(title)
    return Promise.all([
      _saveDeck(title)
    ]).then(([decks]) => (
      {decks}
    ))
  }

  export function handleAddDeck (title) {
    return (dispatch) => {
      return saveDeck(title)
        .then(({ decks }) => {
          dispatch(receiveDecks(decks))
          dispatch(addDeck())
        })
    }
  }

  function saveQuestion (deck, question, answer) {
    return Promise.all([
      _saveQuestion(deck, question, answer)
    ]).then(([decks]) => (
      {decks}
    ))
  }

  export function handleAddQuestion (deck, question, answer) {
    return (dispatch) => {
      return saveQuestion(deck, question, answer)
        .then(({ decks }) => {
          dispatch(receiveDecks(decks))
          dispatch(addDeck())
        })
    }
  }