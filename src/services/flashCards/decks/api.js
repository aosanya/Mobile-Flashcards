import {
    _getDecks, _addNewDeck, _saveDeck, _saveQuestion
  } from './data'

  import { receiveDecks, addDeck, saveDeck} from './actions'

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

  function addNewDeck (title) {
    console.log(title)
    return Promise.all([
      _addNewDeck(title)
    ]).then(([decks]) => (
      {decks}
    ))
  }

  export function handleAddDeck (title) {
    return (dispatch) => {
      return addNewDeck(title)
        .then(({ decks }) => {
          dispatch(receiveDecks(decks))
          dispatch(addDeck())
        })
    }
  }

  function saveExistingDeck (deck) {
    return Promise.all([
      _saveDeck(deck)
    ]).then(([decks]) => (
      {decks}
    ))
  }

  export function handleSaveDeck (deck) {
    return (dispatch) => {
      return saveExistingDeck(deck)
        .then(({ decks }) => {
          dispatch(receiveDecks(decks))
          dispatch(saveDeck())
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