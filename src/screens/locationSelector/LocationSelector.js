import { StyleSheet, Text, View } from 'react-native';
import MapPreview from '../../components/MapPreview';
import AddButton from '../../components/AddButton';
import * as Location from 'expo-location';
import { UseSelector, useSelector } from 'react-redux';
import { usePutUserLocationMutation } from '../../app/services/profile';
import { useEffect, useState } from 'react';
import { MAP_KEY } from '@env';

export const LocationSelector = ({ navigation }) => {
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [address, setAddress] = useState('');
  const localId = useSelector((state) => state.auth.localId);
  const [triggerUserLocation] = usePutUserLocationMutation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Permit denied.');
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (location.latitude) {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${MAP_KEY}`
        );
        const data = await response.json();
        setAddress(data.results[0].formatted_address);
      }
    })();
  }, [location]);

  const confirmAddress = async () => {
    const locationFormatted = {
      address,
      location,
    };

    await triggerUserLocation({ localId, locationFormatted });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{address}</Text>
      <MapPreview latitude={location.latitude} longitude={location.longitude} />
      <AddButton title='Confirm Location' onPress={confirmAddress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
    gap: 20,
  },
  text: {
    fontSize: 18,
  },
});
