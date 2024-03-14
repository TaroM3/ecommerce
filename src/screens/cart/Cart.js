import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../utils/global/colors';
import { fonts } from '../../utils/global/fonts';
import CartItem from '../../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { usePostOrderMutation } from '../../app/services/orders';
import { deleteCart } from '../../features/cart/cartSlice';

export const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const localId = useSelector((state) => state.auth.localId);
  const [triggerAddOrder] = usePostOrderMutation();

  const handlerAddOrder = async () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      createdAt,
      ...cart,
    };

    await triggerAddOrder({ localId, order });
    dispatch(deleteCart());
    navigation.navigate('OrdersStack');
  };

  return (
    <View style={styles.container}>
      {cart.items[0] ? (
        <>
          <FlatList
            data={cart.items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CartItem item={item} />}
          />
          <View style={styles.confirmContainer}>
            <Pressable style={styles.confirmButton} onPress={handlerAddOrder}>
              <Text style={styles.textButton}>Confirm</Text>
            </Pressable>
            <Text style={styles.confirmText}>Total: ${cart.total}</Text>
          </View>
        </>
      ) : (
        <View style={styles.cartEmptyContainer}>
          <Text style={styles.cartEmptyText}>Your cart is empty.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 125,
  },
  confirmContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  confirmText: {
    fontFamily: fonts.Montserrat,
    fontSize: 19,
    fontWeight: 'bold',
    color: colors.lightBlack,
  },
  textButton: {
    color: colors.white,
    fontSize: 19,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: colors.lightBlack,
    borderRadius: 10,
    padding: 10,
  },
  cartEmptyContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartEmptyText: {
    fontSize: 20,
  },
});
