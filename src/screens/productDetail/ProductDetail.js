import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import { useEffect, useState } from 'react';
import products from '../../utils/data/products.json';

import colors from '../../utils/global/colors';
import { useDispatch } from 'react-redux';

import { addCartItem } from '../../features/cart/cartSlice';
import Counter from '../../components/counter/Counter';

export const ProductDetail = ({ route }) => {
  const dispatch = useDispatch();
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const productFinded = products.find((product) => product.id === productId);
    setProduct(productFinded);
  }, [productId]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{ uri: product?.images ? product.images[0] : null }}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <Counter counter={counter} setCounter={setCounter} />
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable
            style={styles.buyNow}
            onPress={() =>
              dispatch(addCartItem({ ...product, quantity: counter }))
            }
          >
            <Text style={styles.buyNowText}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </View>
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
