import { StyleSheet, Text, View ,FlatList,ScrollView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import UserList from '../components/UserList';



const Data = [
  {
    id: '1',
    user:"joseph",
    emailId:"joseph6745@gmail.com"
  },
  {
    id: '2',
    user:"sunny",
    emailId:"sunny7908@gmail.com"

  },
  {
    id: '3',
    user:"john",
    emailId:"john6478@gmail.com"
  },
  {
    id: '4',
    user:"peter",
    emailId:"peter5467@gmail.com"
  },
  {
    id: '5',
    user:"sushma",
    emailId:"sushma64@gmail.com"
  },
  {
    id: '6',
    user:"preethi",
    emailId:"preethi3759@gmail.com"
  },
  {
    id: '7',
    user:"Edward",
    emailId:"edward1234@gmail.com"
  },
  ]



const HomeScreen = ({navigation}) => {
  return (

    Data.map((ele)=>{
      return(
        <View>
            <UserList
            user={ele.user}
            email={ele.emailId} key={ele.id}
            />

        </View>
      )

    })


  )
}

const ScrollScreen = ({navigation})=>{
  return(
    <ScrollView>
      <HomeScreen/>
    </ScrollView>
  )
}

export default ScrollScreen

const styles = StyleSheet.create({})



// {
//   Data.map((element) => {
//     return(
//       <View>

//         {/* {element.id} */}
//         <Text>{element.user}</Text>
//         <Text>{element.emailId}</Text>
//       </View>
//     )
//   })
// }