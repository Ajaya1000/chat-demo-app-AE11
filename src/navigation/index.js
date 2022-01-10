import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ChatNavigator } from './chat-stack';

export const Navigator = () => {
  return (
    <SafeAreaProvider>
      <ChatNavigator />
    </SafeAreaProvider>
  );
};
