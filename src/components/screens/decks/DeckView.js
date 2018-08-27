import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { gray, black } from '../../../services/utils/colors'
import Deck from './Deck'
import TextButton from '../../TextButton'
import { NavigationActions } from 'react-navigation'

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
    return {
      addCard: () => navigation.navigate('AddCardView'),
      startQuiz: () => navigation.navigate('QuizView'),
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