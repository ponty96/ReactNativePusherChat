/**
 * Created by ponty on 29/04/2016.
 */
import React, { Component, View, Text, StyleSheet, Image} from 'react-native';


const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:"center"
   },
    image:{
        alignSelf:"center"
    }
});

export default class SplashScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Pusher Chat App</Text>
                <Image source={require('./../assets/icon.png')} style={styles.image}/>
                <Text> hello conversations screen here nigga</Text>
            </View>
        )
    }
}
