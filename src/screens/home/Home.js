import { StyleSheet } from 'react-native';

import Categories from '../../components/Categories';
import Header from '../../components/Header';

export const Home = ({ navigation }) => {
  return (
    <>
      <Categories navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({});
