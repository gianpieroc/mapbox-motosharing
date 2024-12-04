import { MapView, setAccessToken } from '@rnmapbox/maps';
import { useEffect, useRef, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { type Socket, io } from 'socket.io-client';
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from 'web-technical-test/packages/ws-backend/types/socket';
import type { Vehicle } from 'ws-backend/types/vehicle';

if (!process.env.EXPO_PUBLIC_MAPBOX_API_KEY) {
  throw new Error('EXPO_PUBLIC_MAPBOX_API_KEY is not set');
}

setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_API_KEY);

export default function HomeScreen() {
  const socketClient = useRef(
    io('http://localhost:3000', {
      autoConnect: false,
    }) as Socket<ServerToClientEvents, ClientToServerEvents>,
  );

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const socket = socketClient.current;

    socket?.on('vehicle', (vehicle) => {
      // Feel free to change the data structure to fit your needs.
      setVehicles((prevVehicles) => {
        const vehicleIndex = prevVehicles.findIndex((v) => v.id === vehicle.id);

        if (vehicleIndex !== -1) {
          return [
            ...prevVehicles.slice(0, vehicleIndex),
            vehicle,
            ...prevVehicles.slice(vehicleIndex + 1),
          ];
        }

        return [...prevVehicles, vehicle];
      });
    });

    socket?.on('vehicles', (vehicles) => {
      setVehicles(vehicles);
    });

    socket?.connect();

    return () => {
      socket?.off('vehicle');
      socket?.disconnect();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <MapView style={{ flex: 1 }} />

      <Text>Vehicles: {vehicles.length}</Text>
      <Text>Vehicle booked: {vehicles.find((v) => v.booked)?.name}</Text>

      <Button
        title="Book a ride"
        disabled={!!vehicles.find((v) => v.booked)}
        onPress={() => {
          const vehicle = vehicles.at(0);

          if (vehicle) {
            socketClient.current?.emit('book', vehicle.id);
          }
        }}
      />

      <Button
        title="UnBook a ride"
        disabled={!vehicles.find((v) => v.booked)}
        onPress={() => {
          const vehicle = vehicles.find((v) => v.booked);

          if (vehicle) {
            socketClient.current?.emit('unbook', vehicle.id);
          }
        }}
      />
    </View>
  );
}
