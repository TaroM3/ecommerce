import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../utils/global/colors';

const TabBarIcon = ({ title, nameIcon, focused }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name={nameIcon}
        size={25}
        color={focused ? colors.white : colors.light}
      />
      <Text style={[styles.text, focused && styles.textFocused]}>{title}</Text>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: colors.light,
    textAlign: 'center',
    fontSize: 15,
  },
  textFocused: {
    color: colors.white,
  },
});
