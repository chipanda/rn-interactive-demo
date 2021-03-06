import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DemosScreen from '../screens/DemosScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MaxWidthScreen from '../screens/MaxWidthScreen';
import HeaderRightWithThisScreen from '../screens/HeaderRightWithThisScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'
      }
    />
  ),
};

const DemosStack = createStackNavigator({
  Demos: DemosScreen,
  MaxWidth: MaxWidthScreen,
  HeaderRightWithThis: HeaderRightWithThisScreen,
});

DemosStack.navigationOptions = {
  tabBarLabel: 'Demos',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  DemosStack,
  SettingsStack,
}, {
  tabBarOptions: {
    activeTintColor: Colors.color5,
  },
});
