import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleGetDecks } from '../../../services/flashCards/decks/api';
import { AppLoading} from 'expo'
import { green, black, red } from '../../../services/utils/colors'
import TextButton from '../../TextButton'
import { largeFontSize, mediumFontSize } from '../../../services/utils/fonts'
import Flipper from '../../Flipper'

class QuizCard extends Component {
    render() {
        const { card } = this.props
        return (
            <View style={styles.card}>
                <Flipper style={styles.flipper}>
                    <View>
                        <Text style={{fontSize: largeFontSize, color: black}}>{card.question}</Text>
                        <Text style={{fontSize: mediumFontSize, color: black}}>Answer</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: largeFontSize, color: black}}>{card.answer}</Text>
                        <Text style={{fontSize: mediumFontSize, color: black}}>Question</Text>
                    </View>
                </Flipper>
                <TextButton style={{margin: 20, fontSize: mediumFontSize, color: green}} onPress={this.props.addCard}>
                    Correct
                </TextButton>
                <TextButton style={{margin: 20, fontSize: mediumFontSize, color: red}} onPress={this.props.startQuiz}>
                    Incorrect
                </TextButton>
            </View>
        )
    }
}

export default QuizCard

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
})