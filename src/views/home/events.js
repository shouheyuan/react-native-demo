import React from "react";
import { View, Text, Button, Alert, StyleSheet, TouchableHighlight } from "react-native";


function Events() {
    const handlerPress = () => {
        Alert.alert("Hello");
    }

    return (
        <View style={styles.container}>
            <Button title="click me" onPress={handlerPress}></Button>
            <TouchableHighlight activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => alert('Pressed!')}></TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: 'red',
        marginBottom: 100
    }
})

export default Events