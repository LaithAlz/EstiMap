import {StyleSheet, Text, View} from 'react-native'
import React, { useEffect } from 'react'
import { BackHandler } from 'react-native';

const Map = () => {
    useEffect(() => {
    const backAction = () => {
      // Prevent going back
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      // Remove the event listener when the component is unmounted
      backHandler.remove();
    };
  }, []);
    return (
        <View>
        <Text> Map </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContainer: "center",
    },
    smallText: {
        color: "#000000",
    }
})

export default Map