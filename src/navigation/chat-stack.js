import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatHome, Chat } from '../screens';

const Stack = createNativeStackNavigator();

export const ChatNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CHAT_HOME"
      screenOptions={{
        headerStyle: { height: 88 },
        headerTitleStyle: {
          fontSize: 20,
          color: '#161616',
        },
      }}>
      <Stack.Screen
        name="CHAT_HOME"
        component={ChatHome}
        options={{ title: 'Chat Home' }}
      />
      <Stack.Screen
        name="CHAT"
        component={Chat}
        options={{ title: 'Chat P2P' }}
      />
    </Stack.Navigator>
  );
};
