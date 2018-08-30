import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native'
import { handleGetDecks } from '../../../services/flashCards/decks/api';
import { AppLoading} from 'expo'
import { gray, black } from '../../../services/utils/colors'
import { largeFontSize, mediumFontSize, smallFontSize } from '../../../services/utils/fonts'
import { handleAddDeck } from '../../../services/flashCards/decks/api'
import TextButton from '../../TextButton'

class NewDeck extends Component {
    state = {
        title: '',
    }

    addDeck = () => {
        this.props.dispatch(handleAddDeck(this.state.title))
    }

    render() {
        return (
            <View style={styles.NewDeck}>
                <Text style={styles.Prompt}>What is the title of your new deck?</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                        style={styles.Input}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}
                        placeholder='Deck Title'>
                    </TextInput>
                </View>
                <TextButton style={{margin: 20, fontSize: mediumFontSize, color: black}} onPress={this.addDeck}>
                    Submit
                </TextButton>
            </View>
        )
      }
}

function mapStateToProps (state) {
    return {

    }
  }

export default connect(
    mapStateToProps,
)(NewDeck)


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
    },
    Input: {
        flex: 0.8,
        fontSize: smallFontSize,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 15,
        padding: 5
    }
  })