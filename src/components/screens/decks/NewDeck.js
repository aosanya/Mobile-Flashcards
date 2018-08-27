import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleGetDecks } from '../../../services/flashCards/decks/api';
import { AppLoading} from 'expo'
import { gray, black } from '../../../services/utils/colors'
import { largeFontSize, mediumFontSize } from '../../../services/utils/fonts'


class NewDeck extends Component {
    render() {
        return (
            <View style={styles.deck}>
                <Text style={{fontSize: largeFontSize, color: black}}>Test</Text>
            </View>
        )
      }
}

export default NewDeck

const styles = StyleSheet.create({
    deck: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }
  })