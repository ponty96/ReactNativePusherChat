/**
 * Created by ponty on 29/04/2016.
 */
import React, { Component, View, Text, StyleSheet, Image} from 'react-native';


const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:"center"
   },
    main_text:{
        fontSize:20,
        textAlign:"center",
        alignSelf:"center"
    },
    image:{
        alignSelf:"center"
    },
    button:{
        borderWidth:1,
        borderColor:"#42C0FB",
        justifyContent:"center",
        alignSelf:"center",
        padding:10,
        paddingLeft:20,
        paddingRight:20
    },
    button_text:{
        color:"#42C0FB",
        fontSize:14
    }
});

import Button from './../components/button/button'
export default class SplashScreen extends Component {
    getStarted = () => {
        console.log('clicked me')
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.main_text}>Pusher Chat App</Text>
                <Image source={require('./../assets/icon.png')} style={styles.image}/>
               <Button onPress={this.getStarted}
                        style={styles.button}>
                   <Text style={styles.button_text}>Get started </Text>
               </Button>
            </View>
        )
    }
}
