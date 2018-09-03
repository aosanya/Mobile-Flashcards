import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { black } from '../../../services/utils/colors'
import { largeFontSize, mediumFontSize } from '../../../services/utils/fonts'

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