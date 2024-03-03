import { Text, View } from 'react-native';

export const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login </Text>
      <InputForm label='Email' value={email} />
    </View>
  );
};
