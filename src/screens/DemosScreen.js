import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';

export default class DemosScreen extends React.Component {
  static navigationOptions = {
    title: 'Demos',
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [{
        page: 'MaxWidth',
        name: 'MaxWidth',
      }],
    };
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        this.props.navigation.navigate(item.page);
      }}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  )

  _keyExtractor = item => item.name
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#999',
  },
});
