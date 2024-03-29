import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from './navigation';

import HomeScreen from '../views/home';
import DetailsScreen from '../views/detail';
import LoginScreen from '../views/login';

import commonStyle from '../styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



import { Text } from 'react-native';

const BottomTabBar = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = focused
              ? require('../assets/tabbar/icon_sx_active.png')
              : require('../assets/tabbar/icon_sx.png');
            break;
          case 'Details':
            iconName = focused
              ? require('../assets/tabbar/icon_msg_active.png')
              : require('../assets/tabbar/icon_msg.png');
            break;
          case 'Mine':
            iconName = focused
              ? require('../assets/tabbar/icon_mine_active.png')
              : require('../assets/tabbar/icon_mine.png');
            break;
        }

        return <Image source={iconName} style={commonStyle.tabbarIcon} />;
      },
      tabBarActiveTintColor: '#3577FF',
      tabBarInactiveTintColor: '#333333',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} />
    <Tab.Screen
      name="Details"
      component={DetailsScreen}
      options={{ tabBarBadge: 3, title: '消息' }}
    />
    <Tab.Screen name="Mine" component={LoginScreen} options={{ title: '我的' }} />
  </Tab.Navigator>
);

const Router = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Tabbar" component={BottomTabBar} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Router;
