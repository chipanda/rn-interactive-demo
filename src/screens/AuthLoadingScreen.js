import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>first page loading</Text>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    setTimeout(() => {
      this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
    }, 2000);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F29F3F',
  },
  text: {
    marginBottom: 10,
  },
});
