import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../utils/global/colors';

const Counter = ({ counter, setCounter }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => setCounter(counter > 1 ? counter - 1 : counter)}
      >
        <AntDesign name='minus' color={colors.light} size={30} />
      </Pressable>
      <Text style={styles.text}>{counter}</Text>
      <Pressable style={styles.button} onPress={() => setCounter(counter + 1)}>
        <AntDesign name='plus' color={colors.light} size={30} />
      </Pressable>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 21,
    width: '100%',
  },
  button: {
    padding: 7,
    backgroundColor: colors.lightBlack,
    borderRadius: 7,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 21,
  },
});
