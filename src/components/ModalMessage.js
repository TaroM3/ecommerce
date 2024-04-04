import { StyleSheet, Text, View, Modal } from 'react-native';
import colors from '../utils/global/colors';
import { fonts } from '../utils/global/fonts';
import { ButtonPrimary } from './ButtonPrimary';

export const ModalMessage = ({ title, textButton, onClose, modalVisible }) => {
  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType='fade'
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>{title}</Text>
          <ButtonPrimary title={textButton} onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 30,
    gap: 20,
    borderRadius: 5,
  },
  text: {
    marginVertical: 30,
    fontFamily: fonts.Montserrat,
    fontSize: 18,
    color: colors.lightBlack,
    fontWeight: 'bold',
  },
});
