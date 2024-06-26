import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import { useState } from 'react';
import { useGetProductQuery } from '../../app/services/shop';

import colors from '../../utils/global/colors';
import { useDispatch } from 'react-redux';

import { addCartItem } from '../../features/cart/cartSlice';
import Counter from '../../components/counter/Counter';
import Loader from '../../components/Loader';
import { CustomModal } from '../../components/CustomModal';
import { ICON_SUCCESS } from '../../utils/global/icons';

export const ProductDetail = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { productId } = route.params;
  const { data: product, isLoading } = useGetProductQuery(productId);
  const [counter, setCounter] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (isLoading) return <Loader />;

  const addToCart = () => {
    dispatch(addCartItem({ ...product, quantity: counter }));
    setIsModalVisible(true);
    setCounter(1);

    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'CartStack' }],
      });
    }, 1000);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{ uri: product?.images ? product.images[0] : null }}
            resizeMode='cover'
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product?.title}</Text>
            <Text>{product?.description}</Text>
          </View>
          <Counter counter={counter} setCounter={setCounter} />
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {product?.price}</Text>
            <Pressable style={styles.buyNow} onPress={addToCart}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <CustomModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        icon={ICON_SUCCESS}
        text='Products added successfully!'
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingBottom: 95,
  },
  image: {
    width: '100%',
    height: 300,
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 7,
    paddingVertical: 25,
  },

  containerPrice: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',

    color: colors.lightBlack,
  },
  description: {
    color: colors.light,
    fontSize: 15,
    paddingHorizontal: 7,
    lineHeight: 30,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.lightBlack,
  },
  buyNow: {
    backgroundColor: colors.lightBlack,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  buyNowText: {
    color: colors.light,
    padding: 7,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
