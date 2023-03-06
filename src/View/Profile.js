import React from 'react';
import {SafeAreaView, StyleSheet, Text, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonFactory from '../components/buttons/ButtonFactory';
import IconButtonStyle from '../components/buttons/IconButtonStyle';

export default function Profile() {
  const navigation = useNavigation();
  const buttonFactory = new ButtonFactory();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.viewStyle}>
        {buttonFactory.createButton({navigation, navTo: -1}).component}
        <Text style={styles.textStyle}>User Profile</Text>
        {
          buttonFactory.createButton({
            navigation,
            navTo: 'EditProfile',
            buttonStyle: new IconButtonStyle(
              require('./../../data/images/edit.png'),
            ),
          }).component
        }
      </View>

      <View style={styles.container}>
        <Image source={require('./../../data/images/CameraButton.png')} />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={{fontWeight: '600', color: 'black', fontSize: 16}}>
          Beginner Level | Joined: 2021
        </Text>
      </View>

      <View style={{alignItems: 'flex-start', marginLeft: 20, marginTop: 20}}>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
          Rewards
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    backgroundColor: '#fffff',
    marginTop: 30,
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
