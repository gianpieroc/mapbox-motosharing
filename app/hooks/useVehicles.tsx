import React, { createContext, useCallback, useContext } from "react";
import { Camera } from "@rnmapbox/maps";
import { useEffect, useRef, useState } from "react";
import { Vehicle } from "ws-backend/types/vehicle";
import { type Socket, io } from "socket.io-client";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from "web-technical-test/packages/ws-backend/types/socket";

interface VehiclesContextProps {
  vehicles: Vehicle[];
  vehicleSelected: Vehicle | null;
  onUnselectVehicle: () => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
  cameraRef: React.RefObject<Camera>;
  bookVehicle: () => void;
  unbookVehicle: () => void;
}
const initialValues: VehiclesContextProps = {
  vehicles: [],
  vehicleSelected: null,
  onUnselectVehicle: () => {},
  onSelectVehicle: () => {},
  cameraRef: { current: null },
  bookVehicle: () => {},
  unbookVehicle: () => {},
};
const VehiclesContext = createContext<VehiclesContextProps>(initialValues);

export const VehiclesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const socketClient = useRef(
    io("http://127.0.0.1:3000", {
      // Replace with your development machine's IP address
      autoConnect: false,
    }) as Socket<ServerToClientEvents, ClientToServerEvents>
  );

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [vehicleSelected, setVehicleSelected] = useState<Vehicle | null>(null);
  const cameraRef = useRef<Camera>(null);

  const onSelectVehicle = (vehicle: Vehicle) => {
    if (vehicle.status === "AVAILABLE") {
      setVehicleSelected(vehicle);
      cameraRef.current?.setCamera({
        centerCoordinate: [vehicle.lng, vehicle.lat],
      });
    }
  };

  const onUnselectVehicle = () => {
    setVehicleSelected(null);
  };

  const bookVehicle = useCallback(() => {
    const vehicle = vehicleSelected;
    if (vehicle) {
      socketClient.current?.emit("book", vehicle.id);
    }
  }, [vehicleSelected]);

  const unbookVehicle = useCallback(() => {
    const vehicle = vehicles.find((v) => v.booked);

    if (vehicle) {
      socketClient.current?.emit("unbook", vehicle.id);
    }
  }, [vehicles]);

  useEffect(() => {
    const socket = socketClient.current;
    console.log("Attempting to connect to socket...");
    socket?.connect();

    socket?.on("vehicle", (vehicle: Vehicle) => {
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

    socket?.on("vehicles", (vehicles: Vehicle[]) => {
      setVehicles(vehicles);
    });

    socket.on("error", function (error: Error) {
      console.log(
        "Sorry, there seems to be an issue with the connection!",
        error
      );
    });

    socket?.on("connect_error", (error: Error) => {
      console.error("Socket connection error:", error?.message);
    });

    return () => {
      socket?.off("vehicles");
      socket?.disconnect();
    };
  }, []);

  const contextValue = {
    vehicles,
    vehicleSelected,
    onUnselectVehicle,
    onSelectVehicle,
    cameraRef,
    bookVehicle,
    unbookVehicle,
  };

  return (
    <VehiclesContext.Provider value={contextValue}>
      {children}
    </VehiclesContext.Provider>
  );
};

export const useVehicles = () => {
  const context = useContext(VehiclesContext);
  return context;
};

export default useVehicles;
