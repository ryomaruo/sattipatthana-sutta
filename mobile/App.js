import React from 'react';
import { Button, View, Text } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FeelingScreen from './components/FeelingScreen';
import GratitudeScreen from './components/GratitudeScreen';
import TrendScreen from './components/TrendScreen';
import AphorismScreen from './components/AphorismScreen';

class Detail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>詳細ページ</Text>
      </View>
    );
  }
}

const RouteConfigs = {
  FeelingScreen: {
    screen: FeelingScreen,
    navigationOptions: {
      tabBarLabel: 'Feeling',
      tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon size={ 20 } name={ 'transition' } color={ tintColor } />
    }
  },
  GratitudeScreen: {
    screen: GratitudeScreen,
    navigationOptions: {
      tabBarLabel: 'Gratitude',
      tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon size={ 20 } name={ 'account-heart' } color={ tintColor } />
    }
  },
  TrendScreen: {
    screen: TrendScreen,
    navigationOptions: {
      tabBarLabel: 'Trend',
      tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon size={ 20 } name={ 'trending-up' } color={ tintColor } />
    }
  },
  AphorismScreen: {
    screen: AphorismScreen,
    navigationOptions: {
      tabBarLabel: 'Aphorism',
      tabBarIcon: ({ focused, horizontal, tintColor }) => <Icon size={ 20 } name={ 'book-open-page-variant' } color={ tintColor } />
    }
  }
}
const NavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#4CB2D4',
    inactiveTintColor: '#ffffff',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#000000',
    }
  }
}
const TabNavigator = createBottomTabNavigator(RouteConfigs, NavigatorConfig);

const App = createAppContainer(TabNavigator);

export default App;