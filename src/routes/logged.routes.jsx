import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/unlogged/Login';
import SignUp from '../pages/unlogged/SignUp';
import Feed from './tab.routes';

const logged = createStackNavigator();


const Logged = () => (
  <logged.Navigator 
  screenOptions={
    {
      cardStyle: { backgroundColor: '#fff' },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }
  }
  >
    <logged.Screen name="Login" component={Login} />
    <logged.Screen name="Cadastro de Aluno" component={SignUp} />
    <logged.Screen name="Feed" component={Feed} options={
      {
        title: "Livros"
      }
    } />
  </logged.Navigator>
);

export default Logged;