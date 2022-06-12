// import { View, Text,ImageBackground } from 'react-native'
import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,ImageBackground, TextInput,TouchableOpacity,} from 'react-native';

// import { useRoute } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/database';

export default function Home(props) {
  const [data,setdata] =useState();
  // const route = useRoute();
    // const{email,uid} = route.params
    useEffect(()=>{
      firebase.database().ref("Users").child(props.uid).once("value")
      .then((userdata)=>{
          console.log(userdata.val())
          setdata(userdata.val().name)
      })
  },[])
  
    return (
      
      <View style={styles.container}>
        <ImageBackground  style={styles.img} source={{uri: "https://w0.peakpx.com/wallpaper/508/606/HD-wallpaper-whatsapp-l-background-doodle-pattern-patterns.jpg"}}>
      <View style={{position:"absolute",top:40,left :20}}>
      <Text style={{color:"#000",fontWeight:"bold",fontSize:25,marginLeft:60}}>{data}</Text>
      <Text style={{color:"#000",fontWeight:"bold",fontSize:25,marginLeft:60}}>{props.email}</Text>
           </View>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:500,
    height:740,
    resizeMode:'contain', 
    alignItems:"center",
    justifyContent:"center",
  }
})