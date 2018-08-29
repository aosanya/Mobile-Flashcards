import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleGetDecks } from '../../../services/flashCards/decks/api';
import { AppLoading} from 'expo'
import { gray, black } from '../../../services/utils/colors'
import { largeFontSize, mediumFontSize } from '../../../services/utils/fonts'
import TextButton from '../../TextButton'

class NewDeck extends Component {
    state = {
        title: '',
    }

    addCard = () => {

    }

    render() {
        return (
            <View style={styles.NewDeck}>
                <Text style={styles.Prompt}>What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                    placeholder='Deck Title'>
                </TextInput>
                <TextButton style={{margin: 20, fontSize: mediumFontSize, color: black}} onPress={this.addCard}>
                    Submit
                </TextButton>
            </View>
        )
      }
}

export default NewDeck

const styles = StyleSheet.create({
    NewDeck: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    Prompt: {
        textAlign: 'center',
        padding: 15,
        fontSize: largeFontSize,
        color: black
    }
  })