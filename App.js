import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './Component/SearchBar';

export default function App() {
  return (
    <View style={style.BG}>
      <SearchBar/>
    </View>
  );
}

const style = StyleSheet.create({
  BG:{
    backgroundColor: '#e6e6fa',
    flex:1
  }
})