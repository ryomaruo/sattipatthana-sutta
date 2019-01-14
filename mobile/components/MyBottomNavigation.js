import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import TabIcon from './TabIcon';

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: 'feeling',
        title: '感情を観察',
        color: '#221E23'
      },
      {
        key: 'gratitudes',
        title: '感謝を記録',
        color: '#221E23'
      },
      {
        key: 'trends',
        title: '変化を見る',
        color: '#221E23'
      },
      {
        key: 'aphorisms',
        title: '名言から学ぶ',
        color: '#221E23'
      }
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    feeling: FeelingScene,
    gratitudes: GratitudesScene,
    trends: TrendsScene,
    aphorisms: AphorismsScene
  });

  _renderIcon = ({ route, focused, color }) => {
    
    switch (route.key) {
      case 'feeling':
        return <TabIcon name="heart-multiple-outline" color={color} />;
        break;
      case 'gratitudes':
        return <TabIcon name="message-draw" color={color} />;
        break;
      case 'trends':
        return <TabIcon name="trending-up" color={color} />;
        break;
      case 'aphorisms':
        return <TabIcon name="book-open-page-variant" color={color} />;
        break;
    }
  };

  _renderLabel = ({ route, focused, color }) => {
    return <Text style={styles.label}>{route.title}</Text>;
  }

  _barStyle = {
    pading: '15 0'
  }

  render() {
    return (
      <BottomNavigation
        shifting={true}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        renderIcon={this._renderIcon}
        renderLabel={this._renderLabel}
        barStyle={this._barStyle}
        inactiveColor='#ffffff'
        activeColor='#81C2C9'
      />
    );
  }
}

const FeelingScene = () => <Text>FeelingScene</Text>;
const GratitudesScene = () => <Text>AlGratitudesScenebums</Text>;
const AphorismsScene = () => <Text>AphorismsScene</Text>;
const TrendsScene = () => <Text>TrendsScene</Text>;

const styles = {
  label: {
    fontSize: 9,
    paddingTop: 5,
    color: '#81C2C9',
    textAlign: 'center'
  }
}