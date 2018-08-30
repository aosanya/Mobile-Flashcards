import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleGetDecks } from '../../../services/flashCards/decks/api';
import { AppLoading} from 'expo'
import { green, black, red } from '../../../services/utils/colors'

import { largeFontSize, mediumFontSize } from '../../../services/utils/fonts'
import Flipper from '../../Flipper'

class QuizResults extends Component {
    render() {
        const { correct, incorrect } = this.props
        return (
            <View style={styles.results}>
                <Text style={{fontSize: largeFontSize, color: black, margin: 15}}>Quiz Complete</Text>
                <Text style={{fontSize: mediumFontSize, color: black}}>Score : {Math.round((correct / (correct + incorrect)) * 100)}%</Text>
            </View>
        )
    }
}

export default QuizResults

const styles = StyleSheet.create({
    results: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
})