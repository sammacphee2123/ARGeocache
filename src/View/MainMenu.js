import React from 'react';
import {useAuth} from '../providers/AuthProvider.js';
import {Alert} from 'react-native';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonFactory from '../components/buttons/ButtonFactory.js';

export default function MainMenu() {
  const navigation = useNavigation();
  const {signOut} = useAuth();
  const buttonFactory = new ButtonFactory();
  const onPressSignOut = async () => {
    console.log('Press sign out');
    try {
      await signOut();
      return true;
    } catch (error) {
      console.log('Failed to sign out');
      Alert.alert(`Failed to sign in: ${error.message}`);
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
            graphic: (
              <Text style={{fontWeight: 'bold', color: 'black'}}>Logout</Text>
            ),
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
            graphic: (
              <>
                <Image
                  source={require('./../../data/images/Profile.png')}
                  style={styles.ImageIconStyle}
                />
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  Profile
                </Text>
              </>
            ),
          }).component
        }
        {
          buttonFactory.createButton({
            navigation,
            navTo: 'Geocaching',
            graphic: (
              <>
                <Image
                  source={require('./../../data/images/Map.png')}
                  style={styles.ImageIconStyle}
                />
                <Text style={{fontWeight: 'bold', color: 'black'}}>Map</Text>
              </>
            ),
          }).component
        }
        {
          buttonFactory.createButton({
            successMessage: 'Search Pressed',
            graphic: (
              <>
                <Image
                  source={require('./../../data/images/Search.png')}
                  style={styles.ImageIconStyle}
                />
                <Text style={{fontWeight: 'bold', color: 'black'}}>Search</Text>
              </>
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

  ImageIconStyle: {
    flex: 1,
    padding: 15,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
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
