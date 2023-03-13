import React, {useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../providers/AuthProvider';
import {Alert} from 'react-native';
import {View, Text, StyleSheet, LogBox, PermissionsAndroid} from 'react-native';
import ButtonFactory from '../components/buttons/ButtonFactory';
import CenterButtonStyle from '../components/buttons/button-styles/CenterButtonStyle';

export default function Geocaching() {
  LogBox.ignoreAllLogs();
  const navigation = useNavigation();
  const {user} = useAuth();
  const [currentLongitude, setCurrentLongitude] = useState(-66.64159932959872);
  const [currentLatitude, setCurrentLatitude] = useState(45.94995093187056);
  const [locationStatus, setLocationStatus] = useState('');
  const [geocacheList, setGeocacheList] = useState([]);
  const [geocacheID, setGeocacheID] = useState('');
  let watchID = null;
  const buttonFactory = new ButtonFactory();
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          getOneTimeLocation();
          subscribeLocationLocation();
        } else {
          setLocationStatus('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    const getCoordinates = async () => {
      try {
        const geocacheList = await user.functions.getGeocacheCoordinates();
        setGeocacheList(geocacheList);
      } catch (err) {
        console.warn(err);
      }
    };
    requestLocationPermission();
    getCoordinates();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  useEffect(() => {
    const pickupGeocache = async () => {
      //if(Math.sqrt(Math.pow(currentLatitude-geoLat ,2) +Math.pow(currentLongitude-geoLong,2) ) <= 0.001){
      try {
        console.log('picking up geocache');
        console.log(geocacheID);
        await user.functions.pickUpGeocache(user.profile.email, geocacheID);
        await user.functions.updateGeocache(geocacheID, 0, 0);
        Alert.alert('Geocache collected!');
      } catch (err) {
        console.warn(err);
      }
      //}
      //else{
      //    Alert.alert("Not in range of geocache");
      //}
    };
    pickupGeocache();
  }, [geocacheID]);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      position => {
        setLocationStatus('You are Here');
        const currentLongitude = position.coords.longitude;
        const currentLatitude = position.coords.latitude;
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      error => {
        console.log('error');
        setLocationStatus(error.message);
      },
      {enableHighAccuracy: true, timeout: 30000, maximumAge: 2000},
    );
    console.log(currentLongitude);
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        setLocationStatus('You are Here');
        const currentLongitude = position.coords.longitude;
        const currentLatitude = position.coords.latitude;
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {enableHighAccuracy: false, maximumAge: 1000},
    );
  };

  return (
    <View style={styles.body}>
      <View style={styles.viewStyle}>
        {buttonFactory.createButton({navigation, navTo: -1}).component}
        <Text style={styles.textStyle}>Geocaching</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: currentLatitude,
          longitude: currentLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}>
        {geocacheList.map(item => {
          return (
            <Marker
              key={item.name}
              title={item.name}
              coordinate={{
                latitude: item.coordinate.latitude,
                longitude: item.coordinate.longitude,
              }}
              onPress={() => {
                console.log(item.geocache_id);
                setGeocacheID(item.geocache_id);
              }}
            />
          );
        })}
      </MapView>
      <View style={styles.buttonCallout}>
        {
          buttonFactory.createButton({
            message: 'Geocache placed',
            buttonStyle: new CenterButtonStyle(
              'Place Geocache',
              'lightblue',
              24,
              200,
            ),
          }).component
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  viewStyle: {
    backgroundColor: '#29b89e',
    width: '100%',
    height: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  buttonCallout: {
    height: 75,
    width: 235,
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
  },
});
