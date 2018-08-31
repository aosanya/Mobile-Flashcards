import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading} from 'expo'
import { green, red, black } from '../../../services/utils/colors'
import { mediumFontSize, smallFontSize } from '../../../services/utils/fonts'
import TextButton from '../../TextButton'
import QuizCard from './QuizCard'
import QuizResults from './QuizResults'

class Quiz extends Component {
    state = {
        currentCard: 0,
        correct:0,
        incorrect:0,
    }

    next = () => {
        this.setState((prevState) => {
            return {currentCard: prevState.currentCard + 1};
        })

    }

    correct = () => {
        this.setState((prevState) => {
            return {correct: prevState.correct + 1};
        })
        this.next()
    }

    incorrect = () => {
        this.setState((prevState) => {
            return {incorrect: prevState.incorrect + 1};
        })
        this.next()
    }

    render() {
        const { deck, questions } = this.props
        return (
            <View>
                {this.state.currentCard === questions.length
                ? <QuizResults correct={this.state.correct} incorrect={this.state.incorrect}/>
                :
                    <View>
                        <Text style={styles.Paging}>{this.state.currentCard + 1}/{questions.length}</Text>
                        <QuizCard card={questions[this.state.currentCard]}/>
                        <TextButton style={{margin: 20, fontSize: mediumFontSize, color: green}} onPress={this.correct}>
                            Correct
                        </TextButton>
                        <TextButton style={{margin: 20, fontSize: mediumFontSize, color: red}} onPress={this.incorrect}>
                            Incorrect
                        </TextButton>
                    </View>
                }
            </View>
        )
    }
}

function mapStateToProps (state, { navigation }) {
    const { deckKey } = navigation.state.params
    const deck = state.decks[deckKey]
    console.log(Object.values(deck.questions))
    return {
        deckKey,
        deck: state.decks[deckKey],
        questions: Object.values(deck.questions).sort((a,b) => b.timestamp - a.timestamp)
    }
}

export default connect(mapStateToProps) (Quiz)

const styles = StyleSheet.create({
    Paging: {
        textAlign: 'center',
        padding: 15,
        fontSize: smallFontSize,
        color: black
    }
  })