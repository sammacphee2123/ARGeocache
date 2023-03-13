import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonFactory from '../components/buttons/ButtonFactory';
import CenterButtonStyle from '../components/buttons/button-styles/CenterButtonStyle';

export default function HomeScreen() {
  const navigation = useNavigation();
  const buttonFactory = new ButtonFactory();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>AR GEOCACHING</Text>
      </View>
      <Image
        source={require('./../../data/images/WelcomeIcon.png')}
        style={styles.image}
      />
      <View style={styles.container}>
        {
          buttonFactory.createButton({
            navigation,
            navTo: 'Login',
            buttonStyle: new CenterButtonStyle('Login'),
          }).component
        }
        {
          buttonFactory.createButton({
            navigation,
            navTo: 'Register',
            buttonStyle: new CenterButtonStyle('Register'),
          }).component
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    flex: 2,
    alignSelf: 'center',
    width: '90%',
    resizeMode: 'contain',
  },
  viewStyle: {
    backgroundColor: '#29b89e',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#04120f',
  },
});
