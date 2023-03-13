import React, {useState} from 'react';
import {useAuth} from '../providers/AuthProvider';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import ButtonFactory from '../components/buttons/ButtonFactory';
import IconButtonStyle from '../components/buttons/button-styles/IconButtonStyle';
import CenterButtonStyle from '../components/buttons/button-styles/CenterButtonStyle';

export default function EditProfile() {
  const {user} = useAuth();
  const [username, setNewUsername] = useState(user.profile.email);
  const [password, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
  const buttonFactory = new ButtonFactory();

  const onPressUpdateProfile = async () => {
    if (password !== confirmPassword)
      return 'Passwords do not match, please try again';
    if (password.length < 8)
      return 'Password must be at least 8 characters long';

    try {
      await user.functions.updateProfile(username, password, isSelected);
    } catch (error) {
      return `Failed to sign up: ${error.message}`;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={styles.viewStyle}>
        {buttonFactory.createButton({navigation, navTo: -1}).component}
        <Text style={styles.textStyle}>Edit Profile</Text>
      </View>
      <View style={styles.container}>
        {
          buttonFactory.createButton({
            message: 'Open Camera',
            buttonStyle: new IconButtonStyle(
              require('./../../data/images/CameraButton.png'),
              null,
              250,
            ),
          }).component
        }
      </View>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="New Username"
            placeholderTextColor="#003f5c"
            value={username}
            onChangeText={username => setNewUsername(username)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="New Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setNewPassword(password)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm New Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={confirmPassword =>
              setConfirmPassword(confirmPassword)
            }
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>
            Would you like your account to be private?
          </Text>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
        </View>
        {
          buttonFactory.createButton({
            action: onPressUpdateProfile,
            message: 'Changes Saved',
            navigation,
            navTo: 'MainMenu',
            buttonStyle: new CenterButtonStyle('Save'),
          }).component
        }
        {
          buttonFactory.createButton({
            message: 'Account deleted',
            navigation,
            navTo: 'HomeScreen',
            buttonStyle: new CenterButtonStyle('Delete Account', '#cc0000'),
          }).component
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputView: {
    backgroundColor: '#96DED1',
    width: '70%',
    height: 45,
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
  checkboxContainer: {
    flexDirection: 'column',
  },
  checkbox: {
    alignSelf: 'center',
  },
});
