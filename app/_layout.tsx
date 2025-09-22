import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="movie-detail" options={{ headerShown: false }} />
      <Stack.Screen name="seat-selection" options={{ headerShown: false }} />
      <Stack.Screen name="checkout-confirmation" options={{ headerShown: false }} />
    </Stack>
  );
}