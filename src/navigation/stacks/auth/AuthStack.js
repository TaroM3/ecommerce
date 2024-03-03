import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../../../components/Header';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={({ route }) => {
        return {
          header: () => (
            <Header title={route.name === 'Login' ? 'Login' : 'Register'} />
          ),
        };
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
};
