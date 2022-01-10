import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './index.style';

export const ChatHome = () => {
  const navigation = useNavigation();

  const chats = [
    {
      type: 'supplier',
      name: 'Supplier',
    },
    {
      type: 'customer',
      name: 'Customer',
    },
  ];

  return (
    <View>
      {chats.map(item => (
        <TouchableOpacity
          style={styles.container}
          key={item.name}
          onPress={() => navigation.navigate('CHAT')}>
          <Text style={styles.text}> {item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
