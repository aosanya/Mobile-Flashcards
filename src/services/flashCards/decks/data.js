import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'KidoFlashCards:DECKS'

let sampleDecks = {
    React: {
        id:'1',
        title: 'React',
        questions: [
        {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
        },
        {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
        }
        ]
    },
    JavaScript: {
        id:'2',
        title: 'JavaScript',
        questions: [
        {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
        ]
    }
}

function addSampleDecks(){
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(sampleDecks))
    return sampleDecks
}

function formatResults (results) {
    return results === null
    ? addSampleDecks()
    : JSON.parse(results)
}

export function _getDecks () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatResults)
}