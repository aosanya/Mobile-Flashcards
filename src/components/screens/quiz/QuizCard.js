import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native'
import { blueChill, black } from '../../../services/utils/colors'
import { largeFontSize, mediumFontSize } from '../../../services/utils/fonts'
import Flipper from '../../Flipper'

const QuizCard = (props) => {
    const { card } = props
    return (
        <ScrollView>
            <Flipper style={styles.card}>
                <View style={styles.card}>
                    { card.picture !== undefined ? <Image source={{uri : card.picture}} style={styles.pickedImage}></Image> : null}
                    <Text style={{fontSize: largeFontSize, color: black}}>{card.question}</Text>
                    <Text style={{fontSize: mediumFontSize, color: blueChill, padding:15}}>Show Answer</Text>
                </View>
                <View style={styles.card}>
                    <Text style={{fontSize: largeFontSize, color: black}}>{card.answer}</Text>
                    <Text style={{fontSize: mediumFontSize, color: blueChill, padding:15}}>Show Question</Text>
                </View>
            </Flipper>
        </ScrollView>
    )
}

export default QuizCard

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    image: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickedImage: {
        width: 200,
        height: 200,
        borderColor: 'gray',
        borderWidth: 1,
    }
})