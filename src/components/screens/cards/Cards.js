import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { lightGray } from '../../../services/utils/colors'
import Card from './Card'

class Cards extends Component {

    _renderItem = ({item}) => (
        <View style={styles.cards}>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate(
                'CardView',
                {deckKey: this.props.deckKey,  cardKey: item}
                    )}
                style={styles.card}
                key={item}
                >
                <View>
                    <Card key={item} card={this.props.deck.questions[item]}/>
                </View>
            </TouchableOpacity>

        </View>
      )

    render() {
        const { questionsKeys } = this.props
        return (
            <FlatList
                data={questionsKeys}
                renderItem={this._renderItem}
            />

        )
    }
}

function mapStateToProps (state, { navigation }) {
    var deckKey = undefined
    var deck = undefined
    if (navigation.state.params !== undefined){
        deckKey = navigation.state.params.deckKey
        deck = deckKey === undefined ? undefined : state.decks[deckKey]
    }
    return {
        deckKey,
        deck: deck,
        questionsKeys: Object.keys(deck.questions)
    }
}

export default connect(
    mapStateToProps,
)(Cards)

const styles = StyleSheet.create({
    cards: {

        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 15,
    },
    card: {
        alignSelf: 'stretch',
        borderBottomColor: lightGray,
        borderBottomWidth: 1
    },
  })