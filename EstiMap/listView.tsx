/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Image, Button, TouchableOpacity, FlatList } from 'react-native';
import { Colors } from './colors.js';
import SearchField from './searchfield.tsx';
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
    {id: '1', text:'House 1' },
    {id: '2', text:'House 2' },
    {id: '3', text:'House 3' },
   ];

  const renderItem = ({ item }) => (
    <View style = {styles.listIem}>
        <Text>{item.text}</Text>
    </View>
   );

  return (
   <View style={ styles.backgroundContainer }>
         <View style={styles.whiteStrip}>
             <View style={styles.logoContainer}>
                 <Image
                   source={require('./imageassets/text_logo.png')}
                   style={styles.textLogo}
                 />
             </View>
         </View>

         <View style={styles.subheaderContainer}>
         <SearchField></SearchField>
         </View>
        <View style = {{height: 80}}/>

        <View style={styles.listcontainer}>
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
  whileStrip: {
  backgroundColor: 'white',
  height: 10, // Adjust the height according to your design
  width: '100%',
  fontFamily: 'RabbidHighwaySignII',
  fontSize: 20,
  paddingBottom: 5,
  paddingTop: 10,
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

 listItem: {
    flex: 1,
    width: '100%',
    height: 40,
    backgroundColor: Colors.grey,
    borderWidth: 5,
    BorderColor: Colors.black_background,
    fontFamily: 'RabbidHighwaySignII',
    fontSize: 20,
    paddingBottom: 5,
    paddingTop: 10,
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
 },

 centeredImage: {
      // resizeMode: 'contain',
      width: 147,
      height: 199,
    },

listcontainer: {
    width: '100%',
    backgroundColor: Colors.grey,
    height:250,
    flex: 1,
    },
 textLogo: {
    width: 147,
    height: 40.
    },
});

export default listView;
