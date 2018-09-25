import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'sign in',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>name:</Text>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this._onNameChange}
        />
        <Text>password:</Text>
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={this._onPasswordChange}
        />
        <Button
          title="sign in"
          onPress={this._commit}
        />
      </View>
    );
  }

  _onNameChange = (value) => {
    this.setState({
      name: value,
    });
  }

  _onPasswordChange = (value) => {
    this.setState({
      password: value,
    });
  }

  _commit = () => {
    if (this.state.name === 'admin' && this.state.password === 'admin') {
      this.props.navigation.navigate('Main');
      AsyncStorage.setItem('userToken', 'aaaaaaaa');
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 30,
    borderWidth: 1,
    borderColor: '#999',
    margin: 10,
  },
});
