import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../utils/global/colors';
import { fonts } from '../utils/global/fonts';

const OrderItem = ({ order }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{order.createdAt}</Text>
        <Text style={styles.text2}>$ {order.total}</Text>
      </View>
      <AntDesign name='ellipsis1' size={30} color='white' />
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.darkGray,
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
  textContainer: {
    width: '70%',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.light,
    fontFamily: fonts.Montserrat,
  },
  text2: {
    fontSize: 19,
    fontFamily: fonts.Montserrat,
    fontWeight: 'bold',
    color: colors.white,
  },
});
