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
                {Object.values(decks).map((deck) => (
                    <Deck deck={deck} key={deck.id}/>
                ))}
            </View>
        )
      }
}

function mapStateToProps (decks) {
    return {
        ready : decks !== undefined,
        decks : decks.decks
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: gray,
        borderBottomWidth: 1,
        padding: 15,
    }
  })