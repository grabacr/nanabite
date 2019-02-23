import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import {
  AppRegistry,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Button,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MultiBar, MultiBarToggle } from 'react-native-multibar';

import { News, Food, Map, Pay, Post, Settings, Profile } from '../components';
import { Routes } from './Routes';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/images/gbyk/n-1.png')}
          style={{ width: 30, height: 30 }}
        />
      </View>
    );
  }
}

const TabsNavigator = createBottomTabNavigator(
  {
    [Routes.News]: {
      screen: News,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bookmark" color={tintColor} size={24} />
        ),
      }),
    },
    [Routes.Food]: {
      screen: Food,
      // tabBarVisible: false,
      navigationOptions: () => ({
        tabBarIcon: () => <LogoTitle />,
      }),
    },
    MultiBar: {
      screen: () => null,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => (
          <MultiBarToggle
            navigation={navigation}
            actionSize={30}
            routes={[
              {
                routeName: Routes.Map,
                color: '#FF8360',
                icon: <Icon name="rocket" color="#333333" size={15} />,
              },
              {
                routeName: Routes.Pay,
                color: '#E8E288',
                icon: <Icon name="dashboard" color="#333333" size={15} />,
              },
              {
                routeName: Routes.Post,
                color: '#7DCE82',
                icon: <Icon name="gears" color="#333333" size={15} />,
              },
            ]}
            icon={<Icon name="plus" color="#FFFFFF" size={24} />}
          />
        ),
      }),
      params: {
        navigationDisabled: true,
      },
    },
    [Routes.Settings]: {
      screen: Settings,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="lock" color={tintColor} size={24} />
        ),
      }),
    },
    [Routes.Profile]: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" color={tintColor} size={24} />
        ),
      }),
    },
  },
  {
    // initialRouteName: Routes.News,
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // },
    tabBarComponent: MultiBar,
    tabBarOptions: {
      // showLabel: false,
      activeTintColor: '#000FFF',
      inactiveTintColor: '#1DA2FF',
      style: {
        backgroundColor: '#F8F8F8',
      },
      tabStyle: {},
    },
  }
);

const BaseNavigatorContainer = createAppContainer(
  createStackNavigator(
    {
      [Routes.Tabs]: TabsNavigator,
      [Routes.Map]: Settings,
      [Routes.Pay]: Pay,
      [Routes.Post]: Post,
    },
    {
      headerMode: 'none',
    }
  )
);

export { BaseNavigatorContainer as BaseNavigator };
