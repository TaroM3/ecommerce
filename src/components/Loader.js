import { View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../utils/global/colors';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size='large' color={colors.lightBlack} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
