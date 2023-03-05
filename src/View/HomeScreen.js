import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonFactory from '../components/buttons/ButtonFactory';
import ButtonStyle from '../components/buttons/ButtonStyle';

export default function HomeScreen() {
  const navigation = useNavigation();
  const buttonFactory = new ButtonFactory();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>AR GEOCACHING</Text>
      </View>

      <View style={styles.container}>
        <Image
          source={require('../../data/images/WelcomeIcon.png')}
          style={styles.image}
        />
        {
          buttonFactory.createButton({
            navigation,
            navTo: 'Login',
            style: ButtonStyle.namedButtonStyle('center', {marginTop: 10}),
            graphic: (
              <Text style={{fontWeight: 'bold', color: 'black'}}>Login</Text>
            ),
          }).component
        }
        {
          buttonFactory.createButton({
            navigation,
            navTo: 'Register',
            style: ButtonStyle.namedButtonStyle('center', {marginTop: 10}),
            graphic: (
              <Text style={{fontWeight: 'bold', color: 'black'}}>Register</Text>
            ),
          }).component
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
  },

  image: {
    flex: 0.75,
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },

  textStyle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#04120f',
    flex: 2,
    marginLeft: 100,
  },
  ImageIconStyle: {
    padding: 15,
    margin: 5,
    height: 250,
    width: 250,
    resizeMode: 'stretch',
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
