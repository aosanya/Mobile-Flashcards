import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../../../services/flashCards/decks/api';
import { AppLoading} from 'expo'
import { gray, black } from '../../../services/utils/colors'
import { largeFontSize, mediumFontSize, smallFontSize } from '../../../services/utils/fonts'
import TextButton from '../../TextButton'

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
    }

    addCard = () => {
        this.props.dispatch(handleAddQuestion(this.props.deck, this.state.question, this.state.answer))
    }

    render() {
        return (
            <View style={styles.AddCard}>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                        style={styles.Input}
                        onChangeText={(question) => this.setState({question})}
                        value={this.state.question}
                        multiline = {true}
                        numberOfLines = {4}
                        placeholder='Enter question here'>
                    </TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                        style={styles.Input}
                        onChangeText={(answer) => this.setState({answer})}
                        value={this.state.answer}
                        multiline = {true}
                        numberOfLines = {4}
                        placeholder='Enter answer here'>
                    </TextInput>
                </View>
                <TextButton style={{margin: 20, fontSize: mediumFontSize, color: black}} onPress={this.addCard}>
                    Submit
                </TextButton>
            </View>
        )
    }
}

function mapStateToProps (state, { navigation }) {

    const { deckKey } = navigation.state.params
    console.log( deckKey )

    return {
        deckKey,
        deck: state.decks[deckKey],
    }
}

export default connect(
    mapStateToProps,
)(AddCard)

const styles = StyleSheet.create({
    AddCard: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    Input: {
        flex: 0.8,
        fontSize: smallFontSize,
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 15,
        padding: 5
    }
  })