import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { VehiclesProvider } from "./hooks/useVehicles";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  return (
    <ThemeProvider value={theme}>
      <VehiclesProvider>
        <SafeAreaView
          style={[
            styles.container,
            { backgroundColor: theme.colors.background },
          ]}
        >
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
          <StatusBar style="auto" />
        </SafeAreaView>
      </VehiclesProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
