import React from 'react';
import {useAuth} from '../providers/AuthProvider.js';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonFactory from '../components/buttons/ButtonFactory.js';
import IconButtonStyle from '../components/buttons/button-styles/IconButtonStyle.js';
import TextButtonStyle from '../components/buttons/button-styles/TextButtonStyle.js';

export default function MainMenu() {
  const navigation = useNavigation();
  const {signOut} = useAuth();
  const buttonFactory = new ButtonFactory();
  const onPressSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      return `Failed to sign out: ${error.message}`;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.viewStyle}>
        {
          buttonFactory.createButton({
            action: onPressSignOut,
            navigation,
            navTo: 'HomeScreen',
            buttonStyle: new TextButtonStyle('Logout'),
          }).component
        }
        <Text style={styles.textStyle}>Welcome</Text>
      </View>
      <View style={styles.CameraContainer}></View>
      <View style={styles.ProfileContainer}>
        {
          buttonFactory.createButton({
            navigation,
            navTo: 'Profile',
            buttonStyle: new IconButtonStyle(
              require('./../../data/images/Profile.png'),
              'Profile',
            ),
          }).component
        }
        {
          buttonFactory.createButton({
            navigation,
            navTo: 'Geocaching',
            buttonStyle: new IconButtonStyle(
              require('./../../data/images/Map.png'),
              'Map',
            ),
          }).component
        }
        {
          buttonFactory.createButton({
            message: 'Search Pressed',
            buttonStyle: new IconButtonStyle(
              require('./../../data/images/Search.png'),
              'Search',
            ),
          }).component
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  CameraContainer: {
    flex: 1.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 70,
  },
  ProfileContainer: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginTop: 350,
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#04120f',
    flex: 2,
  },
  viewStyle: {
    backgroundColor: '#29b89e',
    width: '100%',
    height: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
