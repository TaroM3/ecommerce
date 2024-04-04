import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../utils/global/colors';
import { fonts } from '../utils/global/fonts';

import { useDispatch } from 'react-redux';
import { deleteCartItem } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>

        <Text style={styles.text2}>{item.brand}</Text>
        <Text style={styles.text2}>{item.price}</Text>
      </View>
      <Text style={styles.text}>x {item.quantity}</Text>
      <Pressable onPress={() => dispatch(deleteCartItem(item.id))}>
        <AntDesign name='delete' size={27} color='white' />
      </Pressable>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightBlack,
    padding: 20,
    margin: 10,
    borderWidth: 2,
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
    color: colors.white,
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: fonts.JosefinSansBold,
  },
  text2: {
    color: colors.light,
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: fonts.Montserrat,
  },
});
