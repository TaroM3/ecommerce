import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../utils/global/colors';
import { fonts } from '../../utils/global/fonts';
import CartItem from '../../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { usePostOrderMutation } from '../../app/services/orders';
import { deleteCart } from '../../features/cart/cartSlice';
import { usePostCreatePaymentIntentMutation } from '../../app/services/payment';
import {
  CardField,
  useConfirmPayment,
  useStripe,
} from '@stripe/stripe-react-native';
import { useState } from 'react';

export const Cart = ({ navigation }) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const localId = useSelector((state) => state.auth.localId);
  const [triggerAddOrder] = usePostOrderMutation();
  const [postCreatePaymentIntent] = usePostCreatePaymentIntentMutation();
  const email = useSelector((state) => state.auth.email);

  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const createOrder = async (order) => {
    // await triggerAddOrder({ localId, order });
    // dispatch(deleteCart());
    // navigation.navigate('OrdersStack');
  };

  const handlerAddOrder = async () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      createdAt,
      ...cart,
    };

    const payment = {
      amount: Math.floor(cart.total * 100),
    };

    JSON.stringify(payment);
    const response = await postCreatePaymentIntent(payment);

    if (response.error) {
      return;
    }
    console.log(response);

    //initialize the payment sheet
    const initResponse = await initPaymentSheet({
      merchantDisplayName: 'Ecommerce',
      customerId: response.data.customer,
      customerEphemeralKeySecret: response.data.ephemeralKey,
      paymentIntentClientSecret: response.data.paymentIntentClient,
      defaultBillingDetails: {
        name: email,
      },
    });

    if (initResponse.error) {
      console.log(initResponse.error);
      return;
    }

    // Show the Payment Sheet from Stripe
    const paymentResponse = await presentPaymentSheet();
    if (paymentResponse.error) {
      console.log(paymentResponse.error);
      return;
    }
    console.log(paymentResponse);
    //If the payment it's ok create an order

    // createOrder(order);
  };

  // const fetchPaymentSheetParams = async () => {
  //   const response = await fetch(
  //     'https://backnative-97n9.onrender.com/payments/intent',
  //     {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ amount: 19000 }),
  //     }
  //   );

  //   const { paymentIntent } = await response.json();
  //   console.log(paymentIntent);

  //   return { paymentIntent };
  // };
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
            <Pressable
              style={styles.confirmButton}
              onPress={() => navigation.navigate('Payment')}
              // onPress={handlerAddOrder}
            >
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
