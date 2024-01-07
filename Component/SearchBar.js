import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View,TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function searchBar() {
  return (
    <View style={style.asembler}>
    <View style={style.Main}>   
           <TextInput placeholder='Write Text' style={style.Input}></TextInput> 
    </View>
    <View style={style.buttomP}>
        <TouchableOpacity>
            <AntDesign name='search1' size={30}></AntDesign>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    asembler:{
        flexDirection:'row'
    },
    Main:{
        backgroundColor: '#FFF',
        width:250,
        height:50,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,
        borderWidth:2,
        borderColor: '#C0C0C0'
    },
    Input:{
        marginTop:15,
        marginLeft:10
    },
    buttomP:{
        height:50,
        width:60,
        backgroundColor: '#FFF',
        borderWidth:1,
        borderBottomRightRadius:30,
        borderTopRightRadius:30,
        borderColor: '#C0C0C0',
        justifyContent: 'center',
        alignItems:'center'

    }
})