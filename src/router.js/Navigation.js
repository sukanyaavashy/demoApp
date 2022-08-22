import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScrollScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import DetailsScreen from '../screens/DetailsScreen';




const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator >
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false}}/>
      <Stack.Screen
      options={{
        headerTitleAlign: 'center',

        headerStyle:{
          height:800,

        },
        headerStyle:{
          backgroundColor:"#172242",

          // textAlign:"center"
         },
        headerTintColor: '#fff',
        // textAlign:"center",

        headerTitleStyle:{
           fontWeight:'bold',

          //  textAlign:"center"
        },
        headerBackVisible:false,
        // textAlign:"center"

     }}

      name="Home"  component={ScrollScreen} />
      <Stack.Screen
      options={{
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundColor:"#172242",

          // textAlign:"center"
         },
        headerTintColor: '#fff',
        // textAlign:"center",

        headerTitleStyle:{
           fontWeight:'bold',

          //  textAlign:"center"
        },
        // headerBackVisible:false,
        // textAlign:"center"

     }}




      name="DetailsScreen" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation

const styles = StyleSheet.create({})