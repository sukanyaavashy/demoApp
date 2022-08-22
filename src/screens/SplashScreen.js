import { NavigationContainer } from '@react-navigation/native';
import React, {Component,useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';


const SplashScreen = ({navigation}) => {


    useEffect(()=>{
        setTimeout(()=>{
          navigation.navigate('Home')
        },2000)

      },)
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.demo}>Demo App</Text>
      </View>
        <View style={styles.logoContainer}>
          <Text style={styles.from}>Powered by React native</Text>

        </View>
      </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor:"white"
      },
      iconContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      demo:{
        fontSize:30,
        color:"black",
        fontWeight:'500'
      },
      logoContainer: {
        display: 'flex',
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        marginBottom: 50,
      },
      // logoTextWrapper: {
      //   width: '100%',
      //   height: '10%',
      // },
      // icon: {
      //   width: 100,
      //   height: 100,
      // },
      // logo: {
      //   flex: 1,
      //   alignSelf: 'center',
      //   // height: '100%',
      //   width: '80%',
      //   height:80
      // },
      from: {
        color: 'black',
        marginBottom: 15,
        textAlign: 'center',
      },
})