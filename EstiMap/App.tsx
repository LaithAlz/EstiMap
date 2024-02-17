/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Image, Button, TouchableOpacity } from 'react-native';
import { Colors } from './colors.js';
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

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   <View style={ styles.backgroundContainer }>
         <View style = {{height: 40}}/>
         <View style={styles.logoContainer}>
             <Image
               source={require('./imageassets/full_logo.png')}
               style={styles.centeredImage}
             />
         </View>
         <View style = {{height: 40}}/>
         <View style={styles.authContainer}>
            <Text style={styles.highlight}> Username</Text>
            <TextInputField></TextInputField>
            <View style = {{height: 70}}/>
            <Text style={styles.highlight}> Password</Text>
            <TextInputField></TextInputField>
         </View>
         <View style = {{height: 240}}/>
         <View style={styles.buttonContainer}>
          <TouchableOpacity
                 style={styles.button}

               >
                 <Text style={styles.buttonText}>Let's Search!</Text>
               </TouchableOpacity>
          </View>
       </View>

  );
}

const styles = StyleSheet.create({
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
  },

 backgroundContainer: {
      flex: 1,
      backgroundColor: Colors.white_background,
    },

 logoContainer: {
       justifyContent: 'top',
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
 },

 centeredImage: {
      // resizeMode: 'contain',
      width: 147,
      height: 199,
    },

});

export default App;
