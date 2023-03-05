import React, {useState} from 'react';
import {useAuth} from '../providers/AuthProvider';
import {Alert} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonFactory from '../components/buttons/ButtonFactory';
import ButtonStyle from '../components/buttons/ButtonStyle';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  const {user, signUp, signIn} = useAuth();
  const buttonFactory = new ButtonFactory();

  const onPressSignUp = async () => {
    try {
      if (password === confirmPassword) {
        if (password.length > 7) {
          await signUp(username, password);
          signIn(username, password);
          await user.functions.insertUser(username, password);
          navigation.navigate('MainMenu');
          alert('New Profile Created, you are now signed in');
        } else {
          Alert.alert('Password must be at least 8 characters long');
        }
      } else {
        Alert.alert('Passwords do not match, please try again');
      }
    } catch (error) {
      Alert.alert(`Failed to sign up: ${error.message}`);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.viewStyle}>
        {buttonFactory.createButton({navigation, navTo: -1}).component}
        <Text style={styles.textStyle}>Create Your Profile</Text>
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

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={confirmPassword =>
              setConfirmPassword(confirmPassword)
            }
          />
        </View>

        {
          buttonFactory.createButton({
            style: ButtonStyle.namedButtonStyle('center'),
            action: onPressSignUp,
            graphic: (
              <Text style={{fontWeight: 'bold', color: 'black'}}>Submit</Text>
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
    marginTop: 300,
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