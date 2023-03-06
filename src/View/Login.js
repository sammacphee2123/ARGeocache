import React, {useState} from 'react';
import {useAuth} from '../providers/AuthProvider.js';
import {Alert} from 'react-native';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonFactory from '../components/buttons/ButtonFactory.js';
import ButtonStyle from '../components/buttons/ButtonStyle.js';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useAuth();
  const navigation = useNavigation();
  const buttonFactory = new ButtonFactory();

  const onPressSignIn = async () => {
    console.log('Press sign in');
    try {
      await signIn(username, password);
      console.log('lets go');
      return true;
    } catch (error) {
      console.log('Failed to sign in');
      Alert.alert(`Failed to sign in: ${error.message}`);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.viewStyle}>
        {buttonFactory.createButton({navigation, navTo: -1}).component}
        <Text style={styles.textStyle}>Login To Continue</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={username => setUsername(username)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>

        {
          buttonFactory.createButton({
            style: ButtonStyle.namedButtonStyle('center'),
            graphic: (
              <Text style={{fontWeight: 'bold', color: 'black'}}>Enter</Text>
            ),
            action: onPressSignIn,
            navigation,
            navTo: 'MainMenu',
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
    marginTop: 275,
  },
  inputView: {
    backgroundColor: '#96DED1',
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'flex-start',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '800',
    color: '#04120f',
    flex: 2,
    marginLeft: 25,
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
