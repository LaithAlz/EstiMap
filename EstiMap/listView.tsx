/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Image, Button, TouchableOpacity, FlatList, } from 'react-native';
import { Colors } from './colors.js';
import SearchField from './searchfield.tsx';
import TextInputField from './textinputfield.tsx';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.white,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.white,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function listView(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const data = [
      { id: '1', text: 'House 1', image: require('./imageassets/house1.jpg'), price: '$1,500,000.00' },
      { id: '2', text: 'House 2', image: require('./imageassets/house2.jpg'), price: '$900,000.00' },
      { id: '3', text: 'House 3', image: require('./imageassets/house3.jpg'), price: '$850,000.00'},
      { id: '4', text: 'House 4', image: require('./imageassets/house4.jpg'), price: '$1,200,000.00'},
    ];
  const [selectedOption, setSelectedOption] = useState(null); //filter options

  const options = ['  Increasing price  ', '  Decreasing Price  ', '  Distance  '];

  const handleOptionPress = (option) => {
      setSelectedOption(option === selectedOption ? null : option);
    };

    const renderItem = ({ item }) => (
      <View style={styles.listItem}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style = {styles.itemText}>{item.text}      Price: {item.price}</Text>
      </View>
    );

  return (
   <View style={ styles.backgroundContainer }>
         <View>
             <View style={styles.logoContainer}>
                 <Image
                   source={require('./imageassets/text_logo.png')}
                   style={styles.textLogo}
                 />
             </View>
         </View>

         <View style={styles.subheaderContainer}>
         <SearchField><Text>Search for a location</Text></SearchField>
         </View>
         <Text style = {styles.choose}> Filters:</Text>
         <View style={styles.scrollView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {options.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={[styles.option, { backgroundColor: option === selectedOption ? Colors.green : Colors.grey, borderRadius:90, }]}
                    onPress={() => handleOptionPress(option)}
                  >
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
        </ScrollView>
        </View>
        <View style={styles.listContainer}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  whiteStrip: {
  backgroundColor: 'white',
  height: 10, // Adjust the height according to your design
  width: '100%',
  fontFamily: 'RabbidHighwaySignII',
  fontSize: 20,
  paddingBottom: 5,
  paddingTop: 10,
  },
  listItem: {
  flexDirection: 'row',
  width: '100%',
  height: 120,
  backgroundColor: Colors.grey,
  borderWidth: 1,
  BorderColor: 'black',
  fontFamily: 'RabbidHighwaySignII',
  fontSize: 20,
  justifyContent: 'left',
  alignItems: 'center',
  paddingLeft:25,
   },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    // fontWeight: '700',
    fontFamily: 'RabbidHighwaySignII',
    fontSize: 20,
    paddingBottom: 5,
    paddingTop: 10,
    // color: Colors.black_background,
  },

 subheaderContainer: {
    fontFamily: 'RabbidHighwaySignII',
    backgroundColor: Colors.dark_purple,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    width: '100%',
    height: 90,
    },
 backgroundContainer: {
      flex: 1,
      backgroundColor: Colors.white_background,
    },

 logoContainer: {
       justifyContent: 'flex-start',
       alignItems: 'center',
       },

 authContainer: {
       paddingLeft: 20,
       fontFamily: 'RabbidHighwaySignII',
 },

buttonContainer: {
    alignItems: 'center',
},

 button: {
        alignItems: 'center',
        backgroundColor: Colors.purple,
        height: 58,
        color: Colors.white,

        fontWeight: 'bold',
        padding: 12,
        width: '90%',
        borderRadius: 30,
 },

 buttonText: {
    color: Colors.white_background,
    fontSize: 25,
    fontFamily: 'RabbidHighwaySignII',
 },

 centeredImage: {
      // resizeMode: 'contain',
      width: 147,
      height: 199,
    },

 scrollView: {
    flexDirection: 'row',
    width: '100%',
    height: 20,
    backgroundColor: Colors.grey,
    fontFamily: 'RabbidHighwaySignII',
    },
listContainer: {
    width: '100%',
    backgroundColor: Colors.grey,
    height:100,
    flex: 1,
    fontFamily: 'RabbidHighwaySignII',
    },
 option: {
    width: '100%',
    marginRight:10,
    marginLeft:10,
    fontFamily: 'RabbidHighwaySignII',
    flex: 1,

 },
 itemImage: {
 width: 75,
 height: 75,
 marginRight:10,
 borderRadius: 25,
 },
 choose: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'RabbidHighwaySignII',
    color: Colors.black_background,
 },
 textLogo: {
    width: 147,
    height: 40.
    },
 itemText: {
    fontFamily: 'RabbidHighwaySignII',
    color: 'black',
    },
});

export default listView;
