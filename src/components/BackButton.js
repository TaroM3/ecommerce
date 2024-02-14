import { Pressable, Text } from 'react-native';
import colors from '../utils/global/colors';
import { AntDesign } from '@expo/vector-icons';

const BackButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={{ width: '20%' }}>
      <AntDesign name='left' size={30} color={colors.lightBlack} />
    </Pressable>
  );
};

export default BackButton;
