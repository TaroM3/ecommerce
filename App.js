import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { fontCollection } from './src/utils/global/fonts';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import colors from './src/utils/global/colors';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  const [fontsLoaded] = useFonts(fontCollection);
  const [categorySelected, setCategorySelected] = useState('');
  const [productId, setProductId] = useState(0);
  const { width, height } = useWindowDimensions();
  const [portrait, setPortrait] = useState(true);

  useEffect(() => {
    if (width > height) setPortrait(false);
    else setPortrait(true);
  }, [width, height]);

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor={colors.lightBlack} style='inverted' />
      <MainNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlack,
  },
});
