import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { black , green } from '../../../services/utils/colors'
import { largeFontSize, mediumFontSize } from '../../../services/utils/fonts'

const QuizResults = (props) => {
    const { correct, incorrect } = props
    const results = Math.round((correct / (correct + incorrect)) * 100)
    return (
        <View style={styles.results}>
            <Text style={{fontSize: largeFontSize, color: black, margin: 15}}>Quiz Complete</Text>
            <Text style={{fontSize: mediumFontSize, color: black}}>Score : {Math.round((correct / (correct + incorrect)) * 100)}%</Text>
            {results === 100 ? <Text style={{fontSize: mediumFontSize, color: green, margin: 15}}>👊 Well Done!</Text> : <Text style={{fontSize: mediumFontSize, color: green, margin: 15}}>💪 Yes you can! </Text>}
        </View>
    )
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