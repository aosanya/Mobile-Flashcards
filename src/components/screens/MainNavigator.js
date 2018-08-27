import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Platform } from 'react-native'
import { blueChill, white } from '../../services/utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import Decks from './decks/Decks'
import DeckView from './decks/DeckView'
import NewDeck from './decks/NewDeck'
import AddCard from './addCard/AddCard'
import Quiz from './quiz/Quiz'

const Tabs = createBottomTabNavigator({
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums' size={30} color={tintColor} />
      },
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
          tabBarLabel: 'Decks',
          tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        },
      },
    }, {
        navigationOptions: {
        header: null
        },
        tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? blueChill : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? white : blueChill,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
            width: 0,
            height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
        }
    })

export const MainNavigator = createStackNavigator({
    Home: {
      screen: Tabs,
      navigationOptions: {
        title: 'udacicards',
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blueChill,
        }
      }
    },
    DeckView: {
      screen: DeckView,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blueChill,
        }
      }
    },
    AddCardView: {
      screen: AddCard,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blueChill,
        }
      }
    },
    QuizView: {
        screen: Quiz,
        navigationOptions: {
          headerTintColor: white,
          headerStyle: {
            backgroundColor: blueChill,
          }
        }
      }
  })