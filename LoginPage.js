import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { connect } from 'react-redux'
import {Login} from "./User";

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            isError: false,
        }
    }

    loginCheck() {
        const { dispatch } = this.props
        if (this.state.password === 'admin') {
            dispatch(Login.login(this.state.userName))
            this.props.navigation.navigate("Home")
        } else {
            this.state.isError = true
        }
    }

    render() {
        return (
            <View style={styles.page}>
                <View style={styles.container}>
                    <Image
                        source={require("./assets/sanber.png")}
                        style={styles.Gambar}
                    />
                    <Text style={styles.Title}>Login</Text>
                </View>

                <Text style={styles.FormText}>Username</Text>
                <TextInput
                    style={styles.Form}
                    placeholder='Masukkan Nama User/Email'
                    onChangeText={userName => this.setState({userName})}
                />
                <Text style={styles.FormText}>Password</Text>
                <TextInput
                    style={styles.Form}
                    placeholder='Masukkan Password'
                    onChangeText={password => this.setState({password})}
                    secureTextEntry={true}
                />
                <Text style={this.state.isError ? styles.errorText : styles.hiddenErrorText}>Password Anda Salah</Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.ButtonLogin} onPress={() => this.loginCheck()}>
                        <Text style={styles.ButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonDaftar} onPress={() => alert("Passwordnya admin")}>
                        <Text style={styles.Lupa} >Lupa Password ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#97FFE0'
    },
    container: {
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    Gambar: {
        width: 300,
        height: 50,
    },
    Title: {
        fontSize: 24,
        color: "#003366",
        marginTop: 20,
        fontWeight: "bold",
    },
    FormText: {
        fontSize: 18,
        color: "#003366",
        marginHorizontal: 20,
        marginTop: 10,
    },
    Form: {
        borderColor: "#003366",
        height: 50,
        margin: 20,
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    ButtonLogin: {
        backgroundColor: "#818DFF",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 200,
        borderRadius: 10,
    },
    ButtonText: {
        color: "white",
        fontSize: 18,
    },
    Lupa: {
        fontSize: 14,
        color: "#2C34FF",
        marginTop: 10,
        padding: 10
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },
    hiddenErrorText: {
        color: 'transparent',
        textAlign: 'center',
    },
    buttons: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50
    }
});

const mapStateToProps = (state) => ({
    userName : state.userName
})

export default connect(mapStateToProps)(LoginPage)
