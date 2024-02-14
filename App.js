import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { fontCollection } from './src/utils/global/fonts';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import colors from './src/utils/global/colors';
import { Home, ProductDetail, ProductsByCategory } from './src/screens';

export default function App() {
  const [fontsLoaded] = useFonts(fontCollection);
  const [categorySelected, setCategorySelected] = useState('');
  const [productId, setProductId] = useState(0);
  const { width, height } = useWindowDimensions();
  const [portrait, setPortrait] = useState(true);

  const clearProductId = () => {
    setProductId(0);
  };

  const clearCategorySelected = () => {
    setCategorySelected('');
  };

  useEffect(() => {
    if (width > height) setPortrait(false);
    else setPortrait(true);
  }, [width, height]);

  if (!fontsLoaded) return null;

  const selectedCategoryState = (category) => {
    setCategorySelected(category);
  };
  const selectedProductId = (id) => {
    setProductId(id);
  };

  return (
    <>
      <StatusBar backgroundColor={colors.lightBlack} style='inverted' />
      <SafeAreaView style={styles.container}>
        {categorySelected ? (
          productId ? (
            <ProductDetail
              productId={productId}
              portrait={portrait}
              clearProductId={clearProductId}
            />
          ) : (
            <ProductsByCategory
              selectedProductId={selectedProductId}
              categorySelected={categorySelected}
              clearCategorySelected={clearCategorySelected}
            />
          )
        ) : (
          <Home selectedCategoryState={selectedCategoryState} />
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlack,
  },
});
