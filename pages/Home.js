//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import TrainSearch from '../components/TrainSearch';

// import all basic components

export default class Home extends Component {
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 13 }}> Welcome to 1GO 2 </Text>
        <Button
          title="Search"
          onPress={() => this.props.navigation.navigate('TrainSearch')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center',
  },
});