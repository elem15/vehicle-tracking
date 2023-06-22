import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { initialVehicles } from '../constants/initialStates';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import './i18n';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)'
};

export const VehiclesContext = createContext({
  vehicles: [] as Vehicle[],
  setVehicles: (() => {}) as React.Dispatch<React.SetStateAction<Vehicle[]>>
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const value = useMemo(() => ({ vehicles, setVehicles }), [vehicles]);

  const colorScheme = useColorScheme();

  return (
    <>
      <VehiclesContext.Provider value={value}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{
                presentation: 'modal'
              }}
            />
          </Stack>
        </ThemeProvider>
      </VehiclesContext.Provider>
    </>
  );
}
