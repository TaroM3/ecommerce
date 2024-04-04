import { Pressable, StyleSheet, Text, View } from 'react-native';
import InputForm from '../../components/inputForm/InputForm';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useLoginMutation } from '../../app/services/auth';
import { loginSchema } from '../../utils/validations/authSchema';
import colors from '../../utils/global/colors';
import { fonts } from '../../utils/global/fonts';
import SubmitButton from '../../components/SubmitButton';
import { setUser } from '../../features/auth/authSlice';
import { ModalMessage } from '../../components/ModalMessage';
import { deleteSession, insertSession } from '../../utils/db';

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [triggerLogin] = useLoginMutation();
  const [modalVisible, setModalVisible] = useState(false);

  const handlerCloseModal = () => {
    setModalVisible(false);
  };

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });

      const { data, error } = await triggerLogin({ email, password }).catch(
        (res) => console.log(res)
      );

      if (error) {
        setModalVisible(true);
      }
      deleteSession();
      insertSession({ ...data });

      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        })
      );
    } catch (error) {
      setErrorEmail('');
      setErrorPassword('');

      switch (error.path) {
        case 'email':
          setErrorEmail(error.message);
          break;

        case 'password':
          setErrorPassword(error.message);
          break;

        default:
          break;
      }
    }
  };

  return (
    <>
      <View style={styles.main}>
        <View style={styles.container}>
          <InputForm
            label='Email'
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure={false}
            error={errorEmail}
          />
          <InputForm
            label='Password'
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error={errorPassword}
          />
          <SubmitButton onPress={onSubmit} title='Login' />
          <Text style={styles.sub}>Don't you have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={styles.subLink}>Sign up</Text>
          </Pressable>
        </View>
      </View>
      <ModalMessage
        textButton='Retry'
        title='Email or password is incorrect.'
        modalVisible={modalVisible}
        onClose={handlerCloseModal}
      />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: colors.white,
    gap: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.Montserrat,
  },
  sub: {
    fontSize: 14,
    fontFamily: fonts.Montserrat,
  },
  subLink: {
    fontSize: 14,
    fontFamily: fonts.Montserrat,
    color: colors.lightBlack,
    fontWeight: 'bold',
  },
});
