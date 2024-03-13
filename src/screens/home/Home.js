import { StyleSheet } from 'react-native';

import Categories from '../../components/Categories';

export const Home = ({ navigation }) => {
  return (
    <>
      <Categories navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({});
