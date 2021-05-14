import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import Login from '../pages/unlogged/Login'
import SignUp from '../pages/unlogged/SignUp'

const unlogged = createStackNavigator()

const Unlogged = () => (
  <unlogged.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#fff' },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <unlogged.Screen name="Login" component={Login} />
    <unlogged.Screen name="Cadastro de Aluno" component={SignUp} />
  </unlogged.Navigator>
)

export default Unlogged
