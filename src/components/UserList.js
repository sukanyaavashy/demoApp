import { StyleSheet, Text, View, Modal,Pressable} from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Power from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


const UserList = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()

  return (
    <View>
       <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalCard}>
          <View>
          <Text style={styles.modalText}>Information</Text>

          </View>
          <View >
            <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            >
              <Entypo
            name="cross"
            style={{
            fontSize: 30,
            color: 'black',
            opacity: 0.5,
            // marginRight:20
            }}
           />
         </Pressable>
            </View>



          </View>

            <View style={styles.content}>
              <Text><Text style={styles.textColor}>postid: 1</Text></Text>
              <Text><Text style={styles.textColor}>id: 1</Text> </Text>
              <Text style={styles.textColorr}><Text style={styles.textColor}>email:</Text>  {props.email}</Text>
              <Text style={styles.textColorr}><Text style={styles.textColor}>body:</Text>vjhbrfuivn biuvh;j iudhevoins ywghbz viodjklsnakj iudhisb</Text>
              <Text style={styles.textColorr}><Text style={styles.textColor}>read:</Text> false</Text>
            </View>

          </View>
        </View>
      </Modal>

    <Pressable style={styles.item} onPress={()=>navigation.navigate('DetailsScreen')}>
      <View style={styles.itemLeft}>
        <View style={styles.items}>

        <AntDesign
            name="user"
            style={{
            fontSize: 20,
            color: 'black',
            opacity: 0.5,
            marginRight:20
            }}
        />

        <Text style={styles.itemText}>{props.user}</Text>
        </View>
        <View style={styles.items}>
        <MaterialIcons
            name="email"
            style={{
            fontSize: 20,
            color: 'black',
            opacity: 0.5,
            marginRight:20
            }}
        />
      <Text style={styles.itemText}>{props.email}</Text>
      </View>


      </View>
      <View style={styles.circular}>
        <Pressable
        onPress={() => setModalVisible(true)}>
        <Power
        name="power-cycle"
        style={{
        fontSize: 30,
        color: 'black',
        opacity: 0.5,
        marginRight:20
        }}
        />
        </Pressable>

      </View>
    </Pressable>
    </View>
  )
}

export default UserList

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    // padding: 40,
    paddingBottom:20,
    paddingTop:20,
    paddingRight:20,
    borderRadius: 10,
    borderColor:"black",
    borderWidth:2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop:5,
    margin:5
  },
  itemLeft: {
    // flexDirection: 'column',
    // alignItems: 'center',

    // flexWrap: 'wrap'
  },
  items:{
    flexDirection: 'row',
    alignItems: 'center',
    padding:10
    // marginLeft:30

  },
  square: {
    width: 24,
    height: 24,
    // backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '90%',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width:'90%',
    height:"50%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textColor:{
    color:"black",
    fontWeight:"bold",
    fontSize:18,
  },
  textColorr:{
    color:"black",
    fontSize:16,

  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalCard: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginLeft:70,
    marginBottom: 20,

  },
  modalText:{
    textAlign: "center",
    fontWeight:'bold',
    color:'black',
    fontSize:20,

  },
  content:{
    padding:5,
    margin:5
  }
//   circular: {
//     width: 12,
//     height: 12,
//      borderColor: '#55BCF6',
//     borderWidth: 2,
//     borderRadius: 5,
//   },

 })