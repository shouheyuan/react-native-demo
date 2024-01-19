import React, { useState } from 'react';
import { Text, Alert, TextInput, Button, Image, ScrollView, StyleSheet, FlatList } from 'react-native';

function Components() {
  const [text, setText] = useState('');
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
  };

  const FlatListData = [
    { key: 'Devin' },
    { key: 'Jackson' },
    { key: 'James' },
    { key: 'Joel' },
    { key: 'John' },
    { key: 'Jillian' },
    { key: 'Jimmy' },
  ]


  return (
    <>
      <Text>Hello World</Text>
      <Button title="Click me" onPress={() => Alert.alert("Hello")}></Button>
      <Text>{text}</Text>
      <TextInput style={styles.elInput} placeholder='请输入' onChangeText={setText} defaultValue={text} />

      <Image source={logo} />
      <ScrollView>
        <Text style={{ fontSize: 50 }}>上海自来水来自海上</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 50 }}>上海自来水来自海上</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 50 }}>上海自来水来自海上</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
      </ScrollView>

      {/*适合结构近似仅数据不同*/}
      <FlatList data={FlatListData} renderItem={({ item }) => <Text>{item.key}</Text>}></FlatList>

      {/*样式权限*/}
      <Text style={styles.testRed}>红色文字</Text>
      <Text style={styles.testBlue}>蓝色文字</Text>
      <Text style={[styles.testBlue, styles.testRed]}>先是蓝色，然后是红色</Text>
    </>
  );
}


const styles = StyleSheet.create({
  elInput: {
    height: 30,
    borderWidth: 5,
  },

  testRed: {
    color: 'red'
  },
  testBlue: {
    color: 'blue'
  }
})

export default Components;
