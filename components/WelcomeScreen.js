import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 0.3,


    },
    title: {
        marginTop: 30,
        marginBottom: 40,
        padding: 40,
        color: '#ffffff',
        fontSize: 32,
        textAlign: 'center',


    },
    text: {
        paddingLeft: 40,
        textAlign: 'center',
        paddingRight: 40,
        paddingBottom: 10,
        color: '#ffffff',
        fontSize: 14,
    },
});

const WelcomeScreen = () => {
    return (
        <View
            style={welcomeStyles.container}>
            <Text
                style={welcomeStyles.title}>
                Welcome to Little Lemon
            </Text>
            <Text
                style={welcomeStyles.text}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
            </Text>
        </View>
    );
};

export default WelcomeScreen;