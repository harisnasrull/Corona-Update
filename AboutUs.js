import React from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DEVICE = Dimensions.get("window");

export default class HomePage extends React.Component {

    back() {
        this.props.navigation.navigate("Home")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <TouchableOpacity style={styles.itemNav} onPress={() => this.back()}>
                        <Icon name="keyboard-backspace" size={50}/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.text}>About Us</Text>

                <ScrollView style={{marginTop: 20}}>
                    <View style={styles.itemPeople}>
                        <View style={styles.profile}>
                            <Image
                                source={require("./assets/anjar.jpg")}
                                style={styles.photo}
                            />
                            <Text style={styles.name} numberOfLines={2}>
                                Muhammad Anjar Harimurti Rahadi
                            </Text>
                        </View>
                        <View style={styles.sosmed}>
                            <View style={styles.itemSosmed}>
                                <Image source={require("./assets/instagram.png")}/>
                                <Text style={styles.textSosmed}>@args06</Text>
                            </View>
                            <View style={styles.itemSosmed}>
                                <Icon name="twitter" size={50} color="#5DA9DD"/>
                                <Text style={styles.textSosmed}>@args06</Text>
                            </View>
                            <View style={styles.itemSosmed}>
                                <Image source={require("./assets/gitlab.png")}/>
                                <Text style={styles.textSosmed}>args06</Text>
                            </View>
                            <View style={styles.itemSosmed}>
                                <Icon name="github-circle" size={50} color="black"/>
                                <Text style={styles.textSosmed}>args06</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.itemPeople}>
                        <View style={styles.profile}>
                            <Image
                                source={require("./assets/haris.jpg")}
                                style={styles.photo}
                            />
                            <Text style={styles.name} numberOfLines={2}>
                                Haris Nasrulloh
                            </Text>
                        </View>
                        <View style={styles.sosmed}>
                            <View style={styles.itemSosmed}>
                                <Image source={require("./assets/instagram.png")}/>
                                <Text style={styles.textSosmed}>@harisnasrullah2017</Text>
                            </View>
                            <View style={styles.itemSosmed}>
                                <Icon name="twitter" size={50} color="#5DA9DD"/>
                                <Text style={styles.textSosmed}>@haris_nasrull</Text>
                            </View>
                            <View style={styles.itemSosmed}>
                                <Image source={require("./assets/gitlab.png")}/>
                                <Text style={styles.textSosmed}>harisnasrulloh</Text>
                            </View>
                            <View style={styles.itemSosmed}>
                                <Icon name="github-circle" size={50} color="black"/>
                                <Text style={styles.textSosmed}>harisnasrull</Text>
                            </View>
                            <View style={styles.itemSosmed}>
                                <Icon name="facebook-box" size={50} color="blue"/>
                                <Text style={styles.textSosmed}>Haris Nasrul</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#13FFAA'
    },
    navBar: {
        height: 75,
        flexDirection: "row",
        width: DEVICE.width,
    },
    itemNav: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: 20,
        marginLeft: 15,
    },
    text: {
        fontSize: 28,
        alignSelf: "center",
        marginBottom: 20,
    },
    itemPeople: {
        flexDirection: "column",
        backgroundColor: "#7DD9ED",
        paddingTop: 30,
    },
    profile: {
        flexDirection: "row",
        marginHorizontal: 30,
        alignItems: "center",
    },
    photo: {
        width: 75,
        height: 75,
        borderRadius: 75,
    },
    name: {
        fontSize: 20,
        marginHorizontal: 20,
    },
    sosmed: {
        flexDirection: "column",
        alignItems: 'flex-start',
        backgroundColor: "white",
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
    itemSosmed: {
        flexDirection: "row",
        alignItems: 'center',
    },
    textSosmed: {
        fontSize: 20,
        marginLeft: 10,
    },
});
