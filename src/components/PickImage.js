import React, {Component} from 'react'
import { ActivityIndicator, Text, View, Image, StyleSheet } from 'react-native'
import { blueChill } from '../services/utils/colors'
import { mediumFontSize, smallFontSize } from '../services/utils/fonts'
import {  MaterialIcons, Foundation } from '@expo/vector-icons'
import TextButton from './TextButton'
import {Permissions, ImagePicker} from 'expo'

class PickImage extends Component {
    state = {
        status : null,
        pickedImage : null
    }

    componentDidMount () {
        Permissions.getAsync(Permissions.CAMERA_ROLL)
            .then(({ status }) => {
            this.setState(() => ({ status }))
            })
            .catch((error) => {
            console.warn('Error getting camera roll permission: ', error)

            this.setState(() => ({ status: 'undetermined' }))
        })
    }

    askPermission = () => {
    Permissions.askAsync(Permissions.CAMERA_ROLL)
        .then(({ status }) => {
        this.setState(() => ({ status }))
        })
        .catch((error) => console.warn('error asking camera roll permission: ', error))
    }

    pickImageHandler = () => {
       ImagePicker.launchImageLibraryAsync({
           allowsEditing : false,
           aspect :[2,1]
       }).then((result) => {
           if (result.cancelled){
               return
           }
           this.setState(() => ({ pickedImage: result.uri }))
           this.props.handler(this.state.pickedImage)
       })
    }

    render() {
        const { status, pickedImage } = this.state

        if (status === null) {
            return <ActivityIndicator style={{marginTop: 30}}/>
          }

          if (status === 'denied') {
            return (
              <View style={styles.center}>
                <Foundation name='alert' size={50} />
                <Text>
                  You denied camera roll access. You can fix this by visiting your settings and enabling camera roll for this deck.
                </Text>
              </View>
            )
          }

          if (status === 'undetermined') {
            return (
              <View style={styles.center}>
                <Foundation name='alert' size={50} />
                <Text>
                  You need to enable camera roll for this deck.
                </Text>
                <TextButton onPress={this.askPermission} style={{fontSize: smallFontSize}} >
                    Enable
                </TextButton>
              </View>
            )
          }

        return (
            <View style={styles.image}>
                {pickedImage ?
                 <Image source={{uri : this.state.pickedImage}} style={styles.pickedImage}></Image>
                 : <MaterialIcons
                        name='photo'
                        color={blueChill}
                        size={50}
                        style={styles.image}
                    />
                }
                <TextButton onPress={this.pickImageHandler} style={{fontSize: smallFontSize}}> Pick Image</TextButton>
            </View>
        )
    }
}

export default PickImage

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: blueChill,
    fontSize: mediumFontSize,
  },
  pickedImage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
  },
    image: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})