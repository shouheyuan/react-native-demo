import React, { useState } from 'react';
import { Text, Alert, Button, StyleSheet, View, TextInput, FlatList, StatusBar } from 'react-native';

import Component from './components';
import Events from './events';



const Home = () => {

  return (
    <>
      <Events />
      <Component />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const FlatListStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;
