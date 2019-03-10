import React from 'react';
import { Button, View } from 'react-native';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <View>
        <Button
          title="go to MovieDetail screen"
          onPress={() => this.props.navigation.navigate('MovieDetail')}
        />
        <Button
          title="go to AgeInput screen"
          onPress={() => this.props.navigation.navigate('AgeInput')}
        />
        <Button
          title="go to Login screen"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="go to FeelChoose screen"
          onPress={() => this.props.navigation.navigate('FeelChoose')}
        />
        <Button
          title="go to Homepage screen"
          onPress={() => this.props.navigation.navigate('Homepage')}
        />
        <Button
          title="go to Discover screen"
          onPress={() => this.props.navigation.navigate('Discover')}
        />
        <Button
          title="go to Intro screen"
          onPress={() => this.props.navigation.navigate('Intro')}
        />
      </View>
    );
  }
}
