import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import { useEffect, useState } from 'react';
import products from '../../utils/data/products.json';

import colors from '../../utils/global/colors';
import Header from '../../components/Header';

export const ProductDetail = ({ productId, clearProductId, portrait }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productFinded = products.find((product) => product.id === productId);
    setProduct(productFinded);
  }, [productId]);

  return (
    <View style={styles.container}>
      <Header title='Product Details' onPress={clearProductId} />
      <View
        style={[
          styles.content,
          !portrait && { flexDirection: 'row', gap: 10, padding: 20 },
        ]}
      >
        <Image
          style={[styles.image, !portrait && { width: '40%', height: 200 }]}
          source={{ uri: product.thumbnail }}
          resizeMode='cover'
        />
        <View style={[styles.containerText, !portrait && { width: '30%' }]}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View
          style={[
            styles.containerPrice,
            !portrait && { width: '20%', flexDirection: 'column' },
          ]}
        >
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
    paddingHorizontal: 5,
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
    paddingHorizontal: 7,
    color: colors.light,
  },
  description: {
    color: colors.light,
    fontSize: 15,
    paddingHorizontal: 7,
    lineHeight: 30,
  },
  price: {
    fontSize: 30,
    color: colors.light,
  },
  buyNow: {
    backgroundColor: colors.light,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  buyNowText: {
    backgroundColor: colors.light,
    color: colors.lightBlack,
    padding: 7,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
