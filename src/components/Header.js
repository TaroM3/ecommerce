import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Pressable,
} from 'react-native';
import colors from '../utils/global/colors';

import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';
import { deleteSession } from '../utils/db';

const Header = ({ title = 'Ecommerce', navigation }) => {
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.auth.idToken);

  const onLogout = () => {
    dispatch(clearUser());
    deleteSession();
  };

  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={30} color='black' />
        </Pressable>
      )}
      <Text style={styles.text}>{title}</Text>
      {idToken && (
        <Pressable style={styles.logoutIcon} onPress={onLogout}>
          <AntDesign name='logout' size={30} color='black' />
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 90,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.darkGray,
    textTransform: 'capitalize',
  },
  titleContainer: {
    width: '100%',
  },
  goBack: {
    position: 'absolute',
    left: 10,
    bottom: 15,
  },
  logoutIcon: {
    position: 'absolute',
    right: 21,
    bottom: 15,
  },
});
