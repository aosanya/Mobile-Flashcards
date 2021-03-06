import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { handleAddQuestion } from '../../../services/flashCards/decks/api';
import { blueChill } from '../../../services/utils/colors'
import { mediumFontSize, smallFontSize } from '../../../services/utils/fonts'
import TextButton from '../../TextButton'
import PickImage from '../../PickImage'

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
        pickedImage: null,
    }

    addCard = () => {
        this.props.dispatch(handleAddQuestion(this.props.deck, this.state.question, this.state.answer, this.state.pickedImage))

        const backAction = NavigationActions.back({
            key: null
          })


        this.setState(() => {
            return {question: '', answer: ''};
        })


        this.props.navigation.dispatch(backAction)
    }

    imagePicked = (uri) => {
        this.setState(() => {
            return {pickedImage: uri};
        })
    }

    render() {
        return (
            <View style={styles.AddCard}>
                <View style={styles.image}>
                    <PickImage handler={this.imagePicked}></PickImage>
                </View>
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

                <TextButton style={{margin: 20, fontSize: mediumFontSize, color: blueChill}} onPress={this.addCard}>
                    Submit
                </TextButton>
            </View>
        )
    }
}

function mapStateToProps (state, { navigation }) {
    const { deckKey } = navigation.state.params
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
    },
    image: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
  })