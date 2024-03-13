import { StyleSheet, View, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import {
  useGetImageQuery,
  useGetUserLocationQuery,
} from '../../app/services/profile';
import AddButton from '../../components/AddButton';

export const Profile = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.localId);
  const { data } = useGetImageQuery(localId);
  const { data: locationFormatted } = useGetUserLocationQuery(localId);

  return (
    <View style={styles.container}>
      <Image
        source={
          data ? { uri: data.image } : require('../../../assets/user.png')
        }
        style={styles.image}
        resizeMode='cover'
      />

      <Text style={styles.text}>{locationFormatted?.address}</Text>

      <AddButton
        title={'Add profile image'}
        onPress={() => navigation.navigate('ImageSelector')}
      />
      <AddButton
        title={'Add address'}
        onPress={() => navigation.navigate('LocationSelector')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
});
