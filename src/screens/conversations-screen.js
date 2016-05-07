/**
 * Created by ponty on 29/04/2016.
 */
import React, {
    Component,
    View,
    Text,
    StyleSheet,
    Image,
    ListView,
    TouchableHighlight,
    Modal,
    TextInput
} from 'react-native';

import Button from './../components/button/button'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash';
import {connect} from 'react-redux';
import { startConvo } from './../actions/';

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
        justifyContent: "space-between",
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
    },
    add_text: {
        fontSize: 16,
        textAlign: "right",
        alignSelf: "center",
        color: "#42C0FB",
        marginRight: 10
    },
    modalContainer: {
        backgroundColor: '#42C0FB',
        flex: 1,
        flexDirection: "column",
        paddingTop: 30
    },
    rowRight: {
        flexDirection: "row",
        justifyContent: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: "#42C0FB",
        marginBottom: 10
    },
    close_btn: {
        alignSelf: "flex-end",
        borderWidth: 1,
        borderColor: "#fff",
        width: 50,
        height: 30,
        justifyContent: "center",
        marginRight: 15,
    },
    input:{
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        height:50,
        marginBottom:5,
        marginLeft:5
    },
    text: {
        textAlign: "center",
        color:"#fff"
    },
    submit_btn: {
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#fff",
        width: 100,
        height: 30,
        justifyContent: "center",
        marginRight: 15,
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

function mapStateToProps(state) {
    return {
        Chats: state.Chats,
        dispatch: state.dispatch

    }
};

class ConversationsScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            conversations: ds,
            modalVisible: false,
            contact_name: "",
            new_contact_message: ""
        }
    }

    componentWillMount() {
        //sort first by time
        const { dispatch , Chats} =  this.props;

        const convos = _.uniq(Chats.chats, 'convo_id');
        this.setState({
            conversations: this.state.conversations.cloneWithRows(convos)
        })
    }

    closeModal = () => {
        this.setState({modalVisible: false})
    }
    openModal = () => {
        this.setState({modalVisible: true})
    }

    addContact = (name,message) => {
        const {dispatch, Chats} = this.props;
        dispatch(startConvo(name,message));
        this.closeModal();
    }

    renderModal = () => {
        const animated = true;
        const transparent = false;

        return (
            <Modal animated={animated} transparent={transparent} visible={this.state.modalVisible}
                   onRequestClose={() => {this.closeModal()}}>
                <View style={styles.modalContainer}>
                    <View style={styles.rowRight}>
                        <Button
                            style={styles.close_btn}
                            onPress={this.closeModal}>
                            <Text style={styles.text}>Close</Text>
                        </Button>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Contact Name"
                        onChangeText={(text) =>  this.setState({contact_name:text})}/>

                    <TextInput
                        style={styles.input}
                        placeholder="Say Hello to Contact"
                        onChangeText={(text) =>  this.setState({new_contact_message:text})}/>

                    <Button
                        style={styles.submit_btn}
                        onPress={() => this.addContact(this.state.contact_name, this.state.new_contact_message)}>
                        <Text style={styles.text}>Submit</Text>
                    </Button>
                </View>
            </Modal>
        )
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
        console.log(this.props)
        const modalVisible = this.state.modalVisible;
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={require('./../assets/icon.png')} style={styles.headerImg}/>
                    <Text style={styles.main_text}>Conversations</Text>
                    <TouchableHighlight
                        style={{marginTop:10}}
                        onPress={this.openModal}
                        underlayColor="transparent">
                        <Text style={styles.add_text}>Add</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    { modalVisible ? this.renderModal() : <View></View>}
                </View>
                <ListView
                    renderRow={this.renderRow}
                    dataSource={this.state.conversations}/>
            </View>
        )
    }
}


export default connect(mapStateToProps)(ConversationsScreen)