/**
 * Created by ponty on 29/04/2016.
 */
import React, { Component, View, Text, StyleSheet, Image, ListView, TextInput, Dimensions} from 'react-native';
import Button from './../components/button/button';
import { Actions } from 'react-native-router-flux'
import KeyboardSpacer from 'react-native-keyboard-spacer'

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    main_text: {
        fontSize: 16,
        textAlign: "center",
        alignSelf: "center",
        color: "#42C0FB",
        marginLeft: 5
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#42C0FB",
        marginBottom: 10,
        padding:5
    },
    back_img: {
        marginTop: 8,
        marginLeft: 8,
        height: 20,
        width: 20
    },
    innerRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    back_btn: {},
    dp: {
        height: 35,
        width: 35,
        borderRadius: 17.5,
        marginLeft:5,
        marginRight:5
    },
    messageBlock: {
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#42C0FB",
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: "center",
        alignSelf: "flex-start",
        borderRadius: 6,
        marginBottom: 5
    },
    messageBlockRight: {
        flexDirection: "column",
        backgroundColor: "#fff",
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        borderRadius: 6,
        marginBottom: 5
    },
    text: {
        color: "#5c5c5c",
        alignSelf: "flex-start"
    },
    time: {
        alignSelf: "flex-start",
        color: "#5c5c5c",
        marginTop:5
    },
    timeRight: {
        alignSelf: "flex-end",
        color: "#42C0FB",
        marginTop:5
    },
    textRight: {
        color: "#42C0FB",
        alignSelf: "flex-end",
        textAlign: "right"
    },
    input:{
        borderTopColor:"#e5e5e5",
        borderTopWidth:1,
        padding:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    textInput:{
        height:50,
        width:(width * 0.85),
        color:"#e8e8e8",
    },
    msgAction:{
        height:29,
        width:29,
        marginTop:13
    }
});

const username = 'bolajee';

const chats = [
    {
        sender: "ponty96",
        receiver: "bolajee",
        convo_id: "bolajee_ponty96",
        last_msg: "lorem ipsum lactum tactum",
        time: "11:00pm",
        sender_dp: "https://avatars3.githubusercontent.com/u/11190968?v=3&s=460",
        receiver_dp: "https://www.gravatar.com/avatar/b0c68cd8ea105ef0e8fbe8f7e0fdbf5e?s=32&d=identicon&r=PG",
        unread: true
    },
    {
        sender: "walexy",
        receiver: "bolajee",
        convo_id: "bolajee_walexy",
        last_msg: "lorem ipsum lactum tactum",
        time: "11:00pm",
        sender_dp: "https://www.gravatar.com/avatar/38e249098df3eeb83da393c1b2616a24?s=32&d=identicon&r=PG",
        receiver_dp: "https://www.gravatar.com/avatar/b0c68cd8ea105ef0e8fbe8f7e0fdbf5e?s=32&d=identicon&r=PG",
        unread: true
    },
    {
        sender: "pon6",
        receiver: "bolajee",
        convo_id: "bolajee_pont6",
        last_msg: "lorem ipsum lactum tactum",
        time: "11:00pm",
        sender_dp: "https://www.gravatar.com/avatar/b0c68cd8ea105ef0e8fbe8f7e0fdbf5e?s=32&d=identicon&r=PG",
        receiver_dp: "https://www.gravatar.com/avatar/38e249098df3eeb83da393c1b2616a24?s=32&d=identicon&r=PG",
        unread: true
    },
    {
        sender: "ponty96",
        receiver: "bolajee",
        convo_id: "bolajee_ponty96",
        last_msg: "lorem ipsum lactum tactum",
        time: "11:00pm",
        sender_dp: "https://avatars3.githubusercontent.com/u/11190968?v=3&s=460",
        receiver_dp: "https://www.gravatar.com/avatar/b0c68cd8ea105ef0e8fbe8f7e0fdbf5e?s=32&d=identicon&r=PG",
        unread: true
    },
    {
        sender: "ponty96",
        receiver: "bolajee",
        convo_id: "bolajee_ponty96",
        last_msg: "lorem ipsum lactum tactum",
        time: "11:00pm",
        sender_dp: "https://avatars3.githubusercontent.com/u/11190968?v=3&s=460",
        receiver_dp: "https://www.gravatar.com/avatar/b0c68cd8ea105ef0e8fbe8f7e0fdbf5e?s=32&d=identicon&r=PG",
        unread: true
    },
    {
        sender: "bolajee",
        receiver: "ponty96",
        convo_id: "bolajee_ponty96",
        last_msg: "lorem ipsum lactum tactum",
        time: "11:00pm",
        sender_dp: "https://avatars3.githubusercontent.com/u/11190968?v=3&s=460",
        receiver_dp: "https://www.gravatar.com/avatar/b0c68cd8ea105ef0e8fbe8f7e0fdbf5e?s=32&d=identicon&r=PG",
        unread: true
    },
    {
        sender: "bolajee",
        receiver: "ponty96",
        convo_id: "bolajee_ponty96",
        last_msg: "lorem ipsum lactum tactum",
        time: "11:00pm",
        sender_dp: "https://avatars3.githubusercontent.com/u/11190968?v=3&s=460",
        receiver_dp: "https://www.gravatar.com/avatar/b0c68cd8ea105ef0e8fbe8f7e0fdbf5e?s=32&d=identicon&r=PG",
        unread: true
    }
];

