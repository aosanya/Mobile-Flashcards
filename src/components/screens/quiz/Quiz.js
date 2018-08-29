import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading} from 'expo'
import { gray, black } from '../../../services/utils/colors'
import { largeFontSize, mediumFontSize } from '../../../services/utils/fonts'
import QuizCard from './QuizCard'

class Quiz extends Component {
    state = {
        currentCard: 1,
    }

    render() {
        const { deck } = this.props
        return (
            <View>
                <QuizCard card={deck.questions[this.state.currentCard]}/>
            </View>
        )
    }
}

function mapStateToProps (state, { navigation }) {

    const { deckKey } = navigation.state.params
    console.log(deckKey)
    return {
        deckKey,
        deck: state.decks[deckKey],
    }
}

export default connect(mapStateToProps) (Quiz)