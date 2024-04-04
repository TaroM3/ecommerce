import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../utils/global/colors';

export const ButtonPrimary = ({ title, onPress, style = {} }) => {
  return (
    <Pressable style={[style, styles.container]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlack,
    paddingHorizontal: 18,
    paddingVertical: 12,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
