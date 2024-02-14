import { StyleSheet, Text, View, FlatList } from 'react-native';

import Categories from '../../components/Categories';
import Header from '../../components/Header';

export const Home = ({ selectedCategoryState }) => {
  return (
    <>
      <Header title='Home' />
      <Categories selectedCategoryState={selectedCategoryState} />
    </>
  );
};

const styles = StyleSheet.create({});
