import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

export const ChatHome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>chat home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CHAT')}>
        <Text> Click here to go to p2p chat</Text>
      </TouchableOpacity>
    </View>
  );
};
