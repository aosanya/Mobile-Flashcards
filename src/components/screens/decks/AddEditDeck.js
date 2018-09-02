import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { black } from '../../../services/utils/colors'
import { largeFontSize, mediumFontSize, smallFontSize } from '../../../services/utils/fonts'
import { handleAddDeck, handleSaveDeck } from '../../../services/flashCards/decks/api'

import TextButton from '../../TextButton'

class AddEditDeck extends Component {
    state = {
        title: '',
    }

    componentDidMount(){
        this.setState((prevState) => {
            return {title: this.props.deck === undefined ? '' : this.props.deck.title};
        })
    }

    saveDeck = () => {
        const { deck } = this.props
        if (deck === undefined){
            this.props.dispatch(handleAddDeck(this.state.title))
        }
        else{
            deck.title = this.state.title
            this.props.dispatch(handleSaveDeck(deck))
        }
        const backAction = NavigationActions.back({
            key: null
          })

        this.props.navigation.dispatch(backAction)
    }

    render() {
        const { deckKey } = this.props
        return (
            <View style={styles.NewDeck}>
                {deckKey === undefined ? <Text style={styles.Prompt}>What is the title of your new deck?</Text> : <Text style={styles.Prompt}>What is the new title of your deck?</Text>}
                <View style={{flexDirection:'row'}}>
                    <TextInput
                        style={styles.Input}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}
                        placeholder='Deck Title'>
                    </TextInput>
                </View>
                <TextButton style={{margin: 20, fontSize: mediumFontSize, color: black}} onPress={this.saveDeck}>
                    Submit
                </TextButton>
            </View>
        )
      }
}

function mapStateToProps (state, { navigation }) {
    var deckKey = undefined
    var deck = undefined

    if (navigation.state.params !== undefined){
        deckKey = navigation.state.params.deckKey
        console.log(deckKey)
        deck = deckKey === undefined ? undefined : state.decks[deckKey]
        console.log(deck)
    }

    return {
        deckKey,
        deck: deck,
    }
}


export default connect(
    mapStateToProps,
)(AddEditDeck)


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