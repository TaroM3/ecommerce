import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { fontCollection } from './src/utils/global/fonts';
import { useFonts } from 'expo-font';
import colors from './src/utils/global/colors';
import MainNavigator from './src/navigation/MainNavigator';
import { store } from './src/app/store';
import { Provider } from 'react-redux';

export default function App() {
  const [fontsLoaded] = useFonts(fontCollection);

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor={colors.lightBlack} style='inverted' />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlack,
  },
});
