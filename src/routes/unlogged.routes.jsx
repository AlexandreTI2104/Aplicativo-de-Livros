import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';


const unlogged = createStackNavigator();


const Unlogged = () => (
  <unlogged.Navigator>
    <unlogged.Screen name="Login" component={Login} />
    <unlogged.Screen name="Cadastro de Aluno" component={SignUp} />
  </unlogged.Navigator>
);

export default Unlogged;