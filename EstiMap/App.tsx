/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { Image, Button, TouchableOpacity } from 'react-native';
import { Colors } from './colors.js';
import TextInputField from './textinputfield.tsx';
import type {PropsWithChildren} from 'react';
import axios from 'axios'

//Navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from './AppNavigator';

type AppProps = NativeStackScreenProps<RootStackParamList, 'App'>

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

const App = ({navigation}: AppProps) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
          e.preventDefault();

          if (!email || !password) {
            console.log("Email or Password Empty")
          } else {
            try {
              const config = { headers: { "Content-type": "application/json" } };

              const { data } = await axios.post(
                "http://10.0.2.2:3001/api/user/login",
                { email, password },
                config
              );

              if(data){
                 navigation.navigate("Map")
              }

            } catch (error) {
              console.log(error);
            }
          }
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
            <TextInputField  placeholder="Email" value={email} onChangeText={setEmail}></TextInputField>
            <View style = {{height: 70}}/>
            <Text style={styles.highlight}> Password</Text>
            <TextInputField placeholder="Password" value={password} onChangeText={setPassword}></TextInputField>
         </View>
         <View style = {{height: 240}}/>
         <View style={styles.buttonContainer}>
          <TouchableOpacity
                 style={styles.button}
                 onPress={handleSubmit}>
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
    fontSize: 17,
    paddingBottom: 5,
    paddingTop: 10,
    color: Colors.black_background,
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
       colors: Colors.black_background,
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

});

export default App;
