import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { gray, black } from '../../../services/utils/colors'
import Deck from './Deck'

class DeckView extends Component {
    render() {
        const { deck } = this.props
        return (
            <View style={styles.deckView}>
                <Deck deck={deck} key={deck.id}/>
            </View>
        )
      }
}

function mapStateToProps (state, { navigation }) {
    const { deckKey } = navigation.state.params
    return {
        deckKey,
        deck: state.decks[deckKey],
    }
}

export default connect(
    mapStateToProps,
)(DeckView)

const styles = StyleSheet.create({
    deckView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}
  })