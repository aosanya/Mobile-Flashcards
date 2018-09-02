import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'KidoFlashCards:DECKS'

let sampleDecks = {
    D202915gq2kt6q4ths9ltz0crzej: {
        id:'D202915gq2kt6q4ths9ltz0crzej',
        timestamp:1535652540619,
        title: 'React',
        questions: {
            'Q12915gq3kt6q4ths9ltz0crzej' : {
                id : 'Q12915gq3kt6q4ths9ltz0crzej',
                timestamp:1535652540619,
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
                views: 0,
                correct: 0,
                lastViewed: undefined
            },
            'Q22915gq4kt6q4ths9ltz0crzej' : {
                id : 'Q22915gq4kt6q4ths9ltz0crzej',
                timestamp:1535652540619,
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
                views: 0,
                correct: 0,
                lastViewed: undefined
            }
        }
    },
    D202915gq5kt6q4ths9ltz0crzek: {
        id : 'D202915gq5kt6q4ths9ltz0crzek',
        timestamp:1535652540619,
        title: 'JavaScript',
        questions: {
            'Q302915gq6kt6q4ths9ltz0crzej' : {
                id : 'Q302915gq6kt6q4ths9ltz0crzej',
                timestamp:1535652540619,
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.',
                views: 0,
                correct: 0,
                lastViewed: undefined
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
        answer : answer,
        views: 0,
        correct: 0,
        lastViewed: undefined
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
    deck.questions = {
        ...deck.questions,
        [formattedQuestion.id]: formattedQuestion
    }

    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deck.id]: deck
     }))
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatResults)
}

