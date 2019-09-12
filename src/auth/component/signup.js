import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
// import Style from '../styles/Signup';
class Signup extends Component {
    signupCall=()=> {
        this.props.signupData(this.props);
      };

    render() {
        return (
            <View>
                <Text>Trail</Text>
                <View>

                    <Text>Username</Text>
                    <TextInput style={{ borderColor: 'black', borderWidth: 1 }}
                        placeholder="Username"

                        value={this.props.username}
                        onChangeText={e => this.props.getUserInputFields('username', e)} />
                    <Text>Email</Text>
                    <TextInput style={{ borderColor: 'black', borderWidth: 1 }}
                        placeholder="example@gmail.com"

                        value={this.props.email}
                        onChangeText={e => this.props.getUserInputFields('email', e)} />

                    <Text>Password</Text>
                    <TextInput style={{ borderColor: 'black', borderWidth: 1 }}
                        placeholder="******"

                        value={this.props.password}
                        onChangeText={e => this.props.getUserInputFields('password', e)} />
                    <Text>Confirm Password</Text>
                    <TextInput style={{ borderColor: 'black', borderWidth: 1 }}
                        placeholder="******"

                        value={this.props.confirmPassword}
                        onChangeText={e => this.props.getUserInputFields('confirmPassword', e)} />
                    <TouchableOpacity onPress={this.signupCall} >
                        <Text
                            style={{
                               borderColor: 'blue',
                                borderWidth: 1 ,
                                fontSize: 15,
                                fontWeight: 'bold',
                            }}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
}

export default Signup;