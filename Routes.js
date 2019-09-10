import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import React from 'react';
// import {Icon} from 'react-native-elements';

import Screen01 from './src/Screen01';
import Screen02 from './src/Screen02';

const Stack01 = createStackNavigator({
  Screen01: Screen01,
});
const Stack02 = createStackNavigator({
  Screen02: Screen02,
});

const tabNavigator = createBottomTabNavigator(
  {
    WatchList: Stack01,
    Search: Stack02,
  },
  // {
  //   defaultNavigationOptions: ({navigation}) => ({
  //     tabBarIcon: ({focused, horizontal, tintColor}) => {
  //       let {routeName} = navigation.state;
  //       switch (routeName) {
  //         case 'WatchList':
  //           return (
  //             <Icon
  //               name={'local-movies'}
  //               size={30}
  //               color={tintColor}
  //               type={'material'}
  //             />
  //           );
  //           break;
  //         case 'Search':
  //           return (
  //             <Icon
  //               name={'search'}
  //               size={30}
  //               color={tintColor}
  //               type={'material'}
  //             />
  //           );
  //           break;

  //         default:
  //           break;
  //       }
  //     },
  //   }),
  // },
);

export default createAppContainer(tabNavigator);
