import React from 'react'
import { View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import Card from './Card'

const CardView = (props) => {
    const {card} = props
    return (
        <View style={styles.deck}>
            <Card key={card.id} card={card}/>
        </View>
    )
}

function mapStateToProps (state, { navigation }) {
    const { deckKey, cardKey } = navigation.state.params

    const deck = state.decks[deckKey]
    const card = deck.questions[cardKey]
    return {
        deckKey,
        cardKey,
        deck,
        card
    }
}


export default connect(
    mapStateToProps,
)(CardView)


const styles = StyleSheet.create({
    deck: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }
  })