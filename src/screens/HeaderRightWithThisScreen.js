import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import Colors from '../constants/Colors';

export default class HeaderRightWithThisScreen extends React.Component {
  static navigationOptions = {
    title: 'HeaderRightWithThis',
  };

  static navigationOptions = ({ navigation }) => ({
    headerRight: <Button title="add1" onPress={navigation.getParam('_increaseCount', () => {})} />,
  })

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ _increaseCount: this._increaseCount });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>count:</Text>
        <Text style={styles.text}>{this.state.count}</Text>
      </View>
    );
  }

  _increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 15,
    marginLeft: 20,
  },
});
