import { Pressable, StyleSheet, Text, View } from 'react-native';
import ShadowPrimary from './wrappers/ShadowPrimary';

import colors from '../utils/global/colors';

const CardCategory = ({ item, navigation }) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('ProductsByCategory', {
          categorySelected: item.title,
        })
      }
    >
      <ShadowPrimary style={styles.container}>
        <Text style={styles.text}>{item.title}</Text>
      </ShadowPrimary>
    </Pressable>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: colors.darkGray,
    marginHorizontal: '10%',
    marginVertical: 10,
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: colors.light,
    // fontFamily:fonts.JosefinSansBold
  },
});
