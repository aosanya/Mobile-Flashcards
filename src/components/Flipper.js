import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native'

class Flipper extends Component {
    componentWillMount() {

        this.value = 0
        this.children = null
        this.animatedValue = new Animated.Value(0);
        this.animatedValue.addListener(({ value }) => {
            this.value = value
        })
        this.frontInterpolate = this.animatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        })
        this.backInterpolate = this.animatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg']
        })
    }

    componentDidUpdate() {
        this.reset()
    }

    reset = () => {
        Animated.spring(this.animatedValue,{
            toValue: 0,
            friction: 8,
            tension: 10
          }).start();
    }

    flipCard = () => {
        if (this.value >= 90) {
          Animated.spring(this.animatedValue,{
            toValue: 0,
            friction: 8,
            tension: 10
          }).start();
        } else {
          Animated.spring(this.animatedValue,{
            toValue: 180,
            friction: 8,
            tension: 10
          }).start();
        }
    }

    render() {
        const { children, style = {} } = this.props

        const frontAnimatedStyle = {
            transform: [
                { rotateY: this.frontInterpolate}
            ]
        }

        const backAnimatedStyle = {
            transform: [
                { rotateY: this.backInterpolate }
            ]
        }

        return (
            <View>
                <TouchableOpacity style={[style]} onPress={this.flipCard}>
                    <Animated.View style={[frontAnimatedStyle, styles.flipCard]}>
                        {children[0]}
                    </Animated.View>
                    <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
                        {children[1]}
                    </Animated.View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Flipper

const styles = StyleSheet.create({
    flipCard: {
      alignItems: 'center',
      justifyContent: 'center',
      backfaceVisibility: 'hidden',
    },
    flipCardBack: {
      position: "absolute",
      top: 0,
    }
})