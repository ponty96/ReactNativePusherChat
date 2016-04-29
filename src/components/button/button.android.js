/**
 * Created by ponty on 29/04/2016.
 */
import React, { Component, View, Text, StyleSheet, Image, TouchableNativeFeedback} from 'react-native';


const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: "center"
    }
})

export default class Button extends Component {
    render() {
        return (
            <TouchableNativeFeedback
                onPress={() => this.props.onPress()}
                background={TouchableNativeFeedback.Ripple(this.props.underlayColor ? this.props.underlayColor: "#fff",true)}>
                <View style={this.props.style}>
                    {this.props.children}
                </View>
            </TouchableNativeFeedback>
        )
    }
}
