import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class Map extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Likes</Text>
      </SafeAreaView>
    );
  }
}

export { Map };
