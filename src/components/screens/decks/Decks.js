import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleGetDecks } from '../../../services/flashCards/decks/api';
import { AppLoading} from 'expo'
import { gray, black } from '../../../services/utils/colors'
import Deck from './Deck'

class Decks extends Component {


    componentDidMount() {
        this.props.dispatch(handleGetDecks())
    }

    render() {
        const { ready, decks } = this.props
        if (ready === false) {
          return <AppLoading />
        }
        return (
            <View style={styles.decks}>
                {Object.keys(decks).map((deck) => (
                     <TouchableOpacity
                     onPress={() => this.props.navigation.navigate(
                       'DeckView',
                       { deckKey: deck}
                     )}

                     style={styles.deck}
                     >
                        <Deck deck={decks[deck]} key={deck.id}/>
                    </TouchableOpacity>
                ))}
            </View>
        )
      }
}

function mapStateToProps (state) {
    return {
        ready : state !== undefined,
        decks : state.decks
    }
  }


export default connect(
mapStateToProps,
)(Decks)

const styles = StyleSheet.create({
    decks: {
      flexDirection: 'column',
      marginTop: 12
    },
    deck: {
        borderBottomColor: gray,
        borderBottomWidth: 1
    }
  })