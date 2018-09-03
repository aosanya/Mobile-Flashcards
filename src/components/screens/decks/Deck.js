import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray, black } from '../../../services/utils/colors'
import { largeFontSize, mediumFontSize } from '../../../services/utils/fonts'

const Deck = (props) => {
    const { deck } = props
    const questions = Object.values(deck.questions)

    return (
        <View style={styles.deck}>
            <Text style={{fontSize: largeFontSize, color: black}}>{deck.title}</Text>
            <Text style={{fontSize: mediumFontSize, color: gray}}>{questions.length} {questions.length === 1 ? 'card' : 'cards'}</Text>
        </View>
    )
}

export default Deck

const styles = StyleSheet.create({
    deck: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }
  })