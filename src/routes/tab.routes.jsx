import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Feed from '../pages/logged/Feed'
import Notifications from '../pages/logged/Notifications'
import Profile from '../pages/logged/Profile'

import Icon from 'react-native-vector-icons/MaterialIcons'

const tab = createBottomTabNavigator()

const Tab = () => (
  <tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName

        if (route.name == 'Books') {
          iconName = 'menu-book'
        } else if (route.name == 'Notifications') {
          iconName = 'notifications'
        } else {
          iconName = 'person'
        }

        return <Icon name={iconName} color={color} size={size} />
      },
    })}
    tabBarOptions={{
      activeTintColor: '#2196f3',
      inactiveTintColor: 'gray',
    }}
    initialRouteName="Books"
  >
    <tab.Screen
      name="Notifications"
      component={Notifications}
      options={{ title: 'Notificações' }}
    />
    <tab.Screen name="Books" component={Feed} options={{ title: 'Livros' }} />
    <tab.Screen
      name="Profile"
      component={Profile}
      options={{ title: 'Perfil' }}
    />
  </tab.Navigator>
)

export default Tab
