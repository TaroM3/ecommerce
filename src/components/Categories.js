import { StyleSheet, FlatList } from 'react-native';
import { useGetCategoriesQuery } from '../app/services/shop';
import CardCategory from './CardCategory';
import Loader from './Loader';
import Error from './Error';
import { EmptyListComponent } from './EmptyListComponent';

const Categories = ({ navigation }) => {
  const {
    data: categories,
    isError,
    isLoading,
    isSuccess,
  } = useGetCategoriesQuery();

  const onRetry = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <Error
        message='Oops! Something went wrong.'
        textButton='Retry'
        onRetry={onRetry}
      />
    );
  if (isSuccess && categories === null)
    return <EmptyListComponent message='Category has not found.' />;

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <CardCategory item={item} navigation={navigation} />
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
