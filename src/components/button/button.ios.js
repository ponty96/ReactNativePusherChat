/**
 * Created by ponty on 29/04/2016.
 */
import React, { Component, View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';


const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: "center"
    }
})

export default class Button extends Component {
    render() {
        return (

            <TouchableHighlight style={ this.props.style ? this.props.style :styles.button}
                                onPress={() => this.props.onPress()}
                                underlayColor={this.props.underlayColor ? this.props.underlayColor: "transparent"}>
               {this.props.children}
            </TouchableHighlight>
        )
    }
}
