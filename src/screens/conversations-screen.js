/**
 * Created by ponty on 29/04/2016.
 */
import React, { Component, View, Text, StyleSheet, Image, ListView} from 'react-native';
import Button from './../components/button/button'
import { Actions } from 'react-native-router-flux'
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
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#42C0FB",
        marginBottom: 10
    },

    listRow: {
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 12
    },
    column: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#42C0FB"
    },
    headerImg: {
        height: 40,
        width: 40
    },
    dp: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    last_msg: {
        color: "#666",
        fontSize: 13,
        marginTop: 5
    },
    time: {
        color: "#42C0FB",
        fontSize: 12
    },
    innerRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

const username = 'bolajee';

const dummy_chats = [
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
        convo_id: "bolajee_ponty96",
        last_msg: "lorem ipsum lactum tactum",
        time: "11:00pm",
        sender_dp: "https://www.gravatar.com/avatar/38e249098df3eeb83da393c1b2616a24?s=32&d=identicon&r=PG",
        receiver_dp: "https://www.gravatar.com/avatar/b0c68cd8ea105ef0e8fbe8f7e0fdbf5e?s=32&d=identicon&r=PG",
        unread: true
    },
    {
        sender: "pon6",
        receiver: "bolajee",
        convo_id: "bolajee_ponty96",
        last_msg: "lorem ipsum lactum tactum",
        time: "11:00pm",
        sender_dp: "https://www.gravatar.com/avatar/b0c68cd8ea105ef0e8fbe8f7e0fdbf5e?s=32&d=identicon&r=PG",
        receiver_dp: "https://www.gravatar.com/avatar/38e249098df3eeb83da393c1b2616a24?s=32&d=identicon&r=PG",
        unread: true
    }
];

export default class ConversationsScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            conversations: ds
        }
    }

    componentWillMount() {
        this.setState({
            conversations: this.state.conversations.cloneWithRows(dummy_chats)
        })
    }

    renderRow = (rowData) => {
        return (
            <Button onPress={() =>  Actions.conversation_screen({convo_id:rowData.convo_id})}>
                <View style={styles.listRow}>
                    <Image source={{uri:username != rowData.sender ? rowData.sender_dp : rowData.receiver_dp}}
                           style={styles.dp}/>
                    <View style={styles.column}>
                        <View style={styles.innerRow}>
                            <Text>{ rowData.sender ? rowData.sender : rowData.receiver}</Text>
                            <Text style={styles.time}>{rowData.time}</Text>
                        </View>
                        <Text style={styles.last_msg}>{rowData.last_msg}</Text>
                    </View>
                </View>
            </Button>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={require('./../assets/icon.png')} style={styles.headerImg}/>
                    <Text style={styles.main_text}>Conversations</Text>
                </View>
                <ListView
                    renderRow={this.renderRow}
                    dataSource={this.state.conversations}/>
            </View>
        )
    }
}
