import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View,  StyleSheet } from 'react-native'
import Deck from './Deck'
import TextButton from '../../TextButton'

class DeckView extends Component {
    render() {
        const { deck } = this.props
        return (
            <View style={styles.deckView}>
                <Deck deck={deck} key={deck.id}/>
                <TextButton style={{margin: 20}} onPress={this.props.addCard}>
                    Add Card
                </TextButton>
                <TextButton style={{margin: 20}} onPress={this.props.startQuiz}>
                    Start Quiz
                </TextButton>
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

function mapDispatchToProps (dispatch, { navigation }) {
    const { deckKey } = navigation.state.params
    return {
      addCard: () => navigation.navigate('AddCardView', { deckKey: deckKey}),
      startQuiz: () => navigation.navigate('QuizView', { deckKey: deckKey}),
    }
  }


export default connect(
    mapStateToProps,mapDispatchToProps,
)(DeckView)

const styles = StyleSheet.create({
    deckView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'}
  })