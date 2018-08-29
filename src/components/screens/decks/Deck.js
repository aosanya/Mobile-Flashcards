import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleGetDecks } from '../../../services/flashCards/decks/api';
import { AppLoading} from 'expo'
import { gray, black } from '../../../services/utils/colors'
import { largeFontSize, mediumFontSize } from '../../../services/utils/fonts'


class Deck extends Component {
    render() {
        const { deck } = this.props
        return (
            <View style={styles.deck}>
                <Text style={{fontSize: largeFontSize, color: black}}>{deck.title}</Text>
                <Text style={{fontSize: mediumFontSize, color: gray}}>{deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}</Text>
            </View>
        )
    }
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