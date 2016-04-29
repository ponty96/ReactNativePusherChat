/**
 * Created by ponty on 29/04/2016.
 */
import React, { Component, View, Text, StyleSheet, Image} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    main_text: {
        fontSize: 16,
        textAlign: "center",
        alignSelf: "center",
        color:"#42C0FB",
        marginLeft:10
    },
    row:{
        flexDirection:"row",
        justifyContent:"center",
        borderBottomWidth:1,
        borderBottomColor:"#42C0FB"
    },
    headerImg:{
        height:40,
        width:40
    }
});
export default class ConversationsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={require('./../assets/icon.png')} style={styles.headerImg}/>
                    <Text style={styles.main_text}>Conversations</Text>
                </View>
            </View>
        )
    }
}
