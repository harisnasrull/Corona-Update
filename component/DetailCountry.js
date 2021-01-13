import React from "react";
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DEVICE = Dimensions.get('window')

export default class HomePage extends React.Component {
    back() {
        this.props.navigation.navigate("Home")
    }

    convertDate = dateFull => {
        let convDate = dateFull
        let year = convDate.slice(0,4)
        let month = convDate.slice(5,7)
        let date = convDate.slice(8)
        switch (month) {
            case '01': month = 'January';break;
            case '02': month = 'February';break;
            case '03': month = 'March';break;
            case '04': month = 'April';break;
            case '05': month = 'May';break;
            case '06': month = 'June';break;
            case '07': month = 'July';break;
            case '08': month = 'August';break;
            case '09': month = 'September';break;
            case '10': month = 'October';break;
            case '11': month = 'November';break;
            case '12': month = 'December';break;
            default: month='Non'; break;
        }
        switch (date) {
            case '01': date = '1'; break;
            case '02': date = '2'; break;
            case '03': date = '3'; break;
            case '04': date = '4'; break;
            case '05': date = '5'; break;
            case '06': date = '6'; break;
            case '07': date = '7'; break;
            case '08': date = '8'; break;
            case '09': date = '9'; break;
            default: date = date;break;
        }
        return `${date} ${month} ${year}`
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <TouchableOpacity style={styles.itemNav} onPress={() => this.back()}>
                        <Icon name="keyboard-backspace" size={50}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.body}>
                    <Text style={styles.text}>{this.props.route.params.name}</Text>
                    <Text style={styles.textLastUpdate}>Last Update : {this.convertDate(this.props.route.params.date)}</Text>
                </View>

                <View style={styles.detail}>

                    <Text style={styles.text}>Confirmed</Text>
                    <View style={styles.countConfirmed}>
                        <Text style={styles.textCount}>{this.props.route.params.confirmed}</Text>
                    </View>

                    <Text style={styles.text}>Deaths</Text>
                    <View style={styles.countDeaths}>
                        <Text style={styles.textCount}>{this.props.route.params.death}</Text>
                    </View>

                    <Text style={styles.text}>Recovered</Text>
                    <View style={styles.countRecovered}>
                        <Text style={styles.textCount}>{this.props.route.params.recover}</Text>
                    </View>
                </View>
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
    body: {
        alignItems: "center",
    },
    text: {
        fontSize: 28,
        marginHorizontal: 20,
        marginTop: 0
    },
    textLastUpdate: {
        fontSize: 20,
        marginVertical: 20
    },
    textCount: {
        fontSize: 28,
        color: 'white'
    },
    detail: {
        borderWidth: 1,
        borderColor: "#000000",
        backgroundColor: '#7DD9ED',
        marginHorizontal: 25,
        padding: 20,
        borderRadius: 10,
        flexDirection: 'column',
    },
    countConfirmed: {
        padding: 20,
        marginVertical: 20,
        backgroundColor: "#6C6A6A",
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    countDeaths: {
        padding: 20,
        marginVertical: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FF5656',
        borderColor: 'white',
    },
    countRecovered: {
        padding: 20,
        marginVertical: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#0EAE00',
        borderColor: 'white',
    },
});
