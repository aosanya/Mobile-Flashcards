import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {  MaterialIcons } from '@expo/vector-icons'

import { black, gray, green, bittersweet } from '../../../services/utils/colors'
import { tinyFontSize, smallFontSize, mediumFontSize } from '../../../services/utils/fonts'

const Card = (props) => {
    const { card } = props
    console.log(card.picture !== undefined)
    return (
        <View>
            <View style={styles.image}>
                { card.picture !== undefined ? <Image source={{uri : card.picture}} style={styles.pickedImage}></Image> : null}
            </View>
            <View style={styles.details}>
                <Text style={{fontSize: mediumFontSize, color: black}}>{card.question}</Text>
                <Text style={{fontSize: smallFontSize, color: gray, padding: 5}}>{card.answer}</Text>
                <View style={styles.stats}>
                    <View style={styles.stat}>
                        <MaterialIcons
                        name='visibility'
                        color={bittersweet}
                        size={15}
                        />
                        <Text style={{fontSize: tinyFontSize, color: black, padding: 5}}>{card.views}</Text>
                    </View>
                    {card.views === 0 ? null :
                        <View style={styles.stat}>
                            <MaterialIcons
                            name='done'
                            color={green}
                            size={15}
                            />
                            <Text style={{fontSize: tinyFontSize, color: black, padding: 5}}>{ (card.correct / card.views) * 100 }%</Text>
                        </View>
                    }
                </View>
            </View>

        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    details: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 15,
    },
    stats: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    stat: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
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