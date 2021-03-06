import React from 'react';
import { Button, View, Text } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  addNavigationHelpers
} from 'react-navigation';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FeelingScreen from './components/FeelingScreen';
import GratitudeScreen from './components/GratitudeScreen';
import TrendScreen from './components/TrendScreen';
import AphorismScreen from './components/AphorismScreen';

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
// navigator用のReeducerを準備
const navReducer = createNavigationReducer(TabNavigator);
const rootReducer = combineReducers({
  nav: navReducer
});

// navigatorがdispatchする際に、navReducerに適応した形式になるようにmiddlewareを噛ませる。
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const App = reduxifyNavigator(TabNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  rootReducer,
  applyMiddleware(middleware),
);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}