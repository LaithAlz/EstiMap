import {StyleSheet, Text, View} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { BackHandler } from 'react-native';
import { Image, Button, TouchableOpacity } from 'react-native';
import { Colors } from './colors.js';
import TextInputField from './textinputfield.tsx';
import type {PropsWithChildren} from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import SearchBar from './searchbar.tsx';
import OverlayContent from './overlaycontent.tsx';
import dataFile from './kc_house_data.json'


const Map = () => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState({})
  const [price, setPrice] = useState(0)
  const [date, setDate] = useState(0)
  const [formatted, setFormatted] = useState("");



  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    try {
      const first150 = dataFile.slice(0, 5);
      setMarkers(first150);
    } catch (error) {
      console.error("Failed to process data:", error);
    }


    return () => {
      backHandler.remove();
    };
  }, []);

  useEffect(() => {
  console.log(markers)
  }, [markers])

  useEffect(() => {
  console.log(`SEL: ${selected}`)
  }, [selected])

const markerCoordinates = { latitude: 47, longitude: -122.4324 };

    const mapRef = useRef(null);
  const padding = 50;

    const [region, setRegion] = useState({
      latitude: 47,
      longitude: -122,
      latitudeDelta: 3,
      longitudeDelta: 3,
    });

 const zoomIn = () => {
   setRegion(prevRegion => ({
     ...prevRegion,
     latitudeDelta: prevRegion.latitudeDelta / 2,
     longitudeDelta: prevRegion.longitudeDelta / 2,
   }));
 };

 const zoomOut = () => {
   setRegion(prevRegion => ({
     ...prevRegion,
     latitudeDelta: prevRegion.latitudeDelta * 2,
     longitudeDelta: prevRegion.longitudeDelta * 2,
   }));
 };

 const setS = (marker) => {

    setSelected(marker);
    setDate(marker.date)
 }

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
                 region={region}
                 onRegionChangeComplete={newRegion => setRegion(newRegion)}
               >
                 {
                   markers.length > 0 && markers.map((marker, index) => (
                     <Marker
                       key={index}
                       coordinate={{ latitude: parseFloat(marker.lat), longitude: parseFloat(marker.long) }}
                       title={marker.price ? parseInt(marker.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : ""}
                       onPress={() => {setS(marker)}}
                     />
                   ))
                 }
               </MapView>





              <View style = {styles.tabContainer}/>
               <View style = {styles.houseContainer}>
                    <Image source={require('./imageassets/house_overlay_transparent.png')} style={{width: 500, height: 130}} />
                  </View>

                <View style = {styles.searchBarContainer}>
                              <SearchBar formatted={formatted} setFormatted={setFormatted} setPrice={setPrice} setFDate={setDate} fDate={date} selected={selected} />
                               </View>

                    <View style = {styles.magnifyingGlassContainer}>
                    </View>

                    <View style = {styles.button2Container}>
                                        <TouchableOpacity onPress={zoomOut}>
                                          <Image
                                            source={require('./imageassets/minus-button.png')} // Adjust the path according to your project structure
                                            style={{ height: 30, width: 30 }}
                                          />
                                        </TouchableOpacity>
                                        </View>

                                        <View style = {styles.button1Container}>
                                                                                <TouchableOpacity onPress={zoomIn}>
                                                                                  <Image
                                                                                    source={require('./imageassets/plus-button.png')} // Adjust the path according to your project structure
                                                                                    style={{ height: 30, width: 30 }}
                                                                                  />
                                                                                </TouchableOpacity>
                                                                                </View>
 <View style = {styles.contentContainer}>
    <OverlayContent selected={selected} setPrice={setPrice} price={price} setDate={setDate} date={date} />
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
      bottom: 1125,
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

             button1Container: {
                        width: 30,
                        height: 30,
                        left: 170,
                        bottom: 1370,
                        alignItems: "center",
                                justifyContainer: "center",
                        },

              button2Container: {
                                     width: 30,
                                     height: 30,
                                     left: -170,

                                     bottom: 1340,
                                     alignItems: "center",
                                             justifyContainer: "center",
                                     },

              contentContainer: {
                                        width: 392,
                                                   height: 160,
                                                   left: 0,
                                                   width: '95%',

                                                   bottom: 820,
                                                   alignItems: "center",
                                                           justifyContainer: "center",




              },



})

export default Map