import React from 'react'
import { StyleSheet, View } from 'react-native'

export const BoxsScreens = () => {
  return (
    <View style= {styles.container}>
        <View style= {styles.boxBlue}></View>
        <View style= {styles.boxOrange}></View>
        <View style= {styles.boxBlueS}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        //width:300,
        //height:300,
        //marginTop: 50,
        backgroundColor: 'cadetblue',
        //alignItems:'center',
        justifyContent:'center',
        //flexDirection:'row',
        //top:50
    },
    boxBlue:{
        flex:1,
        width:'100%',
        height:100,
        backgroundColor:'blue',
        borderWidth:10,
        borderColor:'white',
        //position:'relative',
        //top:0,
        //left:50,
        //position:'absolute',
        //top:0,
        //right:0
        //fontSize:10
        
    },
    boxOrange:{
        flex:1,
        width:'100%',
        height:100,
        backgroundColor:'orange',
        borderWidth:10,
        borderColor:'white',
        position:'relative',
        //bottom:-50,
        //right:0,
        //left:0,
        //top:0
    },
    boxBlueS:{
        flex:2,
        width:'100%',
        height:100,
        backgroundColor:'cyan',
        borderWidth:10,
        borderColor:'white',
        position:'relative',
        bottom:0,
        //right:'100%',
        //left:'75%',
        //top:0
    },
})
