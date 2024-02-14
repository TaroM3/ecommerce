import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import colors from '../utils/global/colors';
import BackButton from './BackButton';

const Header = ({ title = 'Ecommerce', onPress = null }) => {
  return (
    <View style={styles.container}>
      {onPress && <BackButton onPress={onPress} />}
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
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
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
