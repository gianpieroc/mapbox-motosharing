import { Camera, MapView, PointAnnotation } from "@rnmapbox/maps";
import { Fragment } from "react";
import { View } from "react-native";
import useVehicles from "../hooks/useVehicles";

const ANNOTATION_SIZE = 10;

const POINT_COLORS = {
  AVAILABLE: "orange",
  BOOKED: "red",
  MAINTENANCE: "gray",
  DISABLED: "gray",
};

const Map = () => {
  const { vehicles, onUnselectVehicle, cameraRef, onSelectVehicle } =
    useVehicles();

  return (
    <MapView style={{ flex: 1 }}>
      <Fragment>
        <Camera
          ref={cameraRef}
          zoomLevel={12}
          centerCoordinate={[2.154007, 41.390205]}
          animationMode={"flyTo"}
          animationDuration={1000}
        />
        {vehicles.map((vehicle) => {
          return (
            <PointAnnotation
              key={`triangle-${vehicle.id}`}
              id={`triangle-${vehicle.id}`}
              coordinate={[vehicle.lng, vehicle.lat]}
              onSelected={() => onSelectVehicle(vehicle)}
              onDeselected={() => onUnselectVehicle(null)}
            >
              <View
                style={{
                  height: ANNOTATION_SIZE,
                  width: ANNOTATION_SIZE,
                  backgroundColor: POINT_COLORS[vehicle.status],
                  borderRadius: ANNOTATION_SIZE / 2,
                }}
              />
            </PointAnnotation>
          );
        })}
      </Fragment>
    </MapView>
  );
};

export default Map;
