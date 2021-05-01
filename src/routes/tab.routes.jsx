import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../pages/Feed';

const tab = createBottomTabNavigator();


const Tab = () => (
  <tab.Navigator >
    <tab.Screen name="Feed" component={Feed} />
  </tab.Navigator>
);

export default Tab;