import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const footerStyles = StyleSheet.create({
    container: {

        flex: 0.15,
        justifyContent: 'flex-end',
        backgroundColor: '#F4CE14',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        width: '100%',

    },
    text: {
        padding: 10,
        fontSize: 10,
        color: 'black',
        textAlign: 'center',
    },
});

const LittleLemonFooter = () => {
    return (
        <View style={footerStyles.container}>
            <Text style={footerStyles.text}>
                All rights reserved by Little Lemon, 2023
            </Text>
        </View>
    );
};

export default LittleLemonFooter;