import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { usePostCreatePaymentIntentMutation } from '../../app/services/payment';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardField,
  StripeContainer,
  useStripe,
  StripeProvider,
} from '@stripe/stripe-react-native';
import { CustomModal } from '../../components/CustomModal';
import { ICON_ERROR, ICON_INFO, ICON_SUCCESS } from '../../utils/global/icons';
import colors from '../../utils/global/colors';
import { fonts } from '../../utils/global/fonts';
import { usePostOrderMutation } from '../../app/services/orders';
import { deleteCart } from '../../features/cart/cartSlice';

export function Payment({ navigation }) {
  const email = useSelector((state) => state.auth.email);
  const cart = useSelector((state) => state.cart);

  //Modal values
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState({});

  const dispatch = useDispatch();
  const localId = useSelector((state) => state.auth.localId);
  const [triggerAddOrder] = usePostOrderMutation();

  //Card values
  const [cardDetails, setCardDetails] = useState();

  const [postCreatePaymentIntent] = usePostCreatePaymentIntentMutation();

  const { confirmPayment } = useStripe();

  const createOrder = async (order) => {
    await triggerAddOrder({ localId, order });
    dispatch(deleteCart());
  };

  const handlePayPress = async () => {
    if (!cardDetails?.complete || !email) {
      setIcon(ICON_INFO);
      setTitle('Please complete card information.');
      setIsVisible(true);
      return;
    }

    try {
      const responseIntent = await postCreatePaymentIntent({
        amount: Math.floor(cart.total * 100),
      });

      if (!responseIntent) {
        console.log('Server Error');
      } else {
        const response = await confirmPayment(
          responseIntent.data.paymentIntent,
          {
            paymentMethodType: 'Card',
            paymentMethodData: {
              billingDetails: {
                email: email,
              },
            },
          }
        );

        if (response.paymentIntent.status === 'Succeeded') {
          createOrder({
            createdAt: new Date().toLocaleString(),
            ...cart,
          });
          setIcon(ICON_SUCCESS);
          setTitle('Congrats! Payment succeeded. . . ');
          setIsVisible(true);
          setTimeout(() => {
            navigation.navigate('OrdersStack');
          }, 1100);
        } else {
          setTitle('Ooops! Somthing went wrong. . . ');
          setIcon(ICON_ERROR);
          setIsVisible(true);
        }
      }
    } catch (error) {
      setTitle('Ooops! Somthing went wrong. . . ');
      setIcon(ICON_ERROR);
      setIsVisible(true);
    }
  };

  return (
    <>
      <StripeProvider publishableKey='pk_test_51NnLTWGHs0Uv1JKUw1TNbEFEttWhYxsUCIn2LU4xNtOhiZExNeg7U1PsEtqAm8xrEBBWfZjz1QdC03yLV9QAIoJJ004MAtWAHV'>
        <View style={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Card information</Text>
          </View>
          <StripeContainer keyboardShouldPersistTaps={true}>
            <CardField
              postalCodeEnabled={false}
              placeholder={{
                number: '4242 4242 4242 4242',
              }}
              cardStyle={styles.card}
              style={styles.cardContainer}
              onCardChange={(cardDetails) => {
                setCardDetails(cardDetails);
              }}
            />
            <Pressable onPress={handlePayPress} style={styles.button}>
              <Text style={styles.buttonText}>Pay now</Text>
            </Pressable>
          </StripeContainer>
        </View>
      </StripeProvider>
      <CustomModal
        isModalVisible={isVisible}
        setIsModalVisible={setIsVisible}
        icon={icon}
        text={title}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    // marginVertical: 20,
    // marginVertical: 125,
    backgroundColor: colors.darkGray,
  },
  containerTitle: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: fonts.Montserrat,
  },
  input: {
    // backgroundColor: '#efefefef',
    backgroundColor: 'white',

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    // backgroundColor: '#efefefef',
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  cardContainer: {
    width: 370,
    height: 50,
    marginVertical: 30,
  },
  button: {
    width: '100%',
    backgroundColor: 'black',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.Montserrat,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
