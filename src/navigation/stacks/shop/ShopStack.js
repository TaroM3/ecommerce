import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../../../components/Header';
import { Home, ProductDetail, ProductsByCategory } from '../../../screens';

const Stack = createNativeStackNavigator();

export const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='ShopStack'
      screenOptions={({ route, navigation }) => {
        return {
          header: () => {
            return (
              <Header
                navigation={navigation}
                title={
                  route.name === 'Home'
                    ? 'Categories'
                    : route.name === 'ProductsByCategory'
                    ? route.params.categorySelected
                    : 'Detail'
                }
              />
            );
          },
        };
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='ProductsByCategory' component={ProductsByCategory} />
      <Stack.Screen name='ProductDetail' component={ProductDetail} />
    </Stack.Navigator>
  );
};
