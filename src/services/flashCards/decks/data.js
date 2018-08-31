import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'KidoFlashCards:DECKS'

let sampleDecks = {
    D202915gq2kt6q4ths9ltz0crzej: {
        id:'202915gq2kt6q4ths9ltz0crzej',
        timestamp:1535652540619,
        title: 'React',
        questions: {
            '202915gq3kt6q4ths9ltz0crzej' : {
                id : '202915gq3kt6q4ths9ltz0crzej',
                timestamp:1535652540619,
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            '202915gq4kt6q4ths9ltz0crzej' : {
                id : '202915gq4kt6q4ths9ltz0crzej',
                timestamp:1535652540619,
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        }
    },
    D202915gq5kt6q4ths9ltz0crzek: {
        id : '202915gq5kt6q4ths9ltz0crzej',
        timestamp:1535652540619,
        title: 'JavaScript',
        questions: {
            '202915gq6kt6q4ths9ltz0crzej' : {
                id : '202915gq6kt6q4ths9ltz0crzej',
                timestamp:1535652540619,
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        }
    }
}

function generateUID () {
    const currentdate = new Date();
    return currentdate.getFullYear().toString() + currentdate.getMonth().toString() + currentdate.getDay().toString() + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function addSampleDecks(){
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(sampleDecks))
    return sampleDecks
}

function formatResults (results) {
    //return addSampleDecks()

    return results === null
    ? addSampleDecks()
    : JSON.parse(results)
}

function formatNewDeck(title) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        title: title,
        questions: []
    }
}

function formatNewQuestion(question, answer) {
    return {
            id : generateUID(),
            timestamp: Date.now(),
            question : question,
            answer : answer
    }
}

export function _getDecks () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatResults)
}

export function _addNewDeck (title) {
    let deck = formatNewDeck(title)
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deck.id]: deck
     }))
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatResults)
}

export function _saveDeck (deck) {
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deck.id]: deck
     }))
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatResults)
}

export function _saveQuestion (deck, question, answer) {
    const formattedQuestion = formatNewQuestion(question, answer)
    console.log(deck)
    deck.questions = {
        ...deck.questions,
        [formattedQuestion.id]: formattedQuestion
    }

    console.log(deck)
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deck.title]: deck
     }))
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatResults)
}