export default class ConversationScreen extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            conversation: ds,
            text:""
        }
    }

    componentWillMount() {
        this.setState({
            conversation: this.state.conversation.cloneWithRows(chats)
        })
    }

    renderRow = (rowData) => {
        return (
            <View>

            </View>
        )
    }

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Button
                        style={styles.back_btn}
                        onPress={() => Actions.pop()}>
                        <Image source={require('./../assets/back_chevron.png')} style={styles.back_img}/>
                    </Button>
                    <View style={styles.innerRow}>
                        <Image source={{uri:"https://avatars3.githubusercontent.com/u/11190968?v=3&s=460"}} style={styles.dp}/>
                        <Text style={styles.main_text}>{this.props.convo_id}</Text>
                    </View>
                </View>

                <View style={styles.messageBlock}>
                    <Text style={styles.text}>
                        lorem ipsum lactum trtrtrtjkrtnjrtjknrtjkrtjkrnfddfdfdffdfddfdffdfdfdfdfdfdfd
                    </Text>
                    <Text style={styles.time}>11:53pm</Text>
                </View>

                <View style={styles.messageBlockRight}>
                    <Text style={styles.textRight}>
                        lorem ipsum lactum trtrtrtjkrtnjrtjknrtjkrtj
                        dsdsdsdsdss
                        dsds
                        ds
                        ds
                        ds
                        dsdsdskrnfddfdfdffdfddfdffdfdfdfdfdfdfd
                    </Text>
                    <Text style={styles.timeRight}>11:53pm</Text>
                </View>
                <View style={styles.messageBlock}>
                    <Text style={styles.text}>
                        lorem ipsum lactum trtrtrtjkrtnjrtjknrtjkrtjkrnfddfdfdffdfddfdffdfdfdfdfdfdfd
                    </Text>
                    <Text style={styles.time}>11:53pm</Text>
                </View>

                <View style={styles.messageBlockRight}>
                    <Text style={styles.textRight}>
                        lorem ipsum lactum trtrtrtjkrtnjrtjknrtjkrtj
                        dsdsdsdsdss
                        dsds
                        ds
                        ds
                        ds
                        dsdsdskrnfddfdfdffdfddfdffdfdfdfdfdfdfd
                    </Text>
                    <Text style={styles.timeRight}>11:53pm</Text>
                </View>
                <View style={styles.messageBlock}>
                    <Text style={styles.text}>
                        lorem ipsum lactum trtrtrtjkrtnjrtjknrtjkrtjkrnfddfdfdffdfddfdffdfdfdfdfdfdfd
                    </Text>
                    <Text style={styles.time}>11:53pm</Text>
                </View>

                <View style={styles.messageBlockRight}>
                    <Text style={styles.textRight}>
                        lorem ipsum lactum trtrtrtjkrtnjrtjknrtjkrtj
                        dsdsdsdsdss
                        dsds
                        ds
                        ds
                        ds
                        dsdsdskrnfddfdfdffdfddfdffdfdfdfdfdfdfd
                    </Text>
                    <Text style={styles.timeRight}>11:53pm</Text>
                </View>

                <View style={styles.input}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({text:text})}
                        placeholder="Type a message"/>
                    <Button>
                        <Image source={require('./../assets/phone.png')} style={styles.msgAction}/>
                    </Button>
                </View>
                <KeyboardSpacer/>
            </View>
        )
    }


}
