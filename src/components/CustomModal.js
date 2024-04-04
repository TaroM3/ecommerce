import { useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Animated, Modal, StyleSheet, Text, View } from 'react-native';

export const CustomModal = ({
  isModalVisible,
  setIsModalVisible,
  text,
  icon,
}) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  const modalAnimation = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 900);
    setTimeout(() => setIsModalVisible(false), 1200);
  };

  if (isModalVisible) modalAnimation();
  return (
    <Modal transparent visible={isModalVisible}>
      <View style={styles.modal}>
        <Animated.View
          style={[styles.container, { transform: [{ scale: scaleValue }] }]}
        >
          <View style={{ alignItems: 'center' }}>
            <Text>
              <AntDesign name={icon.value} size={100} color={icon.color} />
              {/* '#015d52' success */}
            </Text>
          </View>

          <Text
            style={{
              marginVertical: 30,
              marginHorizontal: 15,
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            {text}
            {/* Products added successfully! */}
          </Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 10,
    elevation: 20,
  },
});
