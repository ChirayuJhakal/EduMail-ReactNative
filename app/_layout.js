import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="components/EmailItemContainer" options={{ headerShown: false }} />
      <Stack.Screen name="inbox/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="inbox/ComposeEmail" options={{ headerShown: false }} />
    </Stack>
  );
}
