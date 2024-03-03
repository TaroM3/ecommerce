import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { useState } from 'react';
import { AuthStack } from './stacks';

const MainNavigator = () => {
  const [tokenId, setTokenId] = useState('');

  return (
    <NavigationContainer>
      {tokenId ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
