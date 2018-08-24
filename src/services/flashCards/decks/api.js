import {
    _getDecks
  } from './data'

  import { receiveDecks} from './actions'

  export function getDecks () {
    return Promise.all([
      _getDecks(),
    ]).then(([decks]) => ({
      decks,
    }))
  }

  export function handleGetDecks () {
    return (dispatch) => {
      return getDecks()
        .then(({ decks }) => {
          dispatch(receiveDecks(decks))
        })
    }
  }

  // function saveDeck (info) {
  //   return Promise.all([
  //     _saveDeck(info)
  //   ]).then(([decks]) => (
  //     {decks}
  //   ))
  // }

  // export function handleAddDeck (title) {
  //   return (dispatch) => {

  //     return saveDeck({
  //       title
  //     })
  //       .then(() => {
  //         dispatch(addDeck())
  //       })
  //   }
  // }