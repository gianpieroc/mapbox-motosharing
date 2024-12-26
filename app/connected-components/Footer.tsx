import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import Text from "../components/Text";
import Button from "../components/Button";
import { useTheme } from "@react-navigation/native";
import useVehicles from "../hooks/useVehicles";

const Footer = () => {
  const { vehicles, vehicleSelected, bookVehicle, unbookVehicle } =
    useVehicles();
  const vehicleBooked = useMemo(
    () => vehicles.find((v) => v.booked),
    [vehicles]
  );

  const { colors } = useTheme();
  const isVehicleBooked = !!vehicleBooked;

  const vehicle = vehicleBooked || vehicleSelected;
  return (
    <View style={[styles.footerContainer, { backgroundColor: colors.card }]}>
      {!!vehicle ? (
        <>
          <View style={styles.content}>
            <Text style={styles.bookedText}>
              {isVehicleBooked ? "[BOOKED] " : ""}
            </Text>
            <Text style={styles.vehicleName}>{vehicle?.name}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>Battery {vehicle?.battery.toFixed(1)}%</Text>
              <Text>Plate {vehicle?.plate_number}</Text>
            </View>
          </View>
          {!isVehicleBooked ? (
            <Button title="Book a ride" onPress={bookVehicle} />
          ) : (
            <Button title="UnBook a ride" onPress={unbookVehicle} />
          )}
        </>
      ) : (
        <Text style={styles.selectVehicleText}>
          Select a vehicle on the map
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flex: 0.3,
    padding: 20,
  },
  bookedText: {
    fontWeight: "bold",
    color: "#FF5722",
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 5,
  },
  content: {
    paddingBottom: 16,
  },
  selectVehicleText: {
    alignSelf: "center",
    marginVertical: "auto",
    color: "#999",
  },
});

export default Footer;
