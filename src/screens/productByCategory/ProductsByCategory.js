import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Search from '../../components/Search';
import ProductByCategory from '../../components/ProductByCategory';
import products from '../../utils/data/products.json';

export const ProductsByCategory = ({
  categorySelected,
  selectedProductId,
  clearCategorySelected,
  clearProductId,
}) => {
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handlerKeyword = (k) => {
    setKeyword(k);
  };
  useEffect(() => {
    if (categorySelected)
      setProductsFiltered(
        products.filter((product) => product.category === categorySelected)
      );
    if (keyword)
      setProductsFiltered(
        productsFiltered.filter((product) => {
          const productTitleLower = product.title.toLowerCase();
          const keywordLower = keyword.toLowerCase();
          return productTitleLower.includes(keywordLower);
        })
      );
  }, [categorySelected, keyword]);

  return (
    <>
      <Header title={categorySelected} onPress={clearCategorySelected} />
      <Search handlerKeyword={handlerKeyword} />
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductByCategory
            selectedProductId={selectedProductId}
            item={item}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({});
