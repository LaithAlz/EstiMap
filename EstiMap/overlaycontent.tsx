import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Colors } from './colors.js';

const OverlayContent = ({selected, date, setDate, price, setPrice}) => {


  const [priceIcon, setPriceIcon] = useState('');


  useEffect(() => {
        setPrice(parseInt(selected.price))

    if (price < 500000) {
      setPriceIcon('cheapprice.png');
    } else if (price < 1500000) {
      setPriceIcon('midprice.png');
    } else {
      setPriceIcon('highprice.png');
    }
  }, [selected]);



  useEffect(() => {
    if (selected.date) {
            let year = selected.date.substring(0, 4);
            let month = selected.date.substring(4, 6);
            let day = selected.date.substring(6, 8);

            let date = new Date(year, month - 1, day);
            let formattedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
            setDate(formattedDate);
        } else {
            // Handle the case where selected.date is null or undefined
            setDate(""); // Set date to an empty string or any default value as needed
        }

  }, [selected.date, date])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeContainer}>
        <Image
          source={require('./imageassets/home.png')}
          style={ {height: 90, width: 90} }
        />
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.highlight}>
        {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </Text>

        </View>

        <View style={styles.priceIconContainer}>
                <Image
                  source={require('./imageassets/cheapprice.png')}
                  style={ {height: 20, width: 20} }
                />
              </View>

           <View style={styles.calendarIconContainer}>
                          <Image
                            source={require('./imageassets/calendar.png')}
                            style={ {height: 25, width: 25} }
                          />
                        </View>

              <View style={styles.sizeIconContainer}>
                                       <Image
                                         source={require('./imageassets/full-size.png')}
                                         style={ {height: 25, width: 25} }
                                       />
                                     </View>


              <View style={styles.bedIconContainer}>
                                                     <Image
                                                       source={require('./imageassets/bed.png')}
                                                       style={ {height: 25, width: 25} }
                                                     />
                                                   </View>

              <View style={styles.bathroomIconContainer}>
                                                                   <Image
                                                                     source={require('./imageassets/bathroom.png')}
                                                                     style={ {height: 25, width: 25} }
                                                                   />
                                                                 </View>

 <View style={styles.calendarTextContainer}>
              <Text style={styles.calendarText}>
                   {date}
              </Text>
              </View>


<View style={styles.sqftTextContainer}>
              <Text style={styles.sqftText}>
                   {selected.sqft_living} sqft
              </Text>
              </View>

              <View style={styles.bedTextContainer}>
                            <Text style={styles.bedText}>
                                 {selected.bedrooms} Bedroom
                            </Text>
                            </View>

             <View style={styles.bathTextContainer}>
                                         <Text style={styles.bathText}>
                                              {selected.bathrooms} Bathroom
                                         </Text>
                                         </View>




    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 370,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center', // <-- Corrected typo here
    // backgroundColor: 'yellow',
  },
  homeContainer: {
      width: 90,
      height: 90,
      left: -120,
      bottom: -140,
    },
   priceContainer: {
     width: 190,
     height: 60,
     left: 60,
     bottom: -55,
     justifyContent: 'center',
     alignItems: 'center',

    // backgroundColor: 'yellow',
   },

   priceIconContainer: {
           width: 30,
           height: 30,
           left: 55,
           bottom: -45,
           justifyContent: 'center',
                alignItems: 'center',
       },

   highlight: {
       // fontWeight: '700',
       fontFamily: 'RabbidHighwaySignII',
       fontSize: 25,
       color: Colors.black_background,
      // paddingBottom: 5,
       // paddingTop: 10,
       // paddingLeft: 5,
       // color: Colors.black_background,
     },



     calendarIconContainer: {
                width: 25,
                height: 25,
                left: -120,
                bottom: -55,
                justifyContent: 'center',
                     alignItems: 'center',
            },

     calendarTextContainer: {
                     width: 100,
                     height: 40,
                     left: -120,
                     bottom: 75,
                     justifyContent: 'center',
                          alignItems: 'center',

                 },

    calendarText: {
                // fontWeight: '700',
                fontFamily: 'RabbidHighwaySignII',
                fontSize: 15,
                color: Colors.black_background,
               // paddingBottom: 5,
                // paddingTop: 10,
                // paddingLeft: 5,
                // color: Colors.black_background,
                  left: 70,
                  bottom: -20,
              },

     sqftTextContainer: {
                          width: 100,
                          height: 40,
                          left: -120,
                          bottom: 75,
                          justifyContent: 'center',
                               alignItems: 'center',

                      },

         sqftText: {
                     // fontWeight: '700',
                     fontFamily: 'RabbidHighwaySignII',
                     fontSize: 15,
                     color: Colors.black_background,
                    // paddingBottom: 5,
                     // paddingTop: 10,
                     // paddingLeft: 5,
                     // color: Colors.black_background,
                       left: 60,
                       bottom: -15,
                   },

      bedTextContainer: {
                                width: 100,
                                height: 40,
                                left: 115,
                                bottom: 135,
                                justifyContent: 'center',
                                     alignItems: 'center',

                            },

               bedText: {
                           // fontWeight: '700',
                           fontFamily: 'RabbidHighwaySignII',
                           fontSize: 15,
                           color: Colors.black_background,
                          // paddingBottom: 5,
                           // paddingTop: 10,
                           // paddingLeft: 5,
                           // color: Colors.black_background,

                         },

      bathTextContainer: {
                                      width: 100,
                                      height: 40,
                                      left: 115,
                                      bottom: 140,
                                      justifyContent: 'center',
                                           alignItems: 'center',

                                  },

                     bathText: {
                                 // fontWeight: '700',
                                 fontFamily: 'RabbidHighwaySignII',
                                 fontSize: 15,
                                 color: Colors.black_background,
                                // paddingBottom: 5,
                                 // paddingTop: 10,
                                 // paddingLeft: 5,
                                 // color: Colors.black_background,

                               },

     sizeIconContainer: {
     width: 25,
                     height: 25,
                     left: -120,
                     bottom: -65,
                     justifyContent: 'center',
                          alignItems: 'center',
     },

     bedIconContainer: {
          width: 25,
                          height: 25,
                          left: 50,
                          bottom: -2,
                          justifyContent: 'center',
                               alignItems: 'center',
          },

     bathroomIconContainer: {
               width: 25,
                               height: 25,
                               left: 50,
                               bottom: -10,
                               justifyContent: 'center',
                                    alignItems: 'center',
               },




});

export default OverlayContent;
