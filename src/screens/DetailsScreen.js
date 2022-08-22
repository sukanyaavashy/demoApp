import { StyleSheet, Text, View, Button, SafeAreaView, Pressable } from 'react-native'
import React, {useEffect, useRef, useState} from 'react'


const DetailsScreen = () => {

    const [timeLeft, setTimeLeft] = useState(5);

    let timer = () => {};

    const startTimer = () => {
        timer = setTimeout(() => {
            if(timeLeft <= 0){
                //clearTimeout(timer);

                return <DetailsScreen />;
            }
         setTimeLeft(timeLeft-1);
        }, 1000)
     }

     useEffect(() => {
         startTimer();
         return () => clearTimeout(timer);
     });

    const start = () => {
        setTimeLeft(5);
        clearTimeout(timer);
        startTimer();
    }


  return (

    <Pressable style={styles.container} onPress={()=>start}>
     {timeLeft ? ( <View style={styles.timerCard}>
        <Text style={styles.caption}>Returning to Details.Please wait...</Text>
        <Text style={styles.time}>{timeLeft}</Text>
      </View>): <View style={styles.page}>
        <Text style={styles.heading}>
            Body:
        </Text>
        <Text style={styles.description}>
            Hello this is Details Screen
            icehdjkv em biurenf.jkw uegvijb
        </Text>

        <Button
        title="Go To Home"
        style={styles.button}

      />
        </View>}
    </Pressable>

  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'grey',
        flex:1,
        justifyContent:'center',
        // padding:10
    },
    timerCard:{
        marginHorizontal:20,
        marginVertical:40,
        backgroundColor:'white',
        flex:0.6,
        justifyContent:'center',
        alignItems:'center'

    },
    page:{
        display: 'flex',
        flex: 1,
        backgroundColor:"white",
        padding:10
    },
    caption:{
        fontSize:20

    },
    time:{
        fontSize:50

    },
    heading:{
        color:"black",
        fontWeight:"bold",
        fontSize:20
    },
    description:{
        // padding:10,
        fontSize:18
    },
    button:{
        backgroundColor:"#172242",
        width:"80%"

    }

})