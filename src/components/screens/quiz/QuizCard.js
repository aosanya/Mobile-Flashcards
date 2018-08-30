import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleGetDecks } from '../../../services/flashCards/decks/api';
import { AppLoading} from 'expo'
import { blueChill, black } from '../../../services/utils/colors'

import { largeFontSize, mediumFontSize } from '../../../services/utils/fonts'
import Flipper from '../../Flipper'

class QuizCard extends Component {
    render() {
        const { card } = this.props
        return (
            <ScrollView>
                <Flipper style={styles.card}>
                    <View style={styles.card}>
                        <Text style={{fontSize: largeFontSize, color: black}}>{card.question}</Text>
                        <Text style={{fontSize: mediumFontSize, color: blueChill, padding:15}}>Show Answer</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={{fontSize: largeFontSize, color: black}}>{card.answer}</Text>
                        <Text style={{fontSize: mediumFontSize, color: blueChill, padding:15}}>Show Question</Text>
                    </View>
                </Flipper>
            </ScrollView>
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