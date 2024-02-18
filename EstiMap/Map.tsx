import {StyleSheet, Text, View} from 'react-native'
import React, { useEffect, useRef } from 'react'
import { BackHandler } from 'react-native';
import { Image, Button, TouchableOpacity } from 'react-native';
import { Colors } from './colors.js';
import TextInputField from './textinputfield.tsx';
import type {PropsWithChildren} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const Map = () => {
    useEffect(() => {
    const backAction = () => {
      // Prevent going back
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

fitToMarker();

    return () => {
      // Remove the event listener when the component is unmounted
      backHandler.remove();
    };
  }, []);

const markerCoordinates = { latitude: 37.78825, longitude: -122.4324 };

    const mapRef = useRef(null);

  // Calculate padding for the map bounds (optional)
  const padding = 50;


    // Function to fit the map to the marker
 const fitToMarker = () => {
     if (mapRef.current) {
       mapRef.current.fitToCoordinates([markerCoordinates], {
         edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
         animated: true,
       });
     }
   };


    return (
        <View style={styles.container}>
              <MapView
              provider={PROVIDER_GOOGLE}
              ref={mapRef}
                style={styles.map}
                initialRegion={{
                  latitude: 43.43555797436538,
                  longitude: -79.75324749002645,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}

              >
                <Marker
                  coordinate={markerCoordinates}
                  title="Marker Title"
                  description="Marker Description"
                />
              </MapView>
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
    },
    map: {
        width : 380,
        height : 700,
    },
})

export default Map