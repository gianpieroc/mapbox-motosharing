import { setAccessToken } from "@rnmapbox/maps";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import useVehicles from "./hooks/useVehicles";
import Footer from "./connected-components/Footer";
import Map from "./connected-components/Map";

if (!process.env.EXPO_PUBLIC_MAPBOX_API_KEY) {
  throw new Error("EXPO_PUBLIC_MAPBOX_API_KEY is not set");
}

setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_API_KEY);

export default function HomeScreen() {
  const { vehicles } = useVehicles();

  if (vehicles.length === 0) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Map />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
