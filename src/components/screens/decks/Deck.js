import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleGetDecks } from '../../../services/flashCards/decks/api';
import { AppLoading} from 'expo'
import { gray, black } from '../../../services/utils/colors'

class Deck extends Component {
    render() {
        const { deck } = this.props
        console.log(deck)
        return (
                <View style={styles.deck}>
                    <Text style={{fontSize: 30, color: black}}>{deck.title}</Text>
                    <Text style={{fontSize: 25, color: gray}}>{deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}</Text>
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