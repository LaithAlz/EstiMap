import {StyleSheet, Text, View} from 'react-native'
import React, { useEffect, useRef } from 'react'
import { BackHandler } from 'react-native';
import { Image, Button, TouchableOpacity } from 'react-native';
import { Colors } from './colors.js';
import TextInputField from './textinputfield.tsx';
import type {PropsWithChildren} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import SearchBar from './searchbar.tsx'

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

   const zoomOut = () => {
     const newRegion = {
       latitude: markerCoordinates.latitude,
       longitude: markerCoordinates.longitude,
       latitudeDelta: 0.5, // Broaden the area
       longitudeDelta: 0.5, // Broaden the area
     };

     if (mapRef.current) {
       mapRef.current.animateToRegion(newRegion, 1000); // 1000ms animation duration
     }
   };


    return (
        <View style={styles.container}>
                <View style={styles.header}>
                <View style = {{height: 7}}/>
                <Image
               source={require('./imageassets/text_logo.png')}
               style={{width: 170, height: 40}}
             />
                </View>






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

<Button title="Zoom Out" onPress={zoomOut} />



              <View style = {styles.tabContainer}/>
               <View style = {styles.houseContainer}>
                    <Image source={require('./imageassets/house_overlay_transparent.png')} style={{width: 500, height: 130}} />
                  </View>

                <View style = {styles.searchBarContainer}>
                              <SearchBar/>
                               </View>

                    <View style = {styles.magnifyingGlassContainer}>
                               <Image source={require('./imageassets/61088.png')} style={{width: 20, height: 20}} />
                    </View>
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
        width : '100%',
        height : 700,
    },
    header: {
        width: '100%',
        height: 50,
        alignItems: "center",
                justifyContainer: "center",
        backgroundColor: Colors.white_background,
    },
    tabContainer: {

        borderColor: Colors.black_background,
        borderWidth: 1,
        height: 300,
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#ffffff',
        bottom: 160,
    },

    square: {
        bottom: 800,
        width: '100%',
        height: 168,
        backgroundColor: Colors.dark_purple, // Square color
        position: 'relative',
        alignItems: "center",
         overflow: 'hidden',
      },
      triangle: {
        width: '100%',
        height: 0,
        borderLeftWidth: 200,
        borderRightWidth: 200,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent', // Triangle color (background color of the square)
        position: 'relative',
        paddingTop: 20,
        top: 50,
        left: 0,
        backgroundColor: 'transparent',
      },

      houseContainer: {
      width: 500,
      height: 130,
      bottom: 1000,
      alignItems: "center",
              justifyContainer: "center",
      },

      searchBarContainer: {
      bottom: 1115,
      left: 0,
      width: '65%',
      height: 50,
      },

      magnifyingGlassContainer: {
            width: 500,
            height: 130,
            left: 105,
            bottom: 1160,
            alignItems: "center",
                    justifyContainer: "center",
            },



})

export default Map