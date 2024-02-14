import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import colors from '../utils/global/colors';
import fontCollection, { fonts } from '../utils/global/fonts';

const ProductByCategory = ({ item, selectedProductId }) => {
  return (
    <Pressable
      onPress={() => selectedProductId(item.id)}
      style={styles.container}
    >
      <Text style={styles.text}>
        {item.id} {item.title}
      </Text>
      <Image
        style={styles.image}
        source={{ uri: item.thumbnail }}
        resizeMode='cover'
      />
    </Pressable>
  );
};

export default ProductByCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    width: '80%',
    marginHorizontal: '10%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    width: '60%',
    fontSize: 16,
    paddingHorizontal: 7,
    fontFamily: fonts.Montserrat,
    color: colors.white,
  },
  image: {
    minWidth: 90,
    minHeight: 90,
    borderRadius: 5,
  },
});
