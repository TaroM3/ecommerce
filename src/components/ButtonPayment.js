import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../utils/global/colors';

const ButtonPayment = ({
  text = 'Done',
  onPress = () => {},
  disable = false,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: '100%',
    backgroundColor: !disable ? colors.lightBlack : 'gray',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: 'bold',
  },
});
