import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import { useEffect, useState } from 'react';
import products from '../../utils/data/products.json';

import colors from '../../utils/global/colors';
import Header from '../../components/Header';

export const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

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
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
  },
  content: {
    width: '100%',
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
    fontWeight: 'bold',
    fontSize: 20,
  },
});
