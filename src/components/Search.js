import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import colors from '../utils/global/colors';

const Search = ({ handlerKeyword }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const handlerInput = (t) => setInput(t);

  const search = () => {
    const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (expression.test(input)) {
      setError('Caracteres no validos');
      return;
    }
    setError('');
    handlerKeyword(input);
    Keyboard.dismiss();
  };

  const resetSearch = () => {
    handlerKeyword('');
    handlerInput('');
    setError('');
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder='Search'
          value={input}
          onChangeText={handlerInput}
          style={styles.input}
        />
        <Pressable onPress={search}>
          <AntDesign name='search1' size={30} color='black' />
        </Pressable>
        <Pressable onPress={resetSearch}>
          <AntDesign name='close' size={30} color='black' />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: 'row',
    padding: 10,
    gap: 20,
    alignItems: 'center',
  },
  input: {
    width: '70%',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    paddingHorizontal: 10,
  },
});
