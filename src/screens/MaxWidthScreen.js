import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Colors from '../constants/Colors';

export default class MaxWidthScreen extends React.Component {
  static navigationOptions = {
    title: 'MaxWidth',
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Text>this is use maxwidth in parent, and children flex wrap</Text>
        <View style={styles.first}>
          <View style={[styles.cards, styles.flexWrap]}>
            {
              new Array(5).fill(1).map((i, index) => <View key={index} style={styles.card} />)
            }
          </View>
        </View>
        <View style={styles.first}>
          <View style={[styles.cards, styles.flexWrap]}>
            {
              new Array(95).fill(1).map((i, index) => <View key={index} style={styles.card} />)
            }
          </View>
        </View>
        <Text>this is use width in parent, and children flex wrap</Text>
        <View style={styles.second}>
          <View style={[styles.cards, styles.flexWrap]}>
            {
              new Array(5).fill(1).map((i, index) => <View key={index} style={styles.card} />)
            }
          </View>
        </View>
        <View style={styles.second}>
          <View style={[styles.cards, styles.flexWrap]}>
            {
              new Array(95).fill(1).map((i, index) => <View key={index} style={styles.card} />)
            }
          </View>
        </View>
        <Text>this is use maxwidth in parent, and children flex no wrap</Text>
        <View style={styles.first}>
          <View style={styles.cards}>
            {
              new Array(5).fill(1).map((i, index) => <View key={index} style={styles.card} />)
            }
          </View>
        </View>
        <View style={styles.first}>
          <View style={styles.cards}>
            {
              new Array(95).fill(1).map((i, index) => <View key={index} style={styles.card} />)
            }
          </View>
        </View>
        <Text>this is use width in parent, and children flex no wrap</Text>
        <View style={styles.second}>
          <View style={styles.cards}>
            {
              new Array(5).fill(1).map((i, index) => <View key={index} style={styles.card} />)
            }
          </View>
        </View>
        <View style={styles.second}>
          <View style={styles.cards}>
            {
              new Array(95).fill(1).map((i, index) => <View key={index} style={styles.card} />)
            }
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  first: {
    maxWidth: 220,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: Colors.color3,
  },
  cards: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  card: {
    width: 20,
    height: 20,
    backgroundColor: Colors.color2,
    margin: 1,
  },
  second: {
    width: 220,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: Colors.color3,
  },
});
