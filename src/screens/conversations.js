/**
 * Created by ponty on 29/04/2016.
 */
import React, { Component, View, Text, StyleSheet, Image} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    main_text: {
        fontSize: 20,
        textAlign: "center",
        alignSelf: "center"
    }
});
export default class ConversationsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.main_text}>Pusher Chat App</Text>
            </View>
        )
    }
}
