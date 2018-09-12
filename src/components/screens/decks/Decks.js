import React, { Component } from 'react'
import { View,  StyleSheet,  FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleGetDecks } from '../../../services/flashCards/decks/api';
import { AppLoading} from 'expo'
import { lightGray } from '../../../services/utils/colors'
import Deck from './Deck'


class Decks extends Component {
    componentDidMount() {
        this.props.dispatch(handleGetDecks())
    }


    _renderItem = ({item}) => (
        <View key={item}>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate(
                                 'DeckView',
                                { deckKey: item}
                                 )}
                style={styles.deck}
                key={item}
            >
                <Deck deck={this.props.decks[item]} key={item}/>
            </TouchableOpacity>
        </View>
      )

    render() {
        const { ready, sortedDeckKeys } = this.props
        if (ready === false) {
          return <AppLoading />
        }

        return (
            <FlatList
                data={sortedDeckKeys}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
             />
        )
      }
}

function mapStateToProps (state) {

    var sortedDecks = Object.values(state.decks).map((deck) => (deck))
    sortedDecks.sort((a,b) => (b.title > a.title ? -1 : 1)).map((item) => (item.title))
    return {
        ready : state !== undefined,
        decks : state.decks,
        sortedDeckKeys : sortedDecks.map((deck) => (deck.id))
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
        borderBottomColor: lightGray,
        borderBottomWidth: 1
    }
  })